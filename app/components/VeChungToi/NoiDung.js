import React from 'react';
import { useHistory } from 'react-router-dom';
import ve_chung_toi_1 from '../../asset/Image/ve-chung-toi-1.png';
import ve_chung_toi_2 from '../../asset/Image/ve-chung-toi-2.png';
import ve_chung_toi_3 from '../../asset/Image/ve_chung_toi_3.jpg';
import ve_chung_toi_4 from '../../asset/Image/ve_chung_toi_4.jpg';
import ve_chung_toi_5 from '../../asset/Image/ve_chung_toi_5.jpg';
import ic_cleaner from '../../asset/Icon/ic_cleaner.svg';


function NoiDung() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div>
      <div style={{ width: '82%', margin: 'auto', maxWidth: '1125px' }} className="clearfix block-1 d-flex">
        <img src={ve_chung_toi_1} className="float-left mr-1" style={{ width: '23.55%' }}/>
        <img src={ve_chung_toi_2} className="float-left mr-1" style={{ width: '23.55%' }}/>
        <div className="float-right mt-auto ml-auto mb-auto mr-0" style={{ width: '50.48%' }}>
          <span className="bl-2-btn">BM-V</span>
          <div className="bl-2-title mt-1 mb-3">VỀ CHÚNG TÔI</div>
          <div className="bl-2-content">
            Tiền thân là công ty cổ phần dịch vụ Maxxclean Việt Nam thành lập năm 2013 và đã có những thành tựu nhất
            định trong lĩnh vực.Vào năm 2019 sau khi thỏa thuận thống nhất giữa 2 bên thì công ty Birumen Kagoshima đã
            đầu tư và mua lại 70% cổ phần với mục đích bằng kinh nghiệm năng lực và tư duy của người Nhật sẽ sớm thúc
            đẩy sự phát triển của công ty trong lĩnh vực. (Cuối năm 2019 công ty chính thức đổi tên thành <span
            className="bl-2-content-bold">Công ty cổ phần quản lý tòa nhà Việt Nam</span>)
          </div>
        </div>
      </div>

      <div className="block-2">
        <div style={{ height: '35px' }}/>
        <div className="block-2-content">
          <div className="container-custom">
            <div className=" block-width">
              <div className="block-title">CHUYÊN NGHIỆP</div>
              <hr className="hr-line"/>
              <div className="block-content">
                Áp dụng tối đa kinh nghiệm và tri thức của đội ngũ nhân sự có chuyên môn cao
              </div>
            </div>

            <div className=" block-width">
              <div className="block-title">TRÁCH NHIỆM</div>
              <hr className="hr-line"/>
              <div className="block-content">
                Đội ngũ nhân viên được đào tạo bài bản và luôn làm việc với thái độ khắt khe nhất
              </div>
            </div>
            <div className=" block-width">
              <div className="block-title">TƯƠI CƯỜI</div>
              <hr className="hr-line"/>
              <div className="block-content">
                Để cho công việc đạt hiệu quả cao nhất, chúng tôi luôn duy trì không khí làm việc vui vẻ và hứng khởi
              </div>
            </div>
            <div className=" block-width">
              <div className="block-title">CHÍNH XÁC</div>
              <hr className="hr-line"/>
              <div className="block-content">
                Phát huy tối đa công năng của những trang thiết bị hiện đại cùng tinh thần làm việc tập trung cao độ
              </div>
            </div>

            <div className="block-width">
              <div className="block-title">AN TOÀN</div>
              <hr className="hr-line"/>
              <div className="block-content">
                Chúng tôi luôn nỗ lực để bảo vệ tài sản của khách hàng tránh khỏi những rủi ro
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '35px' }}/>

      </div>

      <div className="block-3">
        <div className="block-3-content">
          <div className="bl-3-col-1">
            <img src={ve_chung_toi_3}/>
          </div>
          <div className="bl-3-title">50</div>
          <div className="bt-3-content">Trên 50 năm kinh nghiệm</div>
        </div>
        <div className="block-3-content bl-3-2" style={{ zIndex: 1 }}>
          <div className="bl-3-col-2">
            <img src={ve_chung_toi_4}/>
          </div>
          <div className="bl-3-title">500</div>
          <div className="bt-3-content">Hơn 500 cán bộ công nhân viên với tay nghề nhiệt huyết</div>
        </div>
        <div className="block-3-content">
          <div className="bl-3-col-3">
            <img src={ve_chung_toi_5}/>
          </div>
          <div className="bl-3-title">7</div>
          <div className="bt-3-content">7 lĩnh vực chủ chốt</div>
        </div>
      </div>

      <div className="block-4">
        <div className="block-4-content">
          <div className="bl-4-title mb-3">Sứ mệnh của chúng tôi</div>
          <div className="bl-4-content">Chúng tôi theo đuổi mục tiêu hoàn thiện Phần mềm (con người) và Phần cứng (Thiết
            bị), mở ra một cánh cửa mới trong việc cung cấp các giải pháp bảo trì tòa nhà.
          </div>
          <div style={{ display: 'flex' }} className="mt-3">
            <div className="bl-4-btn mr-5">XEM DỊCH VỤ</div>
            <div className="bl-4-btn">LIÊN HỆ VỚI CHÚNG TÔI</div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default NoiDung;
