import React from 'react';
import { useHistory } from "react-router-dom";
import leo_treo from '../../asset/Image/leo-treo.png';
import cleaner from '../../asset/Icon/vacuum-cleaner.svg';
import Group_119 from '../../asset/Icon/Group_119.svg';
import Group86 from '../../asset/Icon/Group_111.svg';
import camera_an_ninh from '../../asset/Image/camera-an-ninh.png';
import vacuum_cleaner from '../../asset/Image/vacuum-cleaner.svg';
import quan_ly_van_hanh from '../../asset/Icon/quan_ly_van_hanh.svg';
import dit_con_trung from '../../asset/Icon/dit_con_trung.svg';
import dit_con_trung_1 from '../../asset/Icon/dit_con_trung_1.svg';

import GROUP_85 from '../../asset/Image/Group85.svg';
import van_hanh from '../../asset/Image/quan-ly-van-hanh.png';
import dit_con_trung_png from '../../asset/Image/dit-con-trung.png';
import icon_arrow_right from '../../asset/Image/icon_arrow_right.jpg';

// import slide_dich_vu from '../../asset/Image/slide-dich-vu.png';
import slide_dich_vu from '../../asset/ImageMobile/slide_dich_vu.png';
import dv_1 from '../../asset/ImageMobile/dv_1.png';
import dv_2 from '../../asset/ImageMobile/dv_2.png';
import dv_3 from '../../asset/ImageMobile/dv_3.png';
import dv_4 from '../../asset/ImageMobile/dv_4.png';


function NoiDungMobile() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="dich-vu-chi-tiet-mobile">
      <div className="block-1">
        <img src={slide_dich_vu} className="img-top"/>
        <div className="bg-slide"></div>
        <div className="dv-slide">
          <div className="dv-slide-title my-4">DỊCH VỤ</div>
          <div className="dv-slide-content">Hoạt động kinh doanh của BM-V bao gồm nhiều lĩnh vực khác nhau và rất đa dạng. Được cấu thành từ nhiều lĩnh vực có liên quan, ảnh
            hưởng đến nhau. Nhân viên của chúng tôi luôn cố gắng tăng cường giao tiếp với nhau, tạo một luồng công việc trôi chảy. <br />
            Ngoài ra, với mục tiêu trở thành chuyên gia trong các lĩnh vực của mình, chúng tôi tích cực nỗ lực để đạt được bằng cấp mà trong đó phát
            huy năng lực, cá tính của mỗi người và để nâng cao kỹ thuật, kỹ năng.</div>
        </div>
      </div>
      <div className="block-2">
        <img src={dv_1} className="img-1"/>
        <div className="dv-title">Vệ sinh công nghiệp</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ.</div>
        <div className="dv-readmore">TÌM HIỂU THÊM</div>
      </div>

      <div className="block-2">
        <img src={dv_2} className="img-1"/>
        <div className="dv-title">Quản lý vận hành</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Chúng tôi luôn nỗ lực phát huy công năng tối đa thông qua việc quản lý vận hành chính xác, ổn định các thiết bị phòng cháy, chữa cháy, thiết bị điều hòa.</div>
        <div className="dv-readmore">TÌM HIỂU THÊM</div>
      </div>


      <div className="block-2">
        <img src={dv_3} className="img-1"/>
        <div className="dv-title dv-title-3">Bảo vệ, camera an ninh</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.</div>
        <div className="dv-readmore">TÌM HIỂU THÊM</div>
      </div>

      <div className="block-2">
        <img src={dv_4} className="img-1"/>
        <div className="dv-title dv-title-4">Diệt côn trùng</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Kiểm soát phòng ngừa côn trùng là một thành phần thiết yếu của quá trình đang bảo trì tài sản, và một điều không may là thường xuyên bị bỏ qua.</div>
        <div className="dv-readmore">TÌM HIỂU THÊM</div>
      </div>

    </div>



  );
}

export default NoiDungMobile;
