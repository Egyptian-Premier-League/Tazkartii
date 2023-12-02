import axios from "API/axios";

const getUsers = (dataFetch, auth, pageNumber, approved, role) => {
  if (!auth.isLoggedIn) return;
  if (pageNumber === null || pageNumber === undefined) {
    return;
  }

  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/admins/users?page=${pageNumber}&approved=${approved}&role=${role}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });
};
export default getUsers;
