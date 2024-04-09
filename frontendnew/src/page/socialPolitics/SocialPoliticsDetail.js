import React, { useEffect, useState } from 'react';
import { postDetailLaw } from '../../services/lawService';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../utils/getData';
const SocialPoliticsDetail = () => {
    // console.log(dataSocialPolitics)
    const { dataSocialPolitics } = useDataContext();
    return (
        <div>
            <div class="utf_block_wrapper about-block-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="single-post">
                                <div class="utf_post_content-area">
                                    <div class="entry-content">
                                        {dataSocialPolitics && dataSocialPolitics.map((item, index) => (
                                            <div key={index}>
                                                <h5 style={{ fontWeight: 700 }}>{item.title}</h5>
                                                {item.detail_data && item.detail_data.map((detailItem, detailIndex) => (
                                                    <div key={detailIndex}>
                                                        {detailItem.image && <img src={detailItem.image} alt={`Image ${detailIndex}`} />}
                                                        <p> {detailItem.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SocialPoliticsDetail;
