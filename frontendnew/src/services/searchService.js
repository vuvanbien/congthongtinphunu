import axiosInstance from "./axiosInstance";
const postSearchDetail = (title) => {
    return axiosInstance.post("search/get_new/", title)
}
const postSearch = (title) => {
    return axiosInstance.post("search/", title);
}

export { postSearch, postSearchDetail };