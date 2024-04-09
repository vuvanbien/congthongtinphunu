import axiosInstance from "./axiosInstance";

const fetchAllLaw = () => {
    return axiosInstance.get();
}
const postDetailLaw = (title) => {
    return axiosInstance.post("/get_new/", title);
}

export { fetchAllLaw, postDetailLaw };