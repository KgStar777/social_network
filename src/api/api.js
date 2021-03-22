import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api1.0/"

const instance = axios.create(
    {
        baseURL: baseUrl,
        withCredentials: true,
        headers: {
            "API-KEY": "62b68f0b-f81d-49a4-b0f9-382535a28000"
        }
    }
);

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
}
