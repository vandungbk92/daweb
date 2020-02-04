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

import cleaner from '../../asset/Icon/vacuum-cleaner-vscn.svg';

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
            <div>Vệ sinh công nghiệp</div>
          </div>
          <div className="vscn-detail col-sm-12">Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ <br />
            Chúng tôi cũng thực hiện tất cả các công việc như phủ sáp sàn nhà làm bằng vật liệu dẻo (tấm dán, miếng dán), vệ sinh thảm, lau chùi thiết bị vệ sinh, vệ sinh trần, tường nhà, vệ sinh bồn rửa mặt, vệ sinh quạt thông gió, vệ sinh màng lọc điều hòa, vệ sinh máy hút mùi. Chúng tôi luôn theo đuổi sự nhất quán giữa sạch sẽ và hài hòa, nỗ lực với một thái độ khắt khe.
            <br />Về phần công việc bên ngoài các tòa nhà thì để duy trì lâu nhất có thể trạng thái khi vừa mới hoàn thành xong thì có các công việc như vệ sinh chỗ để xe, vệ sinh ray cửa kính, vệ sinh kính, rửa tường, v.v…
            <br />Chúng tôi đề xuất nên tiến hành vệ sinh định kỳ.</div>
          <img src={cleaner} className="img-clear"/>
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
