import React from 'react';
import { useHistory } from 'react-router-dom';
import ve_chung_toi_1 from '../../asset/Image/ve-chung-toi-1.png';
import ve_chung_toi_2 from '../../asset/Image/ve-chung-toi-2.png';
import ve_chung_toi_3 from '../../asset/Image/ve_chung_toi_3.jpg';
import ve_chung_toi_4 from '../../asset/Image/ve_chung_toi_4.jpg';
import ve_chung_toi_5 from '../../asset/Image/ve_chung_toi_5.jpg';
import anh_1 from '../../asset/vechungtoi/anh_1.png';
import anh_2 from '../../asset/vechungtoi/anh_2.png';
import anh_3 from '../../asset/vechungtoi/anh_3.png';
import anh_4 from '../../asset/vechungtoi/anh_4.png';
import anh_5 from '../../asset/vechungtoi/anh_5.png';
import anh_6 from '../../asset/vechungtoi/anh_6.png';
import anh_7 from '../../asset/vechungtoi/anh_7.png';
import anh_8 from '../../asset/vechungtoi/anh_8.png';


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

      <div className="block-5">
        <div className="bl-5-title">CÁC THỂ MẠNH CỦA CHÚNG TÔI</div>
        <div className="block-5-content">
          <img src={anh_1}/>
          <div>Có trung tâm đào tạo bồi dưỡng tay nghề</div>
          <img src={anh_2}/>
        </div>

        <div className="block-5-content">
          <div>Trang thiết bị hiện đại, công nghệ tiên tiến</div>
          <img src={anh_3}/>
          <div>Nhân công được đào tạo chuyên nghiệp</div>
        </div>
      </div>

      <div className="block-6">
        <div className="bl-6-content">
          <img src={anh_4}/>
          <div>
            <div>NHÂN CÔNG ĐƯỢC ĐÀO TẠO CHUYÊN NGHIỆP</div>
            <div>
              <div>Nhân sự được đào tạo bài bản tại các trung tâm</div>
              <div>Nhân sự được đào tạo bài bản tại các trung tâm</div>
              <div>Nhân sự được đào tạo bài bản tại các trung tâm</div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-7">
        <div className="bl-7-content">
          <div>
            <div>TRANG THIẾT BỊ HIỆN ĐẠI</div>
            <div>
              <div>Được nhập khẩu trực tiếp từ Italia, Nhật Bản</div>
              <div>Hiệu suất cao</div>
              <div>Tháo lắp dễ dàng – Tiết kiệm thời gian</div>
            </div>
          </div>
          <img src={anh_5}/>

        </div>
      </div>

      <div className="block-8">
        <div className="bl-8-content">
          <img src={anh_6}/>
          <div>
            <div>CÔNG NGHỆ TIÊN TIẾN</div>
            <div>
              <div>Thân thiện với môi trường</div>
              <div>An toàn với sức khỏe con người</div>
              <div>Tính khử trùng, diệt khuẩn cao</div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-9">
        <div className="bl-9-title">CÁC THỂ MẠNH CỦA CHÚNG TÔI</div>
        <img src={anh_7}/>
      </div>

      <div className="block-10">
        <div className="bl-10-content">
          <img src={anh_8}/>
          <div>
            <div>GIÁ CẢ CẠNH TRANH</div>
            <div>
              Dưới sự kết hợp của các yếu tố trên (con người, kỹ thuật, cách setup dự án ….) chúng tôi mong muốn mang lại cho khách hàng sự hài lòng với chi phí hợp lý nhất.
            </div>
          </div>
        </div>
      </div>

      <div className="block-11">
        <div className="bl-11">
          <div>PHƯƠNG PHÁP TÍNH TOÁN VÀ QUẢN LÝ</div>
          <div className="bl-11-content">
            <div>Lương xứng đáng theo năng lực</div>
            <div>Được tham gia BHXH</div>
            <div>Các phụ cấp (chuyên cần, đi lại, nhà ở…)</div>
            <div>Thưởng lễ tết, tháng lương 13 theo quy định của nhà nước</div>
            <div>Người lao động gắn bó lâu dài với công ty</div>
          </div>
        </div>
      </div>

      <div className="block-4 bg-white">
        <div className="block-4-content">
          <div className="bl-4-title mb-3">Sứ mệnh của chúng tôi</div>
          <div className="bl-4-content">Chúng tôi theo đuổi mục tiêu hoàn thiện Phần mềm (con người) và Phần cứng (Thiết
            bị), mở ra một cánh cửa mới trong việc cung cấp các giải pháp bảo trì tòa nhà.
          </div>
          <div style={{ display: 'flex' }} className="mt-3">
            <div className="bl-4-btn mr-5" onClick={() => handleClick('/dich-vu')}>XEM DỊCH VỤ</div>
            <div className="bl-4-btn" onClick={() => handleClick('/lien-he')}>LIÊN HỆ VỚI CHÚNG TÔI</div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default NoiDung;
