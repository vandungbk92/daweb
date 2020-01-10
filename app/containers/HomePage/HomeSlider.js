import React from 'react';
import Slider from "react-slick";

import  slide_1 from '../../asset/Image/slide_1.jpg';
import  slide_11 from '../../asset/Image/slide_11.jpg';
import  slide_2 from '../../asset/Image/slide_2.jpg';
import  slide_22 from '../../asset/Image/slide_22.jpg';
import  slide_3 from '../../asset/Image/slide_3.jpg';
import  slide_33 from '../../asset/Image/slide_33.jpg';
import  slide_4 from '../../asset/Image/slide_4.jpg';
import  slide_44 from '../../asset/Image/slide_44.jpg';
import  Logo_white from '../../asset/Icon/Logo_white.svg';
import ic_arrow_right from '../../asset/Icon/Group_40.svg';
import ic_arrow_left from '../../asset/Icon/Group_42.svg';

const customPaging = [slide_1, slide_2, slide_3, slide_4]

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", width: '50px', height: '50px' }}
      onClick={onClick}
    >
      <img src={ic_arrow_right}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", width: '50px', height: '50px' }}
      onClick={onClick}
    >
      <img src={ic_arrow_left}/>
    </div>
  );
}

export function HomeSlider() {

  const settings = {
    customPaging: function(i) {
      let txt  = ''
      if(i === 0) txt = 'DIỆT CÔN TRÙNG'
      else if(i === 1) txt = 'BẢO VỆ, CAMERA'
      else if(i === 2) txt = 'VỆ SINH'
      else if(i === 3) txt = 'QUẢN LÝ VẬN HÀNH'
      return (
        <a style={{position: 'relative'}}>
          <img src={customPaging[i]} style={{width: '370px'}}/>
          <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
            <span className="tl-slick-custom-label">{txt}</span>
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
    /*autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true*/
  };


  return (
    <div style={{width: '100%', marginBottom: '300px', position: 'relative'}}>
      <Slider {...settings}>
        <div>
          <img src={slide_11} />
        </div>
        <div>
          <img src={slide_22} />
        </div>
        <div>
          <img src={slide_33} />
        </div>
        <div>
          <img src={slide_44} />
        </div>
      </Slider>

      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 9999999999999}}>
        <div
          style={{
            width: '1570px',
            marginLeft: '175px',
            height: '126px',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, .2)',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <img src={Logo_white} alt="ic_mail" />
          </div>
          <div style={{display: 'flex', height: '100%', alignItems: 'center'}}>
            <div className="menu-active menu-header"><span className="menu-text">Trang chủ</span></div>
            <div className="menu-header"><span className="menu-text">Dịch vụ</span></div>
            <div className="menu-header"><span className="menu-text">Về chúng tôi</span></div>
            <div className="menu-header"><span className="menu-text">Tin tức</span></div>
            <div className="menu-header"><span className="menu-text">Thư viện ảnh</span></div>
            <div className="menu-header menu-header-last"><span className="menu-text">Liên hệ</span></div>
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', top: 0, bottom: 0, width: '100%',
        display: 'flex',  flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div className="sl-content-header">VỆ SINH TÒA NHÀ</div>
        <div className="sl-content-content">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc</div>
        <div className="sl-content-content">tiến hành hàng ngày và có công việc tiến hành định kỳ.</div>
        <div className="sl-content-btn">
          Xem thêm
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
