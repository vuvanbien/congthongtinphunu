import axiosInstance from "./axiosInstance";

const fetchAllLaborEmployment = () => {
    return axiosInstance.get("/ldvl");
}
const postDetailLaborEmployment = (title) => {
    return axiosInstance.post("ldvl/get_new/", title);
}

export { fetchAllLaborEmployment, postDetailLaborEmployment };