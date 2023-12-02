import axios from "API/axios";

const approveUser = (dataFetch, auth, Id) => {
  if (!auth.isLoggedIn) return;
  if (Id === null || Id === undefined) return;

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: `/admins/approve-user/${Id}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};

export default approveUser;
