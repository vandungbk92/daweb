import React from 'react';
import { useHistory } from "react-router-dom";
import anh_1 from '../../asset/dichvu/camera/anh_1.jpg'
import anh_2 from '../../asset/dichvu/camera/anh_2.jpg'
import anh_3 from '../../asset/dichvu/camera/anh_3.jpg'
import anh_4 from '../../asset/dichvu/camera/anh_4.jpg'
import anh_5 from '../../asset/dichvu/camera/anh_5.jpg'
import anh_6 from '../../asset/dichvu/camera/anh_6.jpg'
import anh_7 from '../../asset/dichvu/camera/anh_7.jpg'
import anh_8 from '../../asset/dichvu/camera/anh_8.jpg'

import dit_con_trung from '../../asset/Icon/Group_119.svg';

function BaoVeCamera() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="row vscn-chi-tiet">
      <div className="clearfix w-100" style={{display: 'table'}}>
        <div className="vscn-content">

          <div className="vscn-title col-sm-12">
            <div className="vscn-title-left"></div>
            <div>BẢO VÊ, CAMERA</div>
          </div>
          <div className="vscn-detail col-sm-12 mt-2">
            Cùng với quản lý tòa nhà thì việc bảo vệ tài sản bên trong tòa nhà, phòng ngừa trộm cắp, tai nạn, v,v… Xem những việc này là sứ mệnh của mình, chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.
          </div>
          <img src={dit_con_trung} className="img-clear"/>
        </div>

        <div className="vscn-11"  style={{display: 'table-cell'}}>
          <img src={anh_1} className="w-100"/>
        </div>

      </div>

      <div className="clearfix">
        <div className="float-left" style={{width: '48%'}}>
          <img src={anh_2} className="w-100 my-1"/>
          <img src={anh_3} className="w-100 my-1"/>
          <img src={anh_4} className="w-100 my-1"/>
          <img src={anh_5} className="w-100 my-1"/>
        </div>
        <div className="float-right" style={{width: '51.55%'}}>
          <img src={anh_6} className="w-100 my-1"/>
          <img src={anh_7} className="w-100 my-1"/>
          <img src={anh_8} className="w-100 my-1"/>
        </div>
      </div>
    </div>
  );
}

export default BaoVeCamera;
