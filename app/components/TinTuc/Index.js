import React from 'react';
import { useHistory } from "react-router-dom";
import TinTucDetail from './TinTucDetail';

import tin_tuc_2 from '../../asset/Image/tin_tuc_2.png';
import tin_tuc_3 from '../../asset/Image/tin_tuc_3.png';
import tin_tuc_4 from '../../asset/Image/tin_tuc_4.jpg';
import tin_tuc_5 from '../../asset/Image/tin_tuc_5.png';
import tin_tuc_6 from '../../asset/Image/tin_tuc_6.png';
import tin_tuc_7 from '../../asset/Image/tin_tuc_7.png';
function TinTuc() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  let dataTinTuc = [
    {
      author: 'Anh Tuấn',
      time: 'July, 08/2017',
      title: 'Tập huấn công tác phòng cháy chữa cháy...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici',
      img: tin_tuc_2,
      link: '/chi-tiet-tin-tuc'
    },

    {
      author: 'Vân Anh',
      time: 'July, 08/2017',
      title: 'Dịch vụ vệ sinh công nghiệp - giải pháp tuyệt...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici',
      img: tin_tuc_3,
      link: '/chi-tiet-tin-tuc'
    },

    {
      author: 'Anh Tuấn',
      time: 'July, 08/2017',
      title: 'Quy trình làm việc của bảo vệ an ninh tòa nhà',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici',
      img: tin_tuc_4,
      link: '/chi-tiet-tin-tuc'
    },

    {
      author: 'Anh Tuấn',
      time: 'July, 08/2017',
      title: 'Tập huấn công tác phòng cháy chữa cháy...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici',
      img: tin_tuc_5,
      link: '/chi-tiet-tin-tuc'
    },

    {
      author: 'H. Thanh',
      time: 'July, 08/2017',
      title: 'Công ty vệ sinh có phun diệt côn trùng trong...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici',
      img: tin_tuc_6,
      link: '/chi-tiet-tin-tuc'
    },

    {
      author: 'H. Thanh',
      time: 'July, 08/2017',
      title: 'Thực tế công việc làm vệ sinh tòa nhà tại Nhật...',
      content: 'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nul quam aenean sociis quis sem neque vici',
      img: tin_tuc_7,
      link: '/chi-tiet-tin-tuc'
    },


  ]

  return (
    <div className="tin-tuc-page">
      <div className="block-1 clearfix">
        <div className="img-bg float-left"></div>
        <div className="bl-1-r float-right">
          <div className="author mt-4 mb-2">Anh Tuấn <span className="mx-4 breadcrumb-dot"></span> July, 08/2017</div>
          <div className="title mt-2">Các công ty quản lý tòa nhà buộc phải cải thiện</div>
          <div className="content my-4">
            Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean...
          </div>
          <div>
            <button className="btn-tin-tic" onClick={() => handleClick('/chi-tiet-tin-tuc')}>Đọc tiếp</button>
          </div>
        </div>
      </div>
      <div>
        <TinTucDetail dataTinTuc={dataTinTuc}/>
      </div>

    </div>
  );
}

export default TinTuc;
