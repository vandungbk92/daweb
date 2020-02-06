import React from 'react';
import { useHistory } from "react-router-dom";
import tt_slide from '../../asset/ImageMobile/tt_slide.png';
import lien_he from '../../asset/ImageMobile/lien_he.png';
import vct_1 from '../../asset/ImageMobile/vct_1.png';
import vct_2 from '../../asset/ImageMobile/vct_2.png';
import ve_chung_toi_3 from '../../asset/Image/ve_chung_toi_3.jpg';
import ve_chung_toi_4 from '../../asset/Image/ve_chung_toi_4.jpg';
import ve_chung_toi_5 from '../../asset/Image/ve_chung_toi_5.jpg';

function VeChungToiMobile() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="ve-chung-toi-mobile">
      <div className="block-1">
        <img src={lien_he} className='img-sl'/>
        <div className="bg-slide"></div>
        <div className="vct-sl-title">
          <div><span className="slogan">SLOGAN</span></div>
          <div className="vct-sl-title-2 my-2">CÔNG NGHỆ NHẬT BẢN CHO MỘT MÔI TRƯỜNG HOÀN HẢO</div>
          <div className="vct-sl-title-3">Tòa nhà và các công trình xây dựng đang đa dạng hóa cùng với nhu cầu của xã hội, đang có nhiều sự thay đổi như cao cấp hơn, kín hơn và thông minh hơn. Công việc bảo dưỡng tòa nhà là công việc đối ứng với những sự thay đổi như vậy, bảo vệ những tài sản quan trọng của chủ nhân, tạo một môi trường thoải mái cho những người sử dụng tòa nhà hay công trình đó.</div>
        </div>
      </div>

      <div className="mb-block-2">
        <div className="mb-bl-2-img">
          <img src={vct_1} className='img-content mr-2'/>
          <img src={vct_2} className='img-content'/>
        </div>
        <div className="mb-bl-2-content">
          <div><span className="slogan">BM-V</span></div>
          <div className="mb-bl-2-title my-3">VỀ CHÚNG TÔI</div>
          <div className="mb-bl-2-title-1">Tiền thân là công ty cổ phần dịch vụ Maxxclean Việt Nam thành lập năm 2013 và đã có những thành tựu nhất định trong lĩnh vực. Vào năm 2019 sau khi thỏa thuận thống nhất giữa 2 bên thì công ty Birumen Kagoshima đã đầu tư và mua lại 70% cổ phần với mục đích bằng kinh nghiệm năng lực và tư duy của người Nhật sẽ sớm thúc đẩy sự phát triển của công ty trong lĩnh vực. ( Cuối năm 2019 công ty chính thức đổi tên thành <span className="content-bold">Công ty cổ phần quản lý tòa nhà Việt Nam</span>)</div>
        </div>
      </div>

      <div className="mb-block-3">
        <div className="clearfix content">
          <div className="float-left w-50 mb-block-3-left">
            <div className="content-1">
              <div className="title">CHUYÊN NGHIỆP</div>
              <hr className="vct-hr"/>
              <div className="detail">Áp dụng tối đa kinh nghiệm và tri thức của đội ngũ nhân sự có chuyên môn cao</div>
            </div>
          </div>
          <div className="float-right w-50 mb-block-3-right">
            <div className="content-1">
              <div className="title">TRÁCH NHIỆM</div>
              <hr className="vct-hr"/>
              <div className="detail">Đội ngũ nhân viên được đào tạo bài bản và luôn làm việc với thái độ khắt khe nhất</div>
            </div>
          </div>
        </div>

        <div className="clearfix content">
          <div className="float-left w-50 mb-block-3-left">
            <div className="content-1">
              <div className="title">TƯƠI CƯỜI</div>
              <hr className="vct-hr"/>
              <div className="detail">Để cho công việc đạt hiệu quả cao nhất, chúng tôi luôn duy trì không khí làm việc vui vẻ và hứng khởi</div>
            </div>
          </div>
          <div className="float-right w-50 mb-block-3-right">
            <div className="content-1">
              <div className="title">CHÍNH XÁC</div>
              <hr className="vct-hr"/>
              <div className="detail">Phát huy tối đa công năng của những trang thiết bị hiện đại cùng tinh thần làm việc tập trung cao độ</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="content-2">
            <div className="title">AN TOÀN</div>
            <hr className="vct-hr"/>
            <div className="detail">Chúng tôi luôn nỗ lực để bảo vệ tài sản của khách hàng tránh khỏi những rủi ro</div>
          </div>
        </div>
      </div>

      <div className="block-3 mb-block-4">
        <div className="block-3-content">
          <div className="bl-3-col-1">
            <img src={ve_chung_toi_3} style={{width: '34px'}}/>
          </div>
          <div className="bl-3-title">50</div>
          <div className="bt-3-content">Trên 50 năm kinh nghiệm</div>
        </div>
        <div className="block-3-content bl-3-2">
          <div className="bl-3-col-2">
            <img src={ve_chung_toi_4} style={{width: '56px'}}/>
          </div>
          <div className="bl-3-title">500</div>
          <div className="bt-3-content">Hơn 500 cán bộ công nhân viên với tay nghề nhiệt huyết</div>
        </div>
        <div className="block-3-content">
          <div className="bl-3-col-3">
            <img src={ve_chung_toi_5} style={{width: '97px'}}/>
          </div>
          <div className="bl-3-title">7</div>
          <div className="bt-3-content">7 lĩnh vực chủ chốt</div>
        </div>
      </div>


      <div className="block-4 mb-block-5">
        <div className="block-4-content">
          <div className="bl-4-title">Sứ mệnh của chúng tôi</div>
          <div className="bl-4-content">Chúng tôi theo đuổi mục tiêu hoàn thiện Phần mềm <br/>(con người) và Phần cứng (Thiết bị), <br/> mở ra một cánh cửa mới trong việc cung cấp các <br/>giải pháp bảo trì tòa nhà.</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="mt-3">
            <div className="bl-4-btn mb-3">XEM DỊCH VỤ</div>
            <div className="bl-4-btn">LIÊN HỆ VỚI CHÚNG TÔI</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default VeChungToiMobile;
