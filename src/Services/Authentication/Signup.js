import axios from "API/axios";

const signup =async (dataFetch, objectData) => {
  try {
    console.log(axios);
    console.log("====================================");
    console.log("Signup data: ", objectData);
    dataFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/auth/signup",
      requestConfig: { data: objectData },
    });
    console.log("After Signup data: ", objectData);
    return true;
  } catch (error) { 
    console.error("Signup error: ", error);
    throw error;
  }

//   const response = await fetch("http://localhost:5000/auth/signup", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include other headers as needed
//     },
//     body: JSON.stringify(objectData), // Make sure to stringify the payload
//     // credentials: 'include', // Uncomment if you're dealing with cookies
//   });

//   if (!response.ok) {
//     // If the response is not 2xx, throw an error
//     const errorData = await response.json();
//     throw new Error(errorData.message || 'Something went wrong');
//   }
// console.log("Response: ", response)
//   return response; // Return the response for further processing
};


export default signup;
