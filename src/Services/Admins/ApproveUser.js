import axios from "API/axios";
import { useAuth } from "Contexts/Auth-Context";

const approveUser = (dataFetch, Id) => {
  if (!useAuth.isLogggedIn) return;
  if (Id === null || Id === undefined) return;

  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: `/admins/approve-user/{${Id}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export default approveUser;
