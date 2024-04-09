import axiosInstance from "./axiosInstance";

const fetchAllBabyCare = () => {
    return axiosInstance.get("/chamsoctre");
}
const postDetailBabyCare = (title) => {
    return axiosInstance.post("chamsoctre/get_new/", title);
}

export { fetchAllBabyCare, postDetailBabyCare };