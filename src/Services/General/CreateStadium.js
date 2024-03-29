import axios from "API/axios";

const createStadium = (dataFetch, auth, data) => {
  if (!auth.isLoggedIn) return;
  if (data.length === null || data.length === undefined) return;

  const payload = {
    ...data,
    seatsNumber: Number(data.length),
    rowsNumber: Number(data.width),
  };

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/general/stadium",
    requestConfig: {
      data: payload,
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export default createStadium;
