import React from 'react'

function Product() {
  return (
    <div class='container'>
      <div id="carouselExampleCaptions" class="carousel slide mx-auto my-4" data-bs-ride="carousel" style={{width: '30rem'}}>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://post-phinf.pstatic.net/MjAyMDA2MDlfMjEw/MDAxNTkxNjk1MTM4OTI4.LvldwiT0_pjrP8xtQeJUifXhtvO4WFXeEz6xwJmz0J8g.k9LyAkihXYNAGlO-LNG2aDh4MHT1uEw7jdZmssrRddsg.JPEG/documentTitle_8515930031591694382355.jpg?type=w1200" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>고양이 페이지</h5>
              <p>이 고양이는 무서워요</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDLjH0FLtXZf1i4I5plM42kGukdcl5DjbHw&usqp=CAU" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg-CUfm5vNLy5nIcDT-jMqqXGuIhJt_OjHg&usqp=CAU" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Product;


