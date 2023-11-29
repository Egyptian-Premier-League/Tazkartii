import axios from "API/axios";

const login = (dataFetch, objectData) => {
  if (
    typeof objectData.username === "string" &&
    typeof objectData.password === "string"
  ) {
    dataFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/api/auth/login",
      requestConfig: { data: objectData },
    });
    return true;
  }
  return false;
};

export default login;
