import React from "react";
import calender1img from "../img/julereisen-til-atlantis/1.jpg"
export default function HomePage(){
    const date = new Date();
    const month = date.getMonth();

    if(month === 11){
        return (
            <>
            <div className="mt-3"> </div>
            <div className="row justify-content-center">
                <div className="col-md-6 card text-center">
                    <h1>God Jul!</h1>
                    <p>Det er desember, og det betyr at det er tid for å åpne en kalenderluke i Addexios julekalender!</p>
                    <p>Trykk på en av kalenderne under for å starte</p>
                </div>
            </div>
            <div className="mt-5"></div>

            <div className="row justify-content-center">
            <div className="col-4 card">
                <h2>Julereisen til Atlantis</h2>
                <img src="https://img.youtube.com/vi/BHAGK6T69sQ/maxresdefault.jpg" width="100%" style={{padding: "20px"}} />
                <a className="btn btn-primary" href="/julereisen-til-atlantis" >Til Kalenderen</a>
                <div className="mt-3"></div>
            </div>
        </div>
        <div className="mt-5"></div>
        <div className="row justify-content-center">
           
            <div className="col-md-6 card text-center">
                <p>Her har jeg samlet alle Julekalenderne som Addexio har laget</p>
                <p>Denne nettsiden er ikke laget av eller sammen med Addexio, dette har jeg gjort på eget initiativ</p>
                <p>Jeg jobber fortsatt med å legge inn videoer. Det er kun Julereisen til Atlantis som er ferdig</p>
            </div>
        </div>
        <div className="mt-5"></div>

        </>
        )
    }else {
        return (
            <>
             <div className="mt-3"> </div>
            <div className="row justify-content-center">
                <div className="col-md-6 card text-center">
                    <h1>Det er ikke desember</h1>
                    <p>Kom tilbake i desember for å se Julekalenderne til Addexio</p>
                </div>
            </div>
            </>
        )
    }
    
}