import React from 'react';
import Slider from 'react-slick';
import { useHistory } from "react-router-dom";
import slide_1 from '../../asset/Image/slide_1.jpg';
import slide_11 from '../../asset/Image/slide_11.jpg';
import slide_2 from '../../asset/Image/slide_2.jpg';
import slide_22 from '../../asset/Image/slide_22.jpg';
import slide_3 from '../../asset/Image/slide_3.jpg';
import slide_33 from '../../asset/Image/slide_33.jpg';
import slide_4 from '../../asset/Image/slide_4.jpg';
import slide_44 from '../../asset/Image/slide_44.jpg';
import ic_arrow_right from '../../asset/Icon/Group_40.svg';
import ic_arrow_left from '../../asset/Icon/Group_42.svg';
import dit_con_trung_1 from '../../asset/Icon/dit_con_trung_1.svg';
import ve_sinh from '../../asset/Image/vacuum-cleaner.svg';
import camera_an_ninh from '../../asset/Icon/Group_111.svg';
import quan_ly from '../../asset/Image/Group85.svg';

const customPaging = [quan_ly, ve_sinh, camera_an_ninh, dit_con_trung_1];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: 'block', width: '50px', height: '50px' }}
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
      style={{ display: 'block', width: '50px', height: '50px' }}
      onClick={onClick}
    >
      <img src={ic_arrow_left}/>
    </div>
  );
}

export function HomeSlider() {

  const settings = {
    customPaging: function(i) {
      let txt = '';
      if (i === 0) txt = 'QUẢN LÝ VẬN HÀNH';
      else if (i === 1) txt = 'VỆ SINH';
      else if (i === 2) txt = 'BẢO VỆ, CAMERA';
      else if (i === 3) txt = 'DIỆT CÔN TRÙNG';
      return (
        <a style={{ position: 'relative' }}>

          <div className="ic-home-slider">
            <img src={customPaging[i]} />
          </div>
          <div>
            <span className="tl-slick-custom-label">{txt}</span>
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="home-slider">
      <Slider {...settings} className="slider-custom">
        <div>
          <div className="position-relative">
            <img src={slide_44}/>
            <div className="homepage-bg-slide"></div>
            <div className="position-absolute d-flex align-items-center justify-content-center text-white content-center">
              <div className="sl-content">
                <div className="sl-content-header">QUẢN LÝ VẬN HÀNH</div>
                <div className="sl-content-content">
                  Chúng tôi luôn nỗ lực phát huy công năng tối đa thông qua việc quản lý vận hành chính xác, ổn định các thiết bị phòng cháy, chữa cháy,
                </div>
                <div className="sl-content-content">thiết bị điều hòa, qua đó đảm bảo một môi trường ngày càng tốt hơn cho cư dân và những người sử dụng tòa nhà.</div>
                <div className="sl-content-btn" onClick={() => handleClick('/quan-ly-van-hanh')}>
                  Xem thêm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="position-relative">
            <img src={slide_33}/>
            <div className="homepage-bg-slide"></div>
            <div className="position-absolute d-flex align-items-center justify-content-center text-white content-center">
              <div className="sl-content">
                <div className="sl-content-header">VỆ SINH TÒA NHÀ</div>
                <div className="sl-content-content">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc
                </div>
                <div className="sl-content-content">tiến hành hàng ngày và có công việc tiến hành định kỳ.</div>
                <div className="sl-content-btn" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>
                  Xem thêm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div  className="position-relative">
            <img src={slide_22}/>
            <div className="homepage-bg-slide"></div>
            <div className="position-absolute d-flex align-items-center justify-content-center text-white content-center">
              <div className="sl-content">
                <div className="sl-content-header">BẢO VỆ, CAMERA AN NINH</div>
                <div className="sl-content-content">Chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám
                </div>
                <div className="sl-content-content">sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.</div>
                <div className="sl-content-btn" onClick={() => handleClick('/bao-ve-camera')}>
                  Xem thêm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="position-relative">
            <img src={slide_11} className="position-relative"/>
            <div className="homepage-bg-slide"></div>
            <div className="position-absolute d-flex align-items-center justify-content-center text-white content-center">
              <div className="sl-content">
                <div className="sl-content-header">DIỆT CÔN TRÙNG</div>
                <div className="sl-content-content">
                  Chúng tôi cung cấp các biện pháp phòng ngừa và loại bỏ côn trùng cùng với tất cả</div>
                <div className="sl-content-content">các loại thuốc diệt côn trùng đến.</div>
                <div className="sl-content-btn" onClick={() => handleClick('/diet-con-trung')}>
                  Xem thêm
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/*<div className="homepage-bg-slide"></div>*/}
      {/*<div className="sl-content">
        <div className="sl-content-header">VỆ SINH TÒA NHÀ 1</div>
        <div className="sl-content-content">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc
        </div>
        <div className="sl-content-content">tiến hành hàng ngày và có công việc tiến hành định kỳ.</div>
        <div className="sl-content-btn" onClick={() => handleClick('ve-sinh-cong-nghiep')}>
          Xem thêm
        </div>
      </div>*/}

    </div>
  );
}

export default HomeSlider;
