import axios from "API/axios.js";

const getMatches = (dataFetch, pageNumber) => {
  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/general/matches?page=${pageNumber}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

const getMatchDetails = (dataFetch, matchId) => {
  console.log("matchId in services: ", matchId);
  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/general/match-details/${matchId}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};
const editMatch = (dataFetch, data, matchId, auth) => {
  if (!auth.isLoggedIn) return;
  if (auth.role !== "Manager") return;
  console.log("data: ", data);

  dataFetch({
    axiosInstance: axios,
    method: "PUT",
    url: `/general/edit-match/${matchId}`,
    data: data,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

const createMatch = (dataFetch, data, auth) => {
  if (!auth.isLoggedIn) return;
  if (auth.role !== "Manager") return;
  console.log("data: ", data);

  const payload = {
    ...data,
    homeTeamId: Number(data.homeTeamId),
    awayTeamId: Number(data.awayTeamId),
    stadiumId: Number(data.stadiumId),
  };

  // data.map((key) => console.log(typeof key));
  console.log("Payload: ", payload);

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: `/general/create-match`,
    data: {
      homeTeamId: 2,
      awayTeamId: 12,
      matchDate: "2023-12-30T07:30:00",
      stadiumId: 11,
      mainReferee: "Samir Osman",
      firstLineMan: "Ahmed",
      secondLineMan: "Mohamed",
    },
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export { getMatches, editMatch, getMatchDetails, createMatch };
