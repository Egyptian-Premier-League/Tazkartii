import axios from "API/axios";

const getProfile = (dataFetch) => {
  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/profile",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default getProfile;
