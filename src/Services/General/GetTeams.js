import axios from "API/axios";

const getTeams = (dataFetch, auth) => {
  if (!auth.isLoggedIn) return;

  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/general/teams`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};
export default getTeams;
