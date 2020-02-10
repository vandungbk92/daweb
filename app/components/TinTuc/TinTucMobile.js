import React from 'react';
import { useHistory } from 'react-router-dom';

import tt_slide from '../../asset/ImageMobile/tt_slide.png';
import tt_1 from '../../asset/ImageMobile/tt_1.png';
import tt_2 from '../../asset/ImageMobile/tt_22.png';
import tt_3 from '../../asset/ImageMobile/tt_3.png';
import tt_4 from '../../asset/ImageMobile/tt_4.png';

export default function TinTucMobile() {

  let history = useHistory();
  function handleClick(link) {
    history.push(link);
  }

  const dataTinTuc = [{
    author: 'Anh Tuấn',
    time: 'July, 08/2017',
    title: 'Tập huấn công tác phòng cháy chữa cháy...',
    content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici libero...',
    img: tt_1,
    link: '/chi-tiet-tin-tuc',
  },

    {
      author: 'Vân Anh',
      time: 'July, 08/2017',
      title: 'Dịch vụ vệ sinh công nghiệp - giải pháp tuyệt...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici libero...',
      img: tt_2,
      link: '/chi-tiet-tin-tuc',
    },

    {
      author: 'Vân Anh',
      time: 'July, 08/2017',
      title: 'Thực tế công việc làm vệ sinh tòa nhà tại Nhật...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici libero...',
      img: tt_3,
      link: '/chi-tiet-tin-tuc',
    },
    {
      author: 'Anh Tuấn',
      time: 'July, 08/2017',
      title: 'LỄ KÝ KẾT THỎA THUẬN HỢP TÁC ĐÀO TẠO...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici libero...',
      img: tt_4,
      link: '/chi-tiet-tin-tuc',
    },
  ];

  let xhtml = dataTinTuc.map((data, i) => {
    return <div key={i} className="detail my-4">
      <img src={data.img} className="img-detail"/>

      <div className="author mt-3">
        {data.author} <span className="mx-4 breadcrumb-dot"></span> {data.time}
      </div>
      <div className="title my-2" onClick={() => handleClick(data.link)}>{data.title}</div>
      <div className="content">{data.content}</div>
    </div>;
  });

  return <div className="tin-tuc-mobile">
    <div className="block-1">
      <img src={tt_slide} className='img-sl'/>
      <div className="bg-slide"></div>
      <div className="cttt-sl-title">
        <div className="cttt-sl-title-1">Anh Tuấn <span className="mx-3 breadcrumb-dot"></span> July, 08/2017</div>
        <div className="cttt-sl-title-2 my-2">Các công ty quản lý tòa nhà buộc phải cải thiện</div>
        <div className=""><span className="btn-read-more">ĐỌC TIẾP</span></div>
      </div>
    </div>

    <div className="block-2 col-sm-12 w-100">
      {xhtml}
    </div>

  </div>;

}
