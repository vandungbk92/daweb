import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Index from '../../components/ChiTietTinTuc/Index';
import './ChiTietTinTuc.scss';
import chi_tiet_tin_tuc from '../../asset/Image/chi-tiet-tin-tuc.png';
import tva_slide from '../../asset/ImageMobile/tva_slide_1.png';
import cttt_1 from '../../asset/ImageMobile/cttt_1.png';
import cttt_2 from '../../asset/ImageMobile/cttt_2.png';

import Slider from "react-slick";
import ic_arrow_right from '../../asset/Icon/Group_40.svg';
import ic_arrow_left from '../../asset/Icon/Group_42.svg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: 'block', width: '25px', height: '25px', top: '75px'  }}
      onClick={onClick}
    >
      <img src={ic_arrow_right} style={{width: '25px'}}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: 'block', width: '25px', height: '25px', top: '75px' }}
      onClick={onClick}
    >
      <img src={ic_arrow_left} style={{width: '25px'}}/>
    </div>
  );
}

export default function TinTucPage() {
  const breadcrumb = [
    {
      label: 'Trang chủ',
      link: '/'
    },
    {
      label: 'Tin tức & Sự kiện',
      link: '/tin-tuc',
      dot: true
    }
  ]

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  return <div className="tin-tuc-detail-page">
    <div className="tin-tuc-detail-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>
      <div>
        <img src={chi_tiet_tin_tuc} style={{width: '100%'}}/>
      </div>
      <Index />

    </div>

    <div className="tin-tuc-detail-mobile">
      <div className="block-1">
        <img src={tva_slide} className='img-sl'/>
        <div className="bg-slide"></div>
        <div className="cttt-sl-title">
          <div className="cttt-sl-title-1">Anh Tuấn <span className="mx-3 breadcrumb-dot"></span> July, 08/2017</div>
          <div className="cttt-sl-title-2">Dịch vụ vệ sinh công nghiệp - <br/>giải pháp tuyệt vời <br/>cho không gian của bạn</div>
        </div>

      </div>

      <div className="block-2 col-sm-12">
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

      <div className="block-3 col-sm-12">
        <div className="bl-3-title">TIN TỨC LIÊN QUAN</div>
        <div className="">
          <Slider {...settings}>
            <div>
              <img src={cttt_1}/>
              <div className="sl-title">Sự cần thiết của dịch vụ vệ sinh công nghiệp</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>
            <div>
              <img src={cttt_2}/>
              <div className="sl-title">Thực tế công việc làm vệ sinh tòa nhà tại Nhật...</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>

            <div>
              <img src={cttt_1}/>
              <div className="sl-title">Sự cần thiết của dịch vụ vệ sinh công nghiệp</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>
            <div>
              <img src={cttt_2}/>
              <div className="sl-title">Thực tế công việc làm vệ sinh tòa nhà tại Nhật...</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>

            <div>
              <img src={cttt_1}/>
              <div className="sl-title">Sự cần thiết của dịch vụ vệ sinh công nghiệp</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>
            <div>
              <img src={cttt_2}/>
              <div className="sl-title">Thực tế công việc làm vệ sinh tòa nhà tại Nhật...</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>

            <div>
              <img src={cttt_1}/>
              <div className="sl-title">Sự cần thiết của dịch vụ vệ sinh công nghiệp</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>
            <div>
              <img src={cttt_2}/>
              <div className="sl-title">Thực tế công việc làm vệ sinh tòa nhà tại Nhật...</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>

            <div>
              <img src={cttt_1}/>
              <div className="sl-title">Sự cần thiết của dịch vụ vệ sinh công nghiệp</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>
            <div>
              <img src={cttt_2}/>
              <div className="sl-title">Thực tế công việc làm vệ sinh tòa nhà tại Nhật...</div>
              <div className="div-sl-readmore"><span className="sl-readmore">Đọc tiếp</span></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>

}
