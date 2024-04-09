import React, { useState, useEffect } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Avatar, List, Space } from 'antd';
import { postSearch } from '../../services/searchService';
import { shortenTitle } from '../../utils/ShortenTitle';
import { useDataContext } from '../../utils/getData';
const SearchPage = () => {
    const { handleClickSearchDetail, search } = useDataContext();
    console.log("search", search)
    return (
        <section class="utf_block_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 2,
                                lg: 4,
                                xl: 4,
                                xxl: 4,
                            }}
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 8,
                            }}
                            dataSource={search}
                            renderItem={(item) => (
                                <List.Item key={item.title}>
                                    <div class="utf_post_block_style post-grid clearfix">
                                        <div class="utf_post_thumb">
                                            <a href="#">
                                                <img class="img-fluid" src={item.image_url} alt="" />
                                            </a>
                                        </div>
                                        <div class="utf_post_content">
                                            <h2 class="utf_post_title title-large">
                                                <a onClick={() => handleClickSearchDetail(item.title)}>{item.title}</a>
                                            </h2>
                                            <p onClick={() => handleClickSearchDetail(item.title)}>{shortenTitle(item.p)}</p>
                                        </div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SearchPage