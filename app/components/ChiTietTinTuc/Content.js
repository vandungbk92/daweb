import React from 'react';
import { useHistory } from 'react-router-dom';

function Content() {

  return (
    <div className="block-1 float-left">
      <div className="author">
        Anh Tuấn <span className="mx-3 breadcrumb-dot"></span> July, 08/2017
      </div>
      <div className="title mt-2">
        Dịch vụ vệ sinh công nghiệp - giải pháp tuyệt vời cho không gian của bạn
      </div>
      <div className="description my-4">
        Khi xã hội ngày càng phát triển, công nghệ ngày càng hiện đại thì vệ sinh thủ công trước đây đã không còn thích
        hợp nữa. Thay vào đó là sự xuất hiện ngày càng phổ biến của dịch vụ vệ sinh công nghiệp.
        <br/> Dịch vụ vệ sinh công nghiệp là gì?
      </div>

      <div className="content">
        Vệ sinh công nghiệp là dịch vụ vệ sinh nhà ở, nhà hàng, khách sạn, văn phòng, cơ quan, trung tâm thương mại, trường học, bệnh viện…cần đến việc sử dụng hóa chất chuyên dụng kết hợp với thiết bị vệ sinh công nghiệp đặc thù để làm sạch nhanh với diện tích làm sạch lớn. Có thể nói vệ sinh công nghiệp chính là một dịch vụ tổng hợp với rất nhiều các dịch vụ nhỏ bên trong như: Tổng vệ sinh công trình, giặt ghế sofa, giặt thảm, lau kính, đánh bóng sàn, mài nền bê tông, cắt cỏ…. Tùy thuộc vào mục đích và nhu cầu của mình mà bạn có thể yêu cầu một dịch vụ phù hợp. Sự cần thiết của dịch vụ vệ sinh công nghiệp
      </div>
      <div className="description my-4">
        Sự cần thiết của dịch vụ vệ sinh công nghiệp
      </div>
      <div className="content">
        Dịch vụ vệ sinh công nghiệp đang ngày càng trở nên quan trọng khi mà môi trường sống của chúng ta đang trong tình trạng “báo động”. Trên báo đài và các kênh truyền thông dạo gần đây luôn cảnh báo về mức độ ô nhiễm không khí tại các thành phố lớn, đặc biệt là Hà Nội (vượt ngưỡng báo động đỏ, đứng đầu thế giới).
      </div>

      <div className="content my-4">
        Trong khi đó, sát thủ của sức khỏe con người chính là những hạt bị nhỏ mà bạn không thể nhìn thấy được. Theo thống kê của WTO, mỗi năm thế giới có khoảng 7 triệu ca tử vong do ô nhiễm không khí. Ô nhiễm không khí ảnh hưởng trực tiếp tới sức khỏe, môi trường sống, làm việc và học tập của chúng ta. Thế nên việc xây dựng một môi trường đảm bảo sạch sẽ, thông thông thoáng là hết sức cần thiết.
      </div>

      <div className="quote">
        Nguồn: https://www.24h.com.vn/doanh-nghiep/dich-vu-ve-sinh-cong-nghiep-giai-phap-tuyet-voi-cho-khong-gian-cua-ban-c849a1105262.html
      </div>
    </div>
  );
}

export default Content;
