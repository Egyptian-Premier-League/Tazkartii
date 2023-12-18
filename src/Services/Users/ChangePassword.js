import axios from "API/axios";

const changePassword = (dataFetch, auth, data) => {
  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/users/edit-my-password",
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export default changePassword;
