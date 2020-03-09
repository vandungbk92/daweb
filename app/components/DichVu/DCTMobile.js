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
import cleaner from '../../asset/Icon/dit_con_trung.svg';

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
    <div onClick={onClick} className={className} o
         style={{ display: 'block', width: '25px', height: '25px', top: '75px', cursor: 'pointer' }}>
      <img src={ic_arrow_left} style={{ width: '25px' }}/>
    </div>
  );
}


function DCTMobile() {
  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
  };

  return (
    <div className="ve-sinh-cong-nghiep-mobile">
      <div className="mb-vscn-slide">
        <Slider {...settings}>
          <div className="sl-content-custom">
            <span className="sl-title" onClick={() => handleClick('bao-ve-camera')}>BẢO VỆ, CAMERA AN NINH</span>
          </div>
          <div className="sl-content-custom active">
            <span className="sl-title active">DIỆT CÔNG TRÙNG</span>
          </div>
          <div className="sl-content-custom">
            <span className="sl-title" onClick={() => handleClick('ve-sinh-cong-nghiep')}>VỆ SINH CÔNG NGHIỆP</span>
          </div>
          <div className="sl-content-custom">
            <span className="sl-title" onClick={() => handleClick('quan-ly-van-hanh')}>QUẢN LÝ VẬN HÀNH</span>
          </div>


        </Slider>
      </div>

      <div className="mb-block-1">
        <div className="mb-block-1-title">
          <PrevArrow onClick={() => handleClick('bao-ve-camera')}/>
          <div className="title">DIỆT CÔN TRÙNG</div>
          <NextArrow onClick={() => handleClick('ve-sinh-cong-nghiep')}/>
        </div>
        <div className="mb-block-1-content" style={{width: '382px', margin: 'auto'}}>
          <div className="vscn-detail col-sm-12"><br/>Chuột, gián hay những côn trùng khác thì gây ra những phiền phức về mặt vệ sinh đối với cơ thể con người. Để giảm thiểu và xử lý triệt để vấn đề này thì cần tiến hành các công việc sau:
            <br/>1. Tiền khảo sát (Khảo sát số lượng, tình trạng môi trường sống thực tế của vật gây hại)
            <br/>2. Kế hoạch tiến hành (Lựa chọn phương pháp tiêu diệt, lựa chọn sự phán đoán hiệu quả, đưa ra lịch trình công việc, v,v…)
            <br/>3. Tiến hành công việc
            <br/>4. Tiến hành đánh giá kết quả (kiểm tra tình hình thực tế…) và tiêu diệt, phòng ngừa triệt để.<br/><br/></div>
          <img src={cleaner} className="img-clear" style={{width: '40%'}}/>

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

export default DCTMobile;
