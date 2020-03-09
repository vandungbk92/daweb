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
import cleaner from '../../asset/Icon/vacuum-cleaner-vscn.svg';

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


function VeSinhCongNghiepMobile() {
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
            <span className="sl-title active">VỆ SINH CÔNG NGHIỆP</span>
          </div>
          <div className="sl-content-custom">
            <span className="sl-title" onClick={() => handleClick('/quan-ly-van-hanh')}>QUẢN LÝ VẬN HÀNH</span>
          </div>

          <div className="sl-content-custom">
            <span className="sl-title" onClick={() => handleClick('/bao-ve-camera')}>BẢO VỆ, CAMERA AN NINH</span>
          </div>
          <div className="sl-content-custom">
            <span className="sl-title"  onClick={() => handleClick('/diet-con-trung')}>DIỆT CÔNG TRÙNG</span>
          </div>
        </Slider>
      </div>

      <div className="mb-block-1">
        <div className="mb-block-1-title">
          <PrevArrow  onClick={() => handleClick('diet-con-trung')}/>
          <div className="title">Vệ sinh công nghiệp</div>
          <NextArrow  onClick={() => handleClick('/quan-ly-van-hanh')}/>
        </div>
        <div className="mb-block-1-content">
          <div className="vscn-detail col-sm-12"><br/>Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong
            tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ <br/>
            Chúng tôi cũng thực hiện tất cả các công việc như phủ sáp sàn nhà làm bằng vật liệu dẻo (tấm dán, miếng
            dán), vệ sinh thảm, lau chùi thiết bị vệ sinh, vệ sinh trần, tường nhà, vệ sinh bồn rửa mặt, vệ sinh quạt
            thông gió, vệ sinh màng lọc điều hòa, vệ sinh máy hút mùi. Chúng tôi luôn theo đuổi sự nhất quán giữa sạch
            sẽ và hài hòa, nỗ lực với một thái độ khắt khe.
            <br/>Về phần công việc bên ngoài các tòa nhà thì để duy trì lâu nhất có thể trạng thái khi vừa mới hoàn
            thành xong thì có các công việc như vệ sinh chỗ để xe, vệ sinh ray cửa kính, vệ sinh kính, rửa tường, v.v…
            <br/>Chúng tôi đề xuất nên tiến hành vệ sinh định kỳ.<br/><br/></div>
          <img src={cleaner} className="img-clear"/>

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

export default VeSinhCongNghiepMobile;
