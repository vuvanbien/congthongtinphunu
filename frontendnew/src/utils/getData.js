import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchAllLaw } from '../services/lawService';
import { postDetailLaw } from '../services/lawService';
import { fetchAllSocialPolitics } from '../services/socialPoliticsService';
import { postDetailSocialPolitics } from '../services/socialPoliticsService';
import { fetchAllFamily } from '../services/familyService';
import { postDetailFamily } from '../services/familyService';
import { fetchAllHealthCare } from '../services/healthCareService';
import { postDetailHealthCare } from '../services/healthCareService';
import { fetchAllBabyCare } from '../services/babyCareService';
import { postDetailBabyCare } from '../services/babyCareService';
import { fetchAllLaborEmployment } from '../services/LaborEmploymentService';
import { postDetailLaborEmployment } from '../services/LaborEmploymentService';
import { fetchAllEntertainment } from '../services/entertainmentService';
import { postDetailEntertainment } from '../services/entertainmentService';
import { postSearchDetail } from '../services/searchService';
import { postSearch } from '../services/searchService';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [socialPolitics, setSocialPolitics] = useState([])
    const [family, setFamily] = useState([])
    const [healthCare, setHealthCare] = useState([])
    const [babyCare, setBabyCare] = useState([])
    const [laborEmployment, setLaborEmployment] = useState([])
    const [entertainment, setEntertainment] = useState([])
    const [search, setSearch] = useState([])
    const [dataSearch, setDataSearch] = useState(null)
    const [dataDetail, setDataDetail] = useState(null);
    const [dataSocialPolitics, setDataSocialPolitics] = useState(null);
    const [dataHealthCare, setDataHealthCare] = useState(null);
    const [dataBabyCare, setDataBabyCare] = useState(null);
    const [dataLaborEmployment, setDataLaborEmployment] = useState(null);
    const [dataFamily, setDataFamily] = useState(null);
    const [dataEntertainment, setDataEntertainment] = useState(null)
    const navigate = useNavigate()

    //lấy dữ liệu pháp luật
    const getLaw = async () => {
        try {
            let res = await fetchAllLaw();
            setData(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    //xem chi tiết pháp luật
    const handleClick = async (title) => {
        const res = await postDetailLaw({ title: title }); // Gửi title như một object
        setDataDetail(res.data);
        navigate(`get_new/`)
    }
    //lấy dữ liệu chính trị xã hội
    const getSocialPolitics = async () => {
        try {
            let res = await fetchAllSocialPolitics();
            setSocialPolitics(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    //xem chi tiết  chính trị-xã hội
    const handleClickSocialPolitics = async (title) => {
        const res = await postDetailSocialPolitics({ title: title }); // Gửi title như một object
        setDataSocialPolitics(res.data);
        navigate(`/ctxh/get_new`)
    }
    //lấy dữ liệu gia đình
    const getFamily = async () => {
        try {
            let res = await fetchAllFamily();
            setFamily(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    //xem chi tiết gia đình
    const handleClickFamily = async (title) => {
        const res = await postDetailFamily({ title: title }); // Gửi title như một object
        setDataFamily(res.data);
        navigate(`/giadinh/get_new`)
    }
    //lấy dữ liệu chăm sóc sức khỏe
    const getHealthCare = async () => {
        try {
            let res = await fetchAllHealthCare();
            setHealthCare(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    //xem chi tiết chăm sóc sức khỏe
    const handleClickHealthCare = async (title) => {
        const res = await postDetailHealthCare({ title: title }); // Gửi title như một object
        setDataHealthCare(res.data);
        navigate(`/cssk/get_new`)
    }
    //lấy dữ liệu chăm sóc trẻ
    const getBabyCare = async () => {
        try {
            let res = await fetchAllBabyCare();
            setBabyCare(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    // xem chi tiết chăm sóc trẻ
    const handleClickBabyCare = async (title) => {
        const res = await postDetailBabyCare({ title: title }); // Gửi title như một object
        setDataBabyCare(res.data);
        console.log(title)
        navigate(`/chamsoctre/get_new`)
    }
    //lấy dữ liệu lao dộng việc làm
    const getLaborEmployment = async () => {
        try {
            let res = await fetchAllLaborEmployment();
            setLaborEmployment(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    //xem chi tiết lao động viẹc làm
    const handleClickLaborEmployment = async (title) => {
        const res = await postDetailLaborEmployment({ title: title }); // Gửi title như một object
        setDataLaborEmployment(res.data);
        navigate(`/ldvl/get_new`)
    }
    //lấy dữ liệu giải trí
    const getEntertainment = async () => {
        try {
            let res = await fetchAllEntertainment();
            setEntertainment(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    //xem chi tiết giải trí
    const handleClickEntertainment = async (title) => {
        const res = await postDetailEntertainment({ title: title }); // Gửi title như một object
        setDataEntertainment(res.data);
        navigate(`/giaitri/get_new`)
    }
    //tìm kiếm 
    const handleClickSearch = async (title) => {
        try {
            console.log("values", title);
            const res = await postSearch({ title: title });
            if (res) {
                setSearch(res);
                message.success("Thành công");
                navigate(`/search`);
            } else {
                message.error(res.message);
            }
        } catch (err) {
            console.log(err);
            message.error("Đăng nhập thất bại");
        }
    };
    //xem chi tiết khi đã tìm kiếm
    const handleClickSearchDetail = async (title) => {
        const res = await postSearchDetail({ title: title });
        setDataSearch(res.data);
        console.log("data", res.data)
        navigate(`/search/get_new`)
    }
    useEffect(() => {
        getLaw();
        getSocialPolitics();
        getFamily();
        getHealthCare();
        getBabyCare();
        getLaborEmployment();
        getEntertainment()
    }, [])

    return (
        <DataContext.Provider
            value={{
                data, socialPolitics, family, healthCare, babyCare,
                laborEmployment, dataDetail, dataSocialPolitics, dataHealthCare,
                dataBabyCare, dataLaborEmployment, dataFamily, entertainment, dataEntertainment, search, dataSearch, setSearch,
                handleClick,
                handleClickSocialPolitics,
                handleClickFamily,
                handleClickHealthCare,
                handleClickBabyCare,
                handleClickLaborEmployment,
                handleClickEntertainment,
                handleClickSearch,
                handleClickSearchDetail
            }}>
            {children}
        </DataContext.Provider>
    );
}