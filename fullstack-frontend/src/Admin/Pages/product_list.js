import React from 'react'
import AdminSidebar from './AdminSidebar'


export default function Admin_product_list() {
    return (

            <table class="table my-5">
                <thead>
                    <tr>
                        <th scope="col">제품번호</th>
                        <th scope="col">이미지</th>
                        <th scope="col">제품이름</th>
                        <th scope="col">제품가격</th>
                        <th scope="col">남은수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>img</td>
                        <td>탕탕이</td>
                        <td>23,000원</td>
                        <td>977개</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>img</td>
                        <td>탕탕이</td>
                        <td>23,000원</td>
                        <td>977개</td>
                    </tr>
                </tbody>
            </table>
   
    )
}
