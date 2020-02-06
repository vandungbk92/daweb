import React from 'react';
import './LienHe.scss';
import ve_chung_toi from '../../asset/Image/ve-chung-toi.png';
import lien_he from '../../asset/ImageMobile/lien_he.png';

export default function LienHePage() {
  return <div className="lien-he-page">
    <div className="slide-top">
      <img src={ve_chung_toi} className="img-lh-top img-lh-top-large"/>
      <img src={lien_he} className="img-lh-top img-lh-top-mobile"/>
      <div className="bg-slide"></div>
      <div className="slide-content">
        <div className="lh-slide-title mt-3 mb-4">liên hệ với chúng tôi</div>
        <div className="lh-slide-content">Chúng tôi chấp nhận yêu cầu và tư vấn từ những người đang tìm kiếm nhà thầu cho các dịch vụ quản lý khác nhau, cũng như các câu hỏi yêu cầu phỏng vấn từ những người quan tâm đến công ty chúng tôi.</div>
      </div>
    </div>
    <div className="block-1">
      <div className="clearfix">
        <div className="float-left">
          <input type="text" className="input-row input-bmv px-3" placeholder="Họ tên*"/>
        </div>
        <div className="float-right">
          <input type="text" className="input-row input-bmv px-3 input-row-mobile" placeholder="Email*"/>
        </div>
      </div>
      <div style={{margin: '20px 0 20px 0'}}>
        <input type="text" className=" w-100 input-bmv px-3" placeholder="Điện thoại"/>
      </div>

      <div>
        <textarea className=" w-100 textarea-bmv input-bmv px-3" placeholder="Thông điệp"/>
      </div>
      <div className="text-center" style={{marginTop: '15px'}}>
        <button className="btn-lien-he">Gửi</button>
      </div>
    </div>

  </div>

}
