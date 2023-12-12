import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledApp } from "../AppStyles";
import { createCalendar1 } from "../lib/createCalendar1";
import Door from "../door";


function Calender1() {
  const [doors, setDoors] = useState([]);
  const [show, setShow] = useState(false);
  const [currentDoorVideo, setCurrentDoorVideo] = useState(0);

  useEffect(() => {
    
    const calendar = localStorage.calendar1
      ? JSON.parse(localStorage.calendar1)
      : createCalendar1();

    setDoors(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    
    doors.length && localStorage.setItem("calendar1", JSON.stringify(doors));
  }, [doors]);

  const handleFlipDoor = (id, nr) => {

    // Get current date
    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    if(nr > currentDay){
      alert("Denne luken er ikke åpnet enda!")
      return
    }


    console.log(id)
   
    // Check if earlier doors are open
    for (let i = 0; i < nr-1; i++) {
      if(doors[i].open === false){
        alert("Du må åpne luken foran først!")
        return
      }
    }

    if(doors[nr-1].open === true){
      //alert("Du har allerede åpnet denne luken!")
      setCurrentDoorVideo(doors[nr-1].youtubeId)
      setShow(true)
      return
    }
    const updatedDoors = doors.map(door =>
      door.id === id ? { ...door, open: !door.open } : door
    );
    setDoors(updatedDoors);
  };

  return (
    <>
        <div className="mt-4"></div>
        <div className="row ">
          <div className="col-md-3">
                <a href="/" className="btn btn-primary"> {"<"} Tilbake</a>
                <div className="mt-3"></div>
          </div>
          <div className="col-md-6">
            <div className="card text-center">
              <h1>JULEREISEN TIL ATLANTIS</h1>
            </div>
          </div>
        </div>
        
      <StyledApp>
        {doors.map(door => (
          <Door
            key={door.id}
            doorData={door}
            handleClick={handleFlipDoor}
          />
        ))}
      </StyledApp>
      {show && (

     
      <div className="card" style={{
        position: "fixed",
        width: "90vw",
        height: 90/ 1.777 + "vw",
        top: "50%",
        left: "50%",
        marginTop: -45 / 1.777 + "vw", /* Negative half of height. */
        marginLeft: "-45vw", /* Negative half of width. */
        zIndex: "1000"
      }}>
        <div className="row justify-content-end">
          <div className="col-md-2">
          <button className="btn btn-danger w-100" onClick={() => setShow(false)}>Lukk</button>
          </div>
        </div>
        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + currentDoorVideo } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen controls></iframe>

      </div>
       )}
    </>
  );
}

export default Calender1;