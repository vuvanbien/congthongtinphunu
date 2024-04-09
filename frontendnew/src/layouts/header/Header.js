import React, { useRef, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { message } from 'antd';
import "../../css/responsive.scss"
import logo from "../../Images/logo.jpg"
import { postSearch } from '../../services/searchService';
import { useDataContext } from '../../utils/getData';
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [title, setTitle] = useState('');
    const searchBlockRef = useRef(null);
    const { setSearch } = useDataContext();
    const navigate = useNavigate()
    const toggleDisplay = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    //tìm kiếm 
    const handleClickSearch = async (e) => {
        e.preventDefault();
        try {
            console.log("values", title);
            const res = await postSearch({ title: title });
            if (res) {
                setSearch(res.data);
                navigate(`/search`);
            } else {
                message.error(res.message);
            }
        } catch (err) {
            console.log(err);
            message.error("Đăng nhập thất bại");
        }
    };

    return (
        <>
            <header id="header" class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                            <div class="logo"> <a href="index.html"> <img src={logo} alt="" /> </a> </div>
                        </div>
                        <div class="col-md-9 col-sm-12 header-right">
                            <div class="ad-banner float-right"> <a href="#"><img src="images/banner-ads/ad-top-header.png" class="img-fluid" alt="" /></a> </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="utf_main_nav_area clearfix utf_sticky">
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg col">
                            <div class="utf_site_nav_inner float-left">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                                <div id="navbarSupportedContent" class="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul class="nav navbar-nav">
                                        <li class="nav-item dropdown active"> <NavLink to="/" class="nav-link" >Trang chủ </NavLink>
                                        </li>
                                        <li > <NavLink to="/ctxh" class="nav-link " data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">Chính trị-Xã hội </NavLink>

                                        </li>
                                        <li>  <NavLink to="/giadinh">Gia đình</NavLink> </li>
                                        <li class="dropdown nav-item utf_mega_dropdown"> <NavLink to="/cssk" class="nav-link " data-toggle="dropdown">Chăm sóc sức khỏe </NavLink>
                                        </li>
                                        <li> <NavLink to="/chamsoctre">Chăm sóc trẻ</NavLink> </li>
                                        <li> <NavLink to="/ldvl">Lao động việc làm <i class="fa fa-angle-down"></i></NavLink>
                                        </li>
                                        <li > <NavLink to="/giaitri">Giải trí <i class="fa fa-angle-down"></i></NavLink>
                                        </li>
                                        <li > <NavLink to="/phapluat">Pháp luật <i class="fa fa-angle-down"></i></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="utf_nav_search" onClick={toggleDisplay}> <FontAwesomeIcon icon={faSearch} /> </div>
                        <div ref={searchBlockRef} className="utf_search_block" style={{ display: isSearchOpen ? 'block' : 'none' }} >
                            <form action="" onSubmit={handleClickSearch}>
                                <input
                                    type="text" class="form-control"
                                    placeholder="Type what you want and enter"
                                    value={title}
                                    onChange={changeTitle} />
                            </form>
                            <span class="utf_search_close" onClick={toggleDisplay}>&times;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header