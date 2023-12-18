import axios from "API/axios";

const reserveSeat = (dataFetch, auth, data) => {
  if (!auth.isLoggedIn) return;
  if (auth.role !== "Fan") return;
  if (data === undefined || data === null) return;

  const payload = {
    matchId: data.matchId,
    ...data,
  };
  console.log("payload: ", payload);

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/general/reserve-seat",
    requestConfig: {
      data: payload,
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export default reserveSeat;
