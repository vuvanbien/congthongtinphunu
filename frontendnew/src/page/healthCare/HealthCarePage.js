import React, { useState, useEffect } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Avatar, List, Space } from 'antd';
import { fetchAllHealthCare } from '../../services/healthCareService';
import { postDetailHealthCare } from '../../services/healthCareService';
import { shortenTitle } from '../../utils/ShortenTitle';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faVimeoSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useDataContext } from '../../utils/getData';
const HealthCarePage = () => {
    const { handleClickHealthCare, healthCare } = useDataContext();
    return (
        <section class="utf_block_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 2,
                                lg: 2,
                                xl: 2,
                                xxl: 2,
                            }}
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 8,
                            }}
                            dataSource={healthCare.slice(4)}
                            renderItem={(item) => (
                                <List.Item key={item.title}>
                                    <div class="utf_post_block_style post-grid clearfix">
                                        <div class="utf_post_thumb">
                                            <a href="#">
                                                <img class="img-fluid" src={item.image_url} alt="" />
                                            </a>
                                        </div>
                                        <a class="utf_post_cat" href="#">Sức khỏe</a>
                                        <div class="utf_post_content">
                                            <h2 class="utf_post_title title-large">
                                                <a onClick={() => handleClickHealthCare(item.title)}>{item.title}</a>
                                            </h2>
                                            <p onClick={() => handleClickHealthCare(item.title)}>{shortenTitle(item.p)}</p>
                                        </div>
                                    </div>
                                </List.Item>
                            )}
                        />
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
                                <div class="utf_list_post_block">
                                    <ul class="utf_list_post">
                                        {
                                            healthCare.slice(0, 4).map((item, index) => (
                                                <li class="clearfix">
                                                    <div class="utf_post_block_style post-float clearfix">
                                                        <div class="utf_post_thumb"> <a href="#"> <img class="img-fluid" src={item.image_url} alt="" /> </a> <a class="utf_post_cat" href="#">Sức khỏe</a> </div>
                                                        <div class="utf_post_content">
                                                            <h2 class="utf_post_title title-small"> <a onClick={() => handleClickHealthCare(item.title)}>{item.title}</a> </h2>

                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                            <div class="widget text-center"> <img class="banner img-fluid" src="images/banner-ads/ad-sidebar.png" alt="" /> </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HealthCarePage