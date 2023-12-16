import axios from "API/axios";

const getReservations = (dataFetch, auth) => {
  if (!auth.isLoggedIn) return;

  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/users/my-reservations`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

const cancelReservation = (dataFetch, reservationId, auth) => {
  if (!auth.isLoggedIn) return;
  if (auth.role !== "Fan") return;
  console.log("reservationId: ", reservationId);

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: `/users/cancel-reservation/${reservationId}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export { getReservations, cancelReservation };
