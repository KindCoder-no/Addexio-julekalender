import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledApp } from "../AppStyles";
import { createCalendar2 } from "../lib/createCalendar2";
import Door from "../door";

const CalendarHeader = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  color: #c41e3a;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #c41e3a;
    color: white;
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BackIcon = styled.span`
  font-size: 1.5rem;
`;

const HeaderCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

const CalendarTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c41e3a 0%, #165b33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-family: 'Dancing Script', cursive;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const VideoModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 1200px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, -45%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const ModalButtons = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 1001;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(196, 30, 58, 0.9);
  color: white;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #a01729;
    transform: rotate(90deg);
  }
`;

const YouTubeButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.9);
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: rgb(204, 0, 0);
    transform: scale(1.1);
    color: white;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function Calendar2() {
  const [doors, setDoors] = useState([]);
  const [show, setShow] = useState(false);
  const [currentDoorVideo, setCurrentDoorVideo] = useState(0);

  useEffect(() => {

    const calendar = localStorage.calendar2
      ? JSON.parse(localStorage.calendar2)
      : createCalendar2();

    setDoors(calendar);
  }, []);

  useEffect(() => {

    doors.length && localStorage.setItem("calendar2", JSON.stringify(doors));
  }, [doors]);

  const handleFlipDoor = (id, nr) => {

    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    if(nr > currentDay){
      alert("Denne luken er ikke åpnet enda!")
      return
    }


    for (let i = 0; i < nr-1; i++) {
      if(doors[i].open === false){
        alert("Du må åpne luken foran først!")
        return
      }
    }

    if(doors[nr-1].open === true){
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
        <CalendarHeader>
          <BackButton href="/">
            <BackIcon>←</BackIcon>
            Tilbake
          </BackButton>
          <HeaderCard>
            <CalendarTitle>JULEREISEN TIL KARIBIEN</CalendarTitle>
          </HeaderCard>
        </CalendarHeader>

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
        <>
          <ModalOverlay onClick={() => setShow(false)} />
          <VideoModal>
            <ModalButtons>
              <YouTubeButton
                href={`https://www.youtube.com/watch?v=${currentDoorVideo}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Åpne i YouTube"
              >
                ▶
              </YouTubeButton>
              <CloseButton onClick={() => setShow(false)}>×</CloseButton>
            </ModalButtons>
            <VideoWrapper>
              <iframe
                width="100%"
                height="100%"
                src={"https://www.youtube.com/embed/" + currentDoorVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
          </VideoModal>
        </>
      )}
    </>
  );
}

export default Calendar2;
