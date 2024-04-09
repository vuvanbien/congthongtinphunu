import axiosInstance from "./axiosInstance";

const fetchAllSocialPolitics = () => {
    return axiosInstance.get("/ctxh");
}
const postDetailSocialPolitics = (title) => {
    return axiosInstance.post("ctxh/get_new/", title);
}

export { fetchAllSocialPolitics, postDetailSocialPolitics };