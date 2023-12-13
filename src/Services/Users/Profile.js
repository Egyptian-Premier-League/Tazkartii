import axios from "API/axios";

const getProfile = (dataFetch, auth) => {
  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/users/my-data",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export default getProfile;
