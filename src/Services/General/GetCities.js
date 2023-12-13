import axios from "API/axios";

const getCities = (dataFetch) => {
  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/general/cities",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default getCities;
