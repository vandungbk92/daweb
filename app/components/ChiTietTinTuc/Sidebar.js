import React from 'react';
import { useHistory } from 'react-router-dom';
import chi_tiet_tin_tuc_2 from '../../asset/Image/chi-tiet-tin-tuc-2.png';
import tin_tuc_7 from '../../asset/Image/tin_tuc_7.png';


function Sidebar() {
  let dataTinTuc = [{
    img: tin_tuc_7,
    author: 'Ly Trần',
    time: 'July, 08/2017',
    title: 'Sự cần thiết của dịch vụ vệ sinh công nghiệp',
    content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici libero...',
  },
    {
      img: chi_tiet_tin_tuc_2,
      author: 'Vân Anh',
      time: 'July, 08/2017',
      title: 'Thực tế công việc làm vệ sinh tòa nhà tại Nhật...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici libero...',
    },
  ];

  let xhtml = null;
  if (Array.isArray(dataTinTuc)) {
    xhtml = dataTinTuc.map((data, i) => {
      return <div key={i} className="detail">
        <div className="bl-2-bg">
          <img src={data.img} className="img-detail"/>
        </div>
        <div className="author mt-3 mb-2">
          {data.author} <span className="mx-3 breadcrumb-dot"></span> {data.time}
        </div>
        <div className="title mb-2">{data.title}</div>
        <div className="content">{data.content}</div>

        <hr />
      </div>
    });
  }

  return (
    <div className="block-2 float-right">
      {xhtml}
    </div>
  );
}

export default Sidebar;
