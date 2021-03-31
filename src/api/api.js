import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

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
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI obj')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

}

