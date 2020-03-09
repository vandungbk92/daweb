import React from 'react';
import { useHistory } from 'react-router-dom';
import vscn_1 from '../../asset/ImageMobile/tva_9.png';
import vscn_2 from '../../asset/ImageMobile/tva_2.png';
import vscn_3 from '../../asset/ImageMobile/vscn_3.png';
import vscn_4 from '../../asset/ImageMobile/dich-vu-ve-sinh-cong-nghiep.png';
import vscn_5 from '../../asset/ImageMobile/vscn_5.png';

import vscn_6 from '../../asset/ImageMobile/vscn_6.png';
import vscn_7 from '../../asset/ImageMobile/tt_2.png';
import vscn_8 from '../../asset/ImageMobile/tva_slide.png';
import Slider from 'react-slick';
import ic_arrow_right from '../../asset/Icon/Group_40.svg';
import ic_arrow_left from '../../asset/Icon/Group_42.svg';
import cleaner from '../../asset/Icon/quan_ly_van_hanh.svg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={className}
         style={{ display: 'block', width: '25px', height: '25px', top: '75px', cursor: 'pointer' }}>
      <img src={ic_arrow_right} style={{ width: '25px' }}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={className}
         style={{ display: 'block', width: '25px', height: '25px', top: '75px', cursor: 'pointer' }}>
      <img src={ic_arrow_left} style={{ width: '25px' }}/>
    </div>
  );
}


function QLVHMobile() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
  };

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="ve-sinh-cong-nghiep-mobile">
      <div className="mb-vscn-slide">
        <Slider {...settings}>
          <div className="sl-content-custom">
            <span className="sl-title"  onClick={() => handleClick('ve-sinh-cong-nghiep')}>VỆ SINH CÔNG NGHIỆP</span>
          </div>
          <div className="sl-content-custom">
            <span className="sl-title active" >QUẢN LÝ VẬN HÀNH</span>
          </div>

          <div className="sl-content-custom">
            <span className="sl-title"  onClick={() => handleClick('bao-ve-camera')}>BẢO VỆ, CAMERA AN NINH</span>
          </div>
          <div className="sl-content-custom">
            <span className="sl-title" onClick={() => handleClick('/diet-con-trung')}>DIỆT CÔNG TRÙNG</span>
          </div>
        </Slider>
      </div>

      <div className="mb-block-1">
        <div className="mb-block-1-title">
          <PrevArrow onClick={() => handleClick('ve-sinh-cong-nghiep')}/>
          <div className="title">QUẢN LÝ VẬN HÀNH</div>
          <NextArrow onClick={() => handleClick('bao-ve-camera')}/>
        </div>
        <div className="mb-block-1-content" style={{width: '382px', margin: 'auto'}}>
          <div className="vscn-detail col-sm-12"><br/>Chúng tôi đã có kinh nghiệm nhiều năm trong việc quản lý chung cư. Từ việc vệ sinh, quản lý, kiểm tra cơ sở thiết bị vật chất, thu phí điện nước, phí quản lý hàng tháng và các khoản thu khác, cho đến việc kế toán, quản lý kinh doanh của hiệp hội quản lý chung cư doanh, chúng tôi nỗ lực để tăng sự thoải mái và thuận tiện cho cư dân.<br/><br/></div>
          <img src={cleaner} className="img-clear" style={{width: '50%'}}/>

        </div>
      </div>

      <div className="mb-block-2 mt-2">
        <div className="mb-bl-2-img mb-2">
          <img src={vscn_1} className='img-content mr-2'/>
          <img src={vscn_2} className='img-content'/>
        </div>

        <div className="mb-bl-2-img mb-2">
          <img src={vscn_3} className='img-content mr-2'/>
          <img src={vscn_4} className='img-content'/>
        </div>

        <div className="mb-bl-2-img mb-2">
          <img src={vscn_5} className='img-content mr-2'/>
          <img src={vscn_6} className='img-content'/>
        </div>

        <div className="mb-bl-2-img mb-2">
          <img src={vscn_7} className='img-content mr-2'/>
          <img src={vscn_8} className='img-content'/>
        </div>

      </div>

    </div>
  );
}

export default QLVHMobile;
