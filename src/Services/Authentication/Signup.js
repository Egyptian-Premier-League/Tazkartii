import axios from "API/axios";

const signup = (dataFetch, objectData) => {
  if (
    typeof objectData.username === "string" &&
    typeof objectData.email === "string" &&
    typeof objectData.password === "string"
  ) {
    dataFetch({
      axiosInstance: axios,
      method: "post",
      url: "/auth/signup",
      requestConfig: { data: objectData },
    });
    return true;
  }
  return false;
};

export default signup;
