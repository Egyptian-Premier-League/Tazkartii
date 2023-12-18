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

  const payload = { ...data, homeTeamId: Number(data.homeTeamId), awayTeamId: Number(data.awayTeamId), stadiumId: Number(data.stadiumId) };
  console.log("Payload: ", payload);
  dataFetch({
    axiosInstance: axios,
    method: "PUT",
    url: `/general/edit-match/${matchId}`,
    requestConfig: {
      data: payload,
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

  console.log("Payload: ", payload);

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: `/general/create-match`,
    requestConfig: {
      data: payload,
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export { getMatches, editMatch, getMatchDetails, createMatch };
