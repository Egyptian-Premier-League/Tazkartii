import axios from "API/axios";

const deleteUser = (dataFetch, auth, Id) => {
    if (!auth.isLoggedIn) return;
    if (Id === null || Id === undefined) return;
    console.log("deleteUser", Id);

    dataFetch({
        axiosInstance: axios,
        method: "DELETE",
        url: `/admins/delete-user/${Id}`,
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
                Authorization: `Bearer ${auth.accessToken}`,
            },
        },
    });
};

export default deleteUser;
