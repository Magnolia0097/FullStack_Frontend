import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Main() {



    return (
        <div className='wrap'>
        <div className='container'>
            {/*  이것은 슬라이드 입니다 */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://media.wired.jp/photos/61cebf50e533d60bb2d608b6/master/w_2560%2Cc_limit/342dc07fca26f593dfe3a4a39d7690be.jpg" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>당신의 친구</h5>
                            <p>" 나랑 친구할래? "</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.aitimes.kr/news/photo/202101/18889_20836_2527.jpg" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>깔끔한 외형</h5>
                            <p>" 심장에 구멍도 뚫려있음! "</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.irobotnews.com/news/photo/201704/10465_23692_19.png" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>식사 가능</h5>
                            <p>" 나도 먹을래 "</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
            <hr />

            {/*  이것은 상품 목록 입니다 */}

        <div className='container'>
            <div className="card" style={{width:'18rem'}}>
                <img src="https://post-phinf.pstatic.net/MjAyMTAzMzFfMTMg/MDAxNjE3MTgyNDY5OTQ2.7lToiE1uDhnZ60mKOC8ZdK3xe9PVOx2pNdefS_afqdkg.hiWgkZfjEygAmhUuHcpv61eB80v3pOgS8_3ph8bQ_Ywg.JPEG/%EA%BC%AC%EB%A6%AC%EC%95%BC_%281%29.jpg?type=w1200" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link"> 구매할게요</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
            </div>

        </div>
    </div>




    )
}
