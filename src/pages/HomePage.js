import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 2rem 2rem;
  animation: fadeIn 0.8s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c41e3a 0%, #165b33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  font-family: 'Dancing Script', cursive;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 0.5rem;
`;

const CalendarGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
  max-width: 900px;
  margin: 0 auto;
`;

const CalendarCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
  }
`;

const CalendarImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CalendarCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CalendarContent = styled.div`
  padding: 2rem;
`;

const CalendarTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #c41e3a;
  margin-bottom: 1.5rem;
  font-family: 'Dancing Script', cursive;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #c41e3a 0%, #a01729 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(196, 30, 58, 0.3);

  &:hover {
    background: linear-gradient(135deg, #a01729 0%, #c41e3a 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(196, 30, 58, 0.4);
    color: white;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 700px;
  margin: 2rem auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.05rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const NotDecemberCard = styled(HeroCard)`
  padding: 4rem 2rem;

  h1 {
    font-size: 2.5rem;
    color: #c41e3a;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    color: #555;
  }
`;

export default function HomePage(){
    const date = new Date();
    const month = date.getMonth();

    if(month === 11){
        return (
            <>
            <HeroSection>
                <HeroCard>
                    <Title>God Jul!</Title>
                    <Subtitle>Det er desember, og det betyr at det er tid for å åpne en kalenderluke i Addexios julekalender!</Subtitle>
                    <Subtitle>Trykk på en av kalenderne under for å starte</Subtitle>
                </HeroCard>
            </HeroSection>

            <CalendarGrid>
                <CalendarCard>
                    <CalendarImageWrapper>
                        <img src="https://img.youtube.com/vi/BHAGK6T69sQ/maxresdefault.jpg" alt="Julereisen til Atlantis" />
                    </CalendarImageWrapper>
                    <CalendarContent>
                        <CalendarTitle>Julereisen til Atlantis</CalendarTitle>
                        <CTAButton href="/julereisen-til-atlantis">Til Kalenderen</CTAButton>
                    </CalendarContent>
                </CalendarCard>

                <CalendarCard>
                    <CalendarImageWrapper>
                        <img src="https://img.youtube.com/vi/FrrZSSRaZeU/maxresdefault.jpg" alt="Julereisen til Karibien" />
                    </CalendarImageWrapper>
                    <CalendarContent>
                        <CalendarTitle>Julereisen til Karibien</CalendarTitle>
                        <CTAButton href="/julereisen-til-karibien">Til Kalenderen</CTAButton>
                    </CalendarContent>
                </CalendarCard>
            </CalendarGrid>

            <InfoCard>
                <p>Her har jeg samlet alle Julekalenderne som Addexio har laget</p>
                <p>Denne nettsiden er ikke laget av eller sammen med Addexio, dette har jeg gjort på eget initiativ</p>
                <p>Jeg jobber fortsatt med å legge inn videoer. Det er kun Julereisen til Atlantis som er ferdig</p>
            </InfoCard>
        </>
        )
    }else {
        return (
            <HeroSection>
                <NotDecemberCard>
                    <h1>Det er ikke desember</h1>
                    <p>Kom tilbake i desember for å se Julekalenderne til Addexio</p>
                </NotDecemberCard>
            </HeroSection>
        )
    }
}
