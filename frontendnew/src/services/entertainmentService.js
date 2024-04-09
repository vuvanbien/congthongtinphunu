import axiosInstance from "./axiosInstance";

const fetchAllEntertainment = () => {
    return axiosInstance.get("/giaitri");
}
const postDetailEntertainment = (title) => {
    return axiosInstance.post("giaitri/get_new/", title);
}

export { fetchAllEntertainment, postDetailEntertainment };