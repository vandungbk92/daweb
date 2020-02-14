import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import GROUP_84 from '../../asset/Image/Group84.svg';
import GROUP_85 from '../../asset/Image/Group85.svg';
import GROUP_86 from '../../asset/Image/Group86.svg';
import home_page_1 from '../../asset/ImageMobile/home_page_1.jpg';
import VACUUM_CLEANER from '../../asset/Image/vacuum-cleaner.svg';

export function HomeMobile() {
  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }
  return (
    <div className='homepage-mobile'>
      <div className="mb-block-1-content">
        <br/>
        <div className="mb-1">
          <span className="title-jp">快適な</span>
        </div>
        <div className="">
          <span className="title-jp">境を提供する</span>
        </div>
        <div className="title">
          CÔNG NGHỆ NHẬT BẢN CHO MỘT MÔI TRƯỜNG HOÀN HẢO
        </div>
        <div className="content">
          Tiền thân là công ty cổ phần dịch vụ Maxxclean Việt Nam thành lập năm 2013 và đã có những thành tựu nhất định trong lĩnh vực. Vào năm 2019 sau khi thỏa thuận thống nhất giữa 2 bên thì công ty Birumen Kagoshima đã đầu tư và mua lại 70% cổ phần với mục đích bằng kinh nghiệm năng lực và tư duy của người Nhật sẽ sớm thúc đẩy sự phát triển của công ty trong lĩnh vực. ( Cuối năm 2019 công ty chính thức đổi tên thành Công ty cổ phần quản lý tòa nhà Việt Nam)
        </div>
        <div className="py-3">
          <span className="btn-read-more-home" onClick={() => handleClick('ve-chung-toi')}>XEM THÊM</span>
        </div>
        {/*<div className="vscn-detail col-sm-12"><br/>Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ <br />
          Chúng tôi cũng thực hiện tất cả các công việc như phủ sáp sàn nhà làm bằng vật liệu dẻo (tấm dán, miếng dán), vệ sinh thảm, lau chùi thiết bị vệ sinh, vệ sinh trần, tường nhà, vệ sinh bồn rửa mặt, vệ sinh quạt thông gió, vệ sinh màng lọc điều hòa, vệ sinh máy hút mùi. Chúng tôi luôn theo đuổi sự nhất quán giữa sạch sẽ và hài hòa, nỗ lực với một thái độ khắt khe.
          <br />Về phần công việc bên ngoài các tòa nhà thì để duy trì lâu nhất có thể trạng thái khi vừa mới hoàn thành xong thì có các công việc như vệ sinh chỗ để xe, vệ sinh ray cửa kính, vệ sinh kính, rửa tường, v.v…
          <br />Chúng tôi đề xuất nên tiến hành vệ sinh định kỳ.<br/><br/></div>*/}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <img src={home_page_1} className="img-clear"/>
          {/*<div>
            <div></div>
            <div></div>

          </div>*/}


      </div>

      <div className="mb-block-2">
        <div className="div-header-title">
          <span className="header-title">DỊCH VỤ CỦA CHÚNG TÔI</span>
        </div>
        <div className="clearfix div-content">
          <div className="float-left w-49 div-content-left">
            <img src={VACUUM_CLEANER}/>
            <div className="title my-3">Vệ sinh công nghiệp</div>
            <div className="content">
              Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ.
            </div>
          </div>
          <div className="float-right w-48 div-content-right">
            <img src={GROUP_85}/>
            <div className="title my-3">Quản lý vận hành</div>
            <div className="content">
              Chúng tôi luôn nỗ lực phát huy công năng tối đa thông qua việc quản lý vận hành chính xác, ổn định các thiết bị phòng cháy, chữa cháy, thiết bị điều hòa.
            </div>
          </div>
        </div>

        <div className="clearfix div-content mt-1">
          <div className="float-left w-49 div-content-left">
            <img src={GROUP_86}/>
            <div className="title my-3">Bảo vệ, camera an ninh</div>
            <div className="content">
              Chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.
            </div>
          </div>
          <div className="float-right w-48 div-content-right">
            <img src={GROUP_84}/>
            <div className="title my-3">Diệt côn trùng</div>
            <div className="content">
              Kiểm soát phòng ngừa côn trùng là một thành phần thiết yếu của quá trình đang bảo trì tài sản, và một đều không may là thường xuyên bị bỏ qua.
            </div>
          </div>
        </div>
      </div>

      <div className="bm-block-3">
        <div className="bm-block-3-content">
          <div className="title">7</div>
          <div className="content">7 lĩnh vực<br />chủ chốt</div>
        </div>
        <div className="bm-block-3-content bm-block-3-center">
          <div className="title">500</div>
          <div className="content">Hơn 500 cán bộ công nhân viên với tay nghề nhiệt huyết</div>
        </div>
        <div className="bm-block-3-content">
          <div  className="title">50</div>
          <div className="content">Trên 50 năm <br /> kinh nghiệm</div>
        </div>
      </div>

      <div className="bm-block-4 col-sm-12">
        <div className="div-header-title">
          <span className="header-title">TIN TỨC</span>
        </div>

        <div className="tin-tuc-homepage">
          <div className="my-3">
            <div className="time mt-5">Thursday, 14:09 Date 14/12/2017</div>
            <div className="title my-2">Gặp gỡ với Giám Đốc điều hành của THE GENERAL DEPT. OF INT'L COOPERATION</div>
            <div className="my-3"><span className="btn-read-more">ĐỌC TIẾP</span></div>
            <hr />
          </div>

          <div className="my-3">
            <div className="time mt-5">Thursday, 14:09 Date 14/12/2017</div>
            <div className="title my-2">Gặp gỡ với Giám Đốc điều hành của THE GENERAL DEPT. OF INT'L COOPERATION</div>
            <div className="my-3"><span className="btn-read-more">ĐỌC TIẾP</span></div>
            <hr />
          </div>

          <div className="my-3">
            <div className="time mt-5">Thursday, 14:09 Date 14/12/2017</div>
            <div className="title my-2">Gặp gỡ với Giám Đốc điều hành của THE GENERAL DEPT. OF INT'L COOPERATION</div>
            <div className="my-3"><span className="btn-read-more">ĐỌC TIẾP</span></div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default HomeMobile;
