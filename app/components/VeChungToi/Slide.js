import React from 'react';
import { useHistory } from "react-router-dom";
import ve_chung_toi from '../../asset/Image/ve-chung-toi.png';

function Header() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="slide-top">
      <img src={ve_chung_toi} style={{position: 'relative'}}/>
      <div className="bg-slide"></div>
      <div className="slide-content">
        <div >
          <span className="slogan">SLOGAN</span>
        </div>
        <div className="dv-slide-title mt-3 mb-4">CÔNG NGHỆ NHẬT BẢN <br/> CHO MỘT MÔI TRƯỜNG HOÀN HẢO</div>
        <div className="dv-slide-content">Tòa nhà và các công trình xây dựng đang
          đa dạng hóa cùng với nhu cầu của xã hội, đang có nhiều sự thay đổi <br /> như cao cấp hơn,
          kín hơn và thông minh hơn. Công việc bảo dưỡng tòa nhà là công việc đối ứng với những sự <br/> thay đổi như vậy,
          bảo vệ những tài sản quan trọng của chủ nhân,
          tạo một môi trường thoải mái cho những <br /> người sử dụng tòa nhà hay công trình đó.</div>
      </div>
    </div>
  );
}

export default Header;
