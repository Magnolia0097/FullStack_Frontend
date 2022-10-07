import { height, textAlign, width } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminCss/Admin.css'

export default function test() {

    const noLine = {
        textDecoration: 'none',
    }

    const sideText ={
        textAlign:'center'
    }

    const sideIn = {

        width: '280px',
        marginwidth:'50%',
        textAlign:'Left'
    }

    const sideBar = {
        width:'250px',
        paddingleft:'40'
    }

    return (
            <div class="test11 flex-column flex-shrink-1 p-5 text-white bg-dark" style={sideIn}>
                <a href="/adpage" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <svg class="bi me-2" width="0" height="50"></svg>
                    <span class="fs-5 fw-semibold text-danger">Admin Page</span>
                </a>
                <ul class="list-unstyled ps-0" >
                    <li class="mb-1" >
                        <button class="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                            제품 관리
                        </button>
                        <div class="collapse" id="home-collapse" >
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li style={sideText}><Link to={'/adpage'} class="link-danger rounded text-white" style={noLine}>제품 목록</Link></li>
                            </ul>
                        </div>
                    </li>


                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            주문 관리
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li style={sideText}><Link to={'/product_list'} class="link-danger rounded text-white" style={noLine}>주문 목록</Link></li>
                            </ul>
                        </div>
                    </li>


                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            회원 관리
                        </button>
                        <div class="collapse" id="orders-collapse" >
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li style={sideText}><a href="#" class="link-danger rounded text-white" style={noLine}>문의사항 목록</a></li>
                                <li style={sideText}><a href="#" class="link-danger rounded text-white" style={noLine}>회원 목록</a></li>
                            </ul>
                        </div>
                    </li>


                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Web 관리
                        </button>
                        <div class="collapse" id="account-collapse" >
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li style={sideText}><a href="#" class="link-danger rounded text-white" style={noLine}>소개</a></li>
                                <li style={sideText}><a href="#" class="link-danger rounded text-white" style={noLine}>플랫폼</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        
    )
}
