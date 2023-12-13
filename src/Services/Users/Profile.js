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

export const editProfile = (dataFetch, auth, data) => {
  if (!auth.isLoggedIn || !data) return;

  console.log(data);
  
  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/users/edit-my-data",
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
        authorization: `Bearer ${auth.accessToken}`,
      },
    },
    data,
  });
};
