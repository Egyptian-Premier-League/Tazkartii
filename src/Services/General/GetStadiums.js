import axios from "API/axios";

const getStadiums = (dataFetch, auth) => {
  if (!auth.isLoggedIn) return;

  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/general/stadiums`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};
export default getStadiums;
