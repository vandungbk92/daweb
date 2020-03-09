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
import van_hanh from '../../asset/Image/dich_vu_33.jpg';
import dit_con_trung_png from '../../asset/Image/dich_vu_44.jpg';
import icon_arrow_right from '../../asset/Image/icon_arrow_right.jpg';
import dich_vu_upt from '../../asset/quanly/dich_vu_upt.png';


function NoiDung() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="dich-vu-chi-tiet bg-white">
      <div className="dich-vu-block block-1 clearfix">
        <img src={leo_treo} className="img-leo-treo"/>
        <div className="hinh-vuong"></div>

        <img src={cleaner} className="img-opacity-clear"/>
        <div className="title-1">Vệ sinh công nghiệp</div>
        <img src={vacuum_cleaner} className="img-opacity-clear-1"/>
        <div className="title-2">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ.</div>
        <div className="title-3" onClick={() => handleClick('/ve-sinh-cong-nghiep')}>Tìm hiểu thêm <img src={icon_arrow_right}/></div>
      </div>

      <div className="dich-vu-block block-2 clearfix">
        <img src={quan_ly_van_hanh} className="img-van-hanh"/>

        <img src={GROUP_85} className="img-opacity-clear-1"/>

        <div className="title-1">Quản lý vận hành</div>
        <div className="title-2">Chúng tôi luôn nỗ lực phát huy công năng tối đa thông qua việc quản lý vận hành chính xác, ổn định các thiết bị phòng cháy, chữa cháy, thiết bị điều hòa.</div>
        <div className="title-3"  onClick={() => handleClick('/quan-ly-van-hanh')}>Tìm hiểu thêm <img src={icon_arrow_right}/></div>

        <img src={van_hanh} className="img-quan-ly"/>
        <div className="hinh-vuong"></div>

      </div>

      <div className="dich-vu-block block-1 clearfix">
        <img src={camera_an_ninh} className="img-leo-treo"/>
        <div className="hinh-vuong"></div>

        <img src={Group_119} className="img-opacity-clear img-bao-ve-1"/>
        <div className="title-1">Bảo vệ, camera an ninh</div>
        <img src={Group86} className="img-opacity-clear-1 img-bao-ve"/>
        <div className="title-2 bao-ve-title-2">Chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.</div>
        <div className="title-3 bao-ve-title-3"  onClick={() => handleClick('/bao-ve-camera')}>Tìm hiểu thêm <img src={icon_arrow_right}/></div>
      </div>

      <div className="dich-vu-block block-2 clearfix">
        <img src={dit_con_trung} className="img-van-hanh diet-con-trung"/>
        <img src={dit_con_trung_1} className="img-opacity-clear-1 diet-con-trung-1"/>
        <div className="title-1 dct-title-1">DIỆT CÔN TRÙNG</div>
        <div className="title-2 dct-title-2">Kiểm soát phòng ngừa côn trùng là một thành phần thiết yếu của quá trình đang bảo trì tài sản, và một đều không may là thường xuyên bị bỏ qua.</div>
        <div className="title-3 dvc-title-3"  onClick={() => handleClick('/diet-con-trung')}>Tìm hiểu thêm <img src={icon_arrow_right}/></div>
        <img src={dit_con_trung_png} className="img-quan-ly img-diet-con-trung"/>
        <div className="hinh-vuong dvc-hinh-vuong"></div>
      </div>

      <div className="">

        <div className="tieu-chi-dich-vu">TIÊU CHÍ DỊCH VỤ</div>
        <div className="text-center">
          <img src={dich_vu_upt} alt="tieu-chi-dich-vu" className="img-tieu-chi-dich-vu"/>
        </div>
      </div>
    </div>
  );
}

export default NoiDung;
