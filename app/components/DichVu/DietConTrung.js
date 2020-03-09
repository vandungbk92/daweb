import React from 'react';
import { useHistory } from "react-router-dom";
import vscn_11 from '../../asset/Image/vscn_11.png';
import vscn_2 from '../../asset/Image/vscn-2.png';
import vscn_3 from '../../asset/Image/vscn-3.png';
import vscn_4 from '../../asset/Image/vscn-4.png';
import vscn_5 from '../../asset/Image/vscn-5.png';
import vscn_6 from '../../asset/Image/vscn-6.png';
import vscn_7 from '../../asset/Image/vscn-7.png';
import vscn_8 from '../../asset/Image/vscn-8.png';

import dit_con_trung from '../../asset/Icon/dit_con_trung.svg';

function VeSinhCongNghiep() {

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
            <div>DIỆT CÔN TRÙNG</div>
          </div>
          <div className="vscn-detail col-sm-12 mt-2">
            Chuột, gián hay những côn trùng khác thì gây ra những phiền phức về mặt vệ sinh đối với cơ thể con người. Để
            giảm thiểu và xử lý triệt để vấn đề này thì cần tiến hành các công việc sau:
            <br/>1. Tiền khảo sát (Khảo sát số lượng, tình trạng môi trường sống thực tế của vật gây hại.
            <br/>2. Kế hoạch tiến hành (Lựa chọn phương pháp tiêu diệt, lựa chọn sự phán đoán hiệu quả, đưa ra lịch
            trình công việc, v,v…).
            <br/>3. Tiến hành công việc.
            <br/>4. Tiến hành đánh giá kết quả (kiểm tra tình hình thực tế…) và tiêu diệt, phòng ngừa triệt để.
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

export default VeSinhCongNghiep;
