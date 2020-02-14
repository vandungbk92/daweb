import React from 'react';
import { useHistory } from "react-router-dom";
import vscn_1 from '../../asset/Image/vscn-1.png';
import vscn_11 from '../../asset/Image/vscn_11.png';
import vscn_2 from '../../asset/Image/vscn-2.png';
import vscn_3 from '../../asset/Image/vscn-3.png';
import vscn_4 from '../../asset/Image/vscn-4.png';
import vscn_5 from '../../asset/Image/vscn-5.png';
import vscn_6 from '../../asset/Image/vscn-6.png';
import vscn_7 from '../../asset/Image/vscn-7.png';
import vscn_8 from '../../asset/Image/vscn-8.png';

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
          <img src={vscn_11} className="w-100"/>
        </div>

      </div>

      <div className="clearfix">
        <div className="float-left" style={{width: '48%'}}>
          <img src={vscn_2} className="w-100 my-1"/>
          <img src={vscn_3} className="w-100 my-1"/>
          <img src={vscn_4} className="w-100 my-1"/>
          <img src={vscn_5} className="w-100 my-1"/>
        </div>
        <div className="float-right" style={{width: '51.55%'}}>
          <img src={vscn_6} className="w-100 my-1"/>
          <img src={vscn_7} className="w-100 my-1"/>
          <img src={vscn_8} className="w-100 my-1"/>
        </div>
      </div>
    </div>
  );
}

export default BaoVeCamera;
