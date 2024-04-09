import axiosInstance from "./axiosInstance";

const fetchAllHealthCare = () => {
    return axiosInstance.get("/cssk");
}
const postDetailHealthCare = (title) => {
    return axiosInstance.post("cssk/get_new/", title);
}

export { fetchAllHealthCare, postDetailHealthCare };