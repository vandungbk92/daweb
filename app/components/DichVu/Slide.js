import React from 'react';
import { useHistory } from "react-router-dom";
import slide_dich_vu from '../../asset/Image/slide-dich-vu.png';

function DichVu() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="slide-dich-vu">
      <img src={slide_dich_vu} style={{position: 'relative'}}/>
      <div className="bg-slide"></div>
      <div className="dich-vu-page container-custom">
        <div className="dv-slide-title my-4">DỊCH VỤ</div>
        <div className="dv-slide-content">Hoạt động kinh doanh của BM-V bao gồm nhiều lĩnh vực khác nhau và rất đa dạng. Được cấu thành từ nhiều lĩnh vực có liên quan, ảnh
          hưởng đến nhau. Nhân viên của chúng tôi luôn cố gắng tăng cường giao tiếp với nhau, tạo một luồng công việc trôi chảy. <br />
          Ngoài ra, với mục tiêu trở thành chuyên gia trong các lĩnh vực của mình, chúng tôi tích cực nỗ lực để đạt được bằng cấp mà trong đó phát
          huy năng lực, cá tính của mỗi người và để nâng cao kỹ thuật, kỹ năng.</div>
      </div>
    </div>
  );
}

export default DichVu;
