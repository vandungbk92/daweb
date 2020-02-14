import React from 'react';
import { useHistory } from 'react-router-dom';

import slide_dich_vu from '../../asset/ImageMobile/slide_dich_vu.png';
import dv_1 from '../../asset/ImageMobile/dv_1.png';
import dv_2 from '../../asset/ImageMobile/dv_2.png';
import dv_3 from '../../asset/ImageMobile/dv_3.png';
import dv_4 from '../../asset/ImageMobile/dv_4.png';
import ic_arrow_back from '../../asset/Icon/ic_arrow_back_24px.svg';


function NoiDungMobile() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }



  return (
    <div className="dich-vu-chi-tiet-mobile">
      <div className="block-1">
        <img src={slide_dich_vu} className="img-top"/>
        <div className="bg-slide"/>
        <div className="dv-slide">
          <div className="dv-slide-title my-4">DỊCH VỤ</div>
          <div className="dv-slide-content">Hoạt động kinh doanh của BM-V bao gồm nhiều lĩnh vực khác nhau và rất đa
            dạng. Được cấu thành từ nhiều lĩnh vực có liên quan, ảnh
            hưởng đến nhau. Nhân viên của chúng tôi luôn cố gắng tăng cường giao tiếp với nhau, tạo một luồng công việc
            trôi chảy. <br/>
            Ngoài ra, với mục tiêu trở thành chuyên gia trong các lĩnh vực của mình, chúng tôi tích cực nỗ lực để đạt
            được bằng cấp mà trong đó phát
            huy năng lực, cá tính của mỗi người và để nâng cao kỹ thuật, kỹ năng.
          </div>
        </div>
      </div>
      <div className="block-2" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>
        <img src={dv_1} className="img-1"/>
        <div className="dv-title">Vệ sinh công nghiệp</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công
          việc tiến hành hàng ngày và có công việc tiến hành định kỳ.
        </div>
        <div className="dv-readmore" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>TÌM HIỂU THÊM <img src={ic_arrow_back}/></div>
      </div>

      <div className="block-2" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>
        <img src={dv_2} className="img-1"/>
        <div className="dv-title">Quản lý vận hành</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Chúng tôi luôn nỗ lực phát huy công năng tối đa thông qua việc quản lý vận hành
          chính xác, ổn định các thiết bị phòng cháy, chữa cháy, thiết bị điều hòa.
        </div>
        <div className="dv-readmore" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>TÌM HIỂU THÊM <img src={ic_arrow_back}/></div>
      </div>


      <div className="block-2" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>
        <img src={dv_3} className="img-1"/>
        <div className="dv-title dv-title-3">Bảo vệ, camera an ninh</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám
          sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.
        </div>
        <div className="dv-readmore" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>TÌM HIỂU THÊM <img src={ic_arrow_back}/></div>
      </div>

      <div className="block-2" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>
        <img src={dv_4} className="img-1"/>
        <div className="dv-title dv-title-4">Diệt côn trùng</div>
      </div>

      <div className="block-3 mt-2 mb-4">
        <div className="dv-content">Kiểm soát phòng ngừa côn trùng là một thành phần thiết yếu của quá trình đang bảo
          trì tài sản, và một điều không may là thường xuyên bị bỏ qua.
        </div>
        <div className="dv-readmore" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>TÌM HIỂU THÊM <img src={ic_arrow_back}/></div>
      </div>

    </div>


  );
}

export default NoiDungMobile;
