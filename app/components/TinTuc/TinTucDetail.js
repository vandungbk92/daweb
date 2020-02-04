import React from 'react';
import { useHistory } from 'react-router-dom';
import ve_chung_toi_1 from '../../asset/Image/ve-chung-toi-1.png';
import ve_chung_toi_2 from '../../asset/Image/ve-chung-toi-2.png';
import hinh_vuong from '../../asset/Icon/hinh_vuong.svg';
import ic_cleaner from '../../asset/Icon/ic_cleaner.svg';


function TinTucDetail({dataTinTuc}) {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  let xhtml = null;
  if(Array.isArray(dataTinTuc)){
    xhtml = dataTinTuc.map((data, i) => {
      return <div key={i} className="detail my-4">
        <div className="bl-2-bg">
          <img src={data.img} className="img-detail"/>
          <div className="middle">
            <div className="text" onClick={() => handleClick(data.link)}>Đọc tiếp</div>
          </div>
        </div>
        <div className="author mt-3">
          {data.author} <span className="mx-4 breadcrumb-dot"></span> {data.time}
        </div>
        <div className="title my-2" onClick={() => handleClick(data.link)}>{data.title}</div>
        <div className="content">{data.content}</div>
      </div>
    })
  }

  return <div className="block-2 my-5">{xhtml}</div>
}

export default TinTucDetail;
