import axiosInstance from "./axiosInstance";

const fetchAllFamily = () => {
    return axiosInstance.get("/giadinh");
}
const postDetailFamily = (title) => {
    return axiosInstance.post("giadinh/get_new/", title);
}

export { fetchAllFamily, postDetailFamily };