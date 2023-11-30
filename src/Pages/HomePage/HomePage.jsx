import React from "react";
// import Header from "Components/Header/Header";
import { HomePageContainer } from "./HomePage.styled";

import MatchSchedule from "Layouts/MatchSchedule/MatchSchedule";

const matchData = [
  {
    id: 1,
    homeTeam: "Al Ahly",
    awayTeam: "Zamalek",
    venue: "Education City Stadium, Al Rayyan, 7km north-west of central Doha",
    date: "Today",
    time: "21:00",
    mainReferee: "Fahem Omar",
    linesmen: ["Linesman One", "Linesman Two"],
  },
  {
    id: 2,
    homeTeam: "Pyramids",
    awayTeam: "Ceramica Cleopatra",
    venue: "Cairo Stadium",
    date: "Today",
    time: "19:00",
    mainReferee: "Referee Name",
    linesmen: ["Linesman One", "Linesman Two"],
  },
  {
    id: 3,
    homeTeam: "Future FC",
    awayTeam: "Al Esmaily",
    venue: "Borg El Arab",
    date: "Tomorrow",
    time: "22:00",
    mainReferee: "Samir Osman",
    linesmen: ["Linesman One", "Linesman Two"],
  },
];

const HomePage = () => {
  return <HomePageContainer>
  <MatchSchedule matchData={matchData} />
  </HomePageContainer>;
};

export default HomePage;
