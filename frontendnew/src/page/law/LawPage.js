import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchAllLaw } from '../../services/lawService';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Avatar, List, Space } from 'antd';
import { postDetailLaw } from '../../services/lawService';
import { shortenTitle } from '../../utils/ShortenTitle';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faVimeoSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useDataContext } from '../../utils/getData';

const LawPage = () => {
    const {
        data, socialPolitics, family, healthCare, babyCare,
        laborEmployment,
        handleClick,
        handleClickSocialPolitics,
        handleClickFamily,
        handleClickHealthCare,
        handleClickBabyCare,
        handleClickLaborEmployment } = useDataContext();
    return (
        <>
            <section class="utf_featured_post_area pt-4 no-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 pad-r">
                            {
                                data.slice(0, 1).map((item, index) => (
                                    <div key={index} id="utf_featured_slider" class="owl-carousel owl-theme utf_featured_slider">
                                        <div class="item" style={{ backgroundImage: `url(${item.image_url})` }}>
                                            <div class="utf_featured_post">
                                                <div class="utf_post_content">
                                                    <a class="utf_post_cat" href="#">Pháp luật</a>
                                                    <h2 class="utf_post_title title-extra-large">
                                                        <a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClick(item.title)}>{item.title}</a>
                                                    </h2>
                                                    <span class="utf_post_date"><i class="fa fa-clock-o"></i> {item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class="col-lg-5 col-md-12 pad-l">
                            <div class="row">
                                <div class="col-md-12">
                                    {
                                        data.slice(1, 2).map((item, index) => (
                                            <div key={index} class="utf_post_overaly_style contentTop hot-post-top clearfix">
                                                <div class="utf_post_thumb"> <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a> </div>
                                                <div class="utf_post_content"> <a class="utf_post_cat" href="#">Pháp luật</a>
                                                    <h2 class="utf_post_title title-large"> <a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClick(item.title)}>{shortenTitle(item.title)}</a> </h2>
                                                    <span class="utf_post_date"><i class="fa fa-clock-o"></i> {item.date}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    data.slice(2, 4).map((item, index) => (
                                        <div key={index} class="col-md-6 pad-r-small">
                                            <div class="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix">
                                                <div class="utf_post_thumb"> <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a> </div>
                                                <div class="utf_post_content"> <a class="utf_post_cat" href="#">Pháp luật</a>
                                                    <h2 class="utf_post_title title-medium"> <a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClick(item.title)}>{shortenTitle(item.title)}</a> </h2>
                                                    <div class="utf_post_meta"> <span class="utf_post_author"><i class="fa fa-user"></i> <a href="#">{item.date}</a></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* pháp luật */}
            <section class="utf_latest_new_area pb-bottom-20">
                <div class="container">
                    <div class="utf_latest_news block color-red">
                        <h3 class="utf_block_title"><span>Pháp luật</span></h3>
                        <div id="utf_latest_news_slide" class="owl-carousel owl-theme utf_latest_news_slide">
                            {
                                data && data.length > 0 && (
                                    [...Array(Math.ceil(data.length / 4))].map((_, rowIndex) => (
                                        <div key={rowIndex} className="row">
                                            {[...Array(4)].map((_, colIndex) => {
                                                const dataIndex = (rowIndex * 4) + colIndex + 4;
                                                const item = data[dataIndex];
                                                if (item) {
                                                    return (
                                                        <div key={colIndex} className="col-md-3">
                                                            <div className="item">
                                                                <ul className="utf_list_post">
                                                                    <li className="clearfix">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb">
                                                                                <a href="#"><img className="img-fluid" style={{ height: "174px", width: "236px" }} src={item.image_url} alt="" /></a>
                                                                            </div>
                                                                            <a className="utf_post_cat" href="#">Pháp luật</a>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title title-medium" onClick={() => handleClick(item.title)}> {shortenTitle(item.title)} </h2>
                                                                                <div className="utf_post_meta">
                                                                                    <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">{item.date}</a></span>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    );
                                                } else {
                                                    return null;
                                                }
                                            })}
                                        </div>
                                    )).slice(0, 2)
                                )}

                        </div>
                    </div>
                </div>
            </section>
            {/* chính trị-xã hội */}
            <section class="utf_block_wrapper p-bottom-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="utf_featured_tab color-blue">
                                <h3 class="utf_block_title"><span>Chính trị-xã hội</span></h3>
                                <div class="tab-content">
                                    <div class="tab-pane active animated fadeInRight" id="tab_a">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="utf_post_block_style clearfix">
                                                    {socialPolitics.slice(0, 1).map((item, index) => (
                                                        <div key={index} class="utf_post_thumb">
                                                            <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                            <a class="utf_post_cat" href="#">Xã hội</a>
                                                            <div class="utf_post_content">
                                                                <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickSocialPolitics(item.title)} >{item.title}</a></h2>
                                                                <div class="utf_post_meta">
                                                                    <span class="utf_post_author"><i class="fa fa-user"></i><a href="#">{item.data}</a></span>

                                                                </div>
                                                                <p></p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="utf_list_post_block">
                                                    <ul class="utf_list_post">
                                                        {
                                                            socialPolitics.slice(1, 6).map((item, index) => (
                                                                <li class="clearfix">
                                                                    <div class="utf_post_block_style post-float clearfix">
                                                                        <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> </div>
                                                                        <div class="utf_post_content">
                                                                            <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickSocialPolitics(item.title)} >{item.title}</a> </h2>

                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gia đình */}
                            <div class="gap-30"></div>
                            <div class="block color-orange">
                                <h3 class="utf_block_title"><span>Gia đình</span></h3>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="utf_post_overaly_style clearfix">
                                            {family.slice(0, 1).map((item, index) => (
                                                <div key={index} class="utf_post_thumb">
                                                    <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                    <div class="utf_post_content">
                                                        <a class="utf_post_cat" href="#">Gia đình</a>
                                                        <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickFamily(item.title)}>{item.title}</a></h2>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div class="utf_list_post_block">
                                            <ul class="utf_list_post">
                                                {
                                                    family.slice(1, 5).map((item, index) => (
                                                        <li class="clearfix">
                                                            <div class="utf_post_block_style post-float clearfix">
                                                                <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> <a class="utf_post_cat" href="#">Gia đình</a> </div>
                                                                <div class="utf_post_content">
                                                                    <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickFamily(item.title)}>{item.title}</a> </h2>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="utf_post_overaly_style last clearfix">
                                            {family.slice(5, 6).map((item, index) => (
                                                <div key={index} class="utf_post_thumb">
                                                    <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                    <div class="utf_post_content">
                                                        <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickFamily(item.title)}>{item.title}</a></h2>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div class="utf_list_post_block">
                                            <ul class="utf_list_post">
                                                {
                                                    family.slice(6, 10).map((item, index) => (
                                                        <li class="clearfix">
                                                            <div class="utf_post_block_style post-float clearfix">
                                                                <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> <a class="utf_post_cat" href="#">Gia đình</a> </div>
                                                                <div class="utf_post_content">
                                                                    <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickFamily(item.title)}>{item.title}</a> </h2>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12">
                            <div class="sidebar utf_sidebar_right">
                                <div class="widget">
                                    <h3 class="utf_block_title"><span>Theo dõi</span></h3>
                                    <ul class="social-icon">
                                        <li>
                                            <a href="#" target="_blank" >
                                                <FontAwesomeIcon style={{ width: "44px", height: "44px", borderRadius: "36px", fontSize: "10px" }} icon={faRss} />
                                            </a>
                                        </li>
                                        <li style={{ marginLeft: "15px" }}><a href="#" target="_blank"><FontAwesomeIcon style={{ width: "44px", height: "44px", borderRadius: "36px", fontSize: "10px" }} icon={faFacebook} /></a></li>
                                        <li style={{ marginLeft: "15px" }}><a href="#" target="_blank"><FontAwesomeIcon style={{ width: "44px", height: "44px", borderRadius: "36px", fontSize: "10px" }} icon={faTwitter} /></a></li>
                                        <li style={{ marginLeft: "15px" }}><a href="#" target="_blank"><FontAwesomeIcon style={{ width: "44px", height: "44px", borderRadius: "36px", fontSize: "10px" }} icon={faGooglePlus} /></a></li>
                                        <li style={{ marginLeft: "15px" }}><a href="#" target="_blank"><FontAwesomeIcon style={{ width: "44px", height: "44px", borderRadius: "36px", fontSize: "10px" }} icon={faVimeoSquare} /></a></li>
                                        <li style={{ marginLeft: "15px" }}><a href="#" target="_blank"><FontAwesomeIcon style={{ width: "44px", height: "44px", borderRadius: "36px", fontSize: "10px" }} icon={faYoutube} /></a></li>
                                    </ul>
                                </div>

                                <div class="widget color-default">
                                    <h3 class="utf_block_title"><span>Tin tức mới</span></h3>
                                    <div class="utf_post_overaly_style clearfix">
                                        {socialPolitics.slice(6, 7).map((item, index) => (
                                            <div key={index} class="utf_post_thumb">
                                                <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                <div class="utf_post_content">
                                                    <a class="utf_post_cat" href="#">Chính trị</a>
                                                    <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickSocialPolitics(item.title)}>{item.title}</a></h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div class="utf_list_post_block">
                                        <ul class="utf_list_post">
                                            {
                                                socialPolitics.slice(15, 19).map((item, index) => (
                                                    <li class="clearfix">
                                                        <div class="utf_post_block_style post-float clearfix">
                                                            <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> <a class="utf_post_cat" href="#">Chính trị</a> </div>
                                                            <div class="utf_post_content">
                                                                <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickSocialPolitics(item.title)}>{item.title}</a> </h2>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>

                                <div class="widget color-default m-bottom-0">
                                    <h3 class="utf_block_title"><span>Xu hướng</span></h3>
                                    <div id="utf_post_slide" class="owl-carousel owl-theme utf_post_slide">
                                        <div class="item">
                                            <div class="utf_post_overaly_style text-center clearfix">
                                                {family.slice(10, 11).map((item, index) => (
                                                    <div key={index} class="utf_post_thumb">
                                                        <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                        <div class="utf_post_content">
                                                            <a class="utf_post_cat" href="#">Gia đình</a>
                                                            <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickFamily(item.title)}>{item.title}</a></h2>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div class="item">
                                            <div class="utf_post_overaly_style text-center clearfix">
                                                {
                                                    family.slice(11, 12).map((item, index) => (
                                                        <div key={index} class="utf_post_thumb">
                                                            <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                            <div class="utf_post_content"> <a class="utf_post_cat" href="#">Gia đình</a>
                                                                <h2 class="utf_post_title"> <a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickFamily(item.title)}>{item.title}</a> </h2>

                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* chính trị-xã hội */}
            {/* chăm sóc sức khỏe,chăm sóc trẻ */}
            <section class="utf_block_wrapper p-bottom-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="block color-dark-blue">
                                <h3 class="utf_block_title"><span>Chăm sóc sức khỏe</span></h3>
                                <div class="utf_post_overaly_style clearfix">
                                    {
                                        healthCare.slice(0, 1).map((item, index) => (
                                            <div key={index} class="utf_post_thumb">
                                                <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                                <div class="utf_post_content">
                                                    <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickHealthCare(item.title)}>{item.title}</a></h2>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                                <div class="utf_list_post_block">
                                    <ul class="utf_list_post">
                                        {
                                            healthCare.slice(1, 4).map((item, index) => (
                                                <li class="clearfix">
                                                    <div class="utf_post_block_style post-float clearfix">
                                                        <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> </div>
                                                        <div class="utf_post_content">
                                                            <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickHealthCare(item.title)}>{item.title}</a> </h2>

                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="block color-aqua">
                                <h3 class="utf_block_title"><span>chăm sóc trẻ</span></h3>
                                <div class="utf_post_overaly_style clearfix">
                                    {babyCare.slice(0, 1).map((item, index) => (
                                        <div key={index} class="utf_post_thumb">
                                            <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                            <div class="utf_post_content">
                                                <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickBabyCare(item.title)}>{item.title}</a></h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div class="utf_list_post_block">
                                    <ul class="utf_list_post">
                                        {
                                            babyCare.slice(1, 4).map((item, index) => (
                                                <li class="clearfix">
                                                    <div class="utf_post_block_style post-float clearfix">
                                                        <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> </div>
                                                        <div class="utf_post_content">
                                                            <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickBabyCare(item.title)}>{item.title}</a> </h2>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="block color-violet">
                                <h3 class="utf_block_title"><span>Lao động việc làm</span></h3>
                                <div class="utf_post_overaly_style clearfix">
                                    {laborEmployment.slice(0, 1).map((item, index) => (
                                        <div key={index} class="utf_post_thumb">
                                            <a href="#"><img class="img-fluid" src={item.image_url} alt="" /></a>
                                            <div class="utf_post_content">
                                                <h2 class="utf_post_title"><a style={{ cursor: "pointer", color: "#fff" }} onClick={() => handleClickLaborEmployment(item.title)}>{item.title}</a></h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div class="utf_list_post_block">
                                    <ul class="utf_list_post">
                                        {
                                            laborEmployment.slice(1, 4).map((item, index) => (
                                                <li class="clearfix">
                                                    <div class="utf_post_block_style post-float clearfix">
                                                        <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> </div>
                                                        <div class="utf_post_content">
                                                            <h2 class="utf_post_title title-small"> <a style={{ cursor: "pointer" }} onClick={() => handleClickLaborEmployment(item.title)}>{item.title}</a> </h2>

                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* chăm sóc sức khỏe,chăm sóc trẻ */}
        </>
    )
}
export default LawPage