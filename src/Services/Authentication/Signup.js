import axios from "API/axios";

const signup = (dataFetch, objectData) => {
  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/auth/signup",
    requestConfig: {
      data: objectData,
      headers: {
        "Content-Language": "en-US",
        // Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default signup;
