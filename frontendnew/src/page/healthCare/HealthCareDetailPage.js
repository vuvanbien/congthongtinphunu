import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../utils/getData';
const HealthCareDetailPage = () => {
    const { dataHealthCare } = useDataContext();
    return (
        <div class="utf_block_wrapper about-block-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="single-post">
                            <div class="utf_post_content-area">
                                <div class="entry-content">
                                    {dataHealthCare && dataHealthCare.map((item, index) => (

                                        <div key={index}>
                                            <h5 style={{ fontWeight: 700 }}>{item.title}</h5>
                                            {item.detail_data && item.detail_data.map((detailItem, detailIndex) => (
                                                <div key={detailIndex}>
                                                    <p> {detailItem.text}</p>
                                                    {detailItem.image && <img src={detailItem.image} alt={`Image ${detailIndex}`} />}
                                                </div>
                                            ))}
                                            {/* {item.image && <img src={item.image} alt={`Image ${index}`} />} */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthCareDetailPage;
