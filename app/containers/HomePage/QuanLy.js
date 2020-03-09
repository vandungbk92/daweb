import React from 'react';
import { useHistory } from 'react-router-dom';

import nomoto from '../../asset/quanly/nomoto.jpg';
import anh_tuan from '../../asset/quanly/anh_tuan.jpg';
import yokomichi from '../../asset/quanly/yokomichi.jpg';

import chuyen_nghiep from '../../asset/quanly/chuyen_nghiep.svg';
import trach_nhiem from '../../asset/quanly/trach_nhiem.svg';
import tuoi_cuoi from '../../asset/quanly/tuoi_cuoi.svg';
import chinh_xac from '../../asset/quanly/chinh_xac.svg';
import an_toan from '../../asset/quanly/an_toan.svg';

export function QuanLy() {
  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (
    <div className="home-page-quan-ly bg-white">
      <div className="d-flex justify-content-around block-1" style={{ padding: '80px 0 0px 0' }}>
        <img src={chuyen_nghiep}/>
        <img src={trach_nhiem}/>
        <img src={tuoi_cuoi}/>
        <img src={chinh_xac}/>
        <img src={an_toan}/>
      </div>
      <div className="home-page-tin-tuc block-2">

        <div className="w-100 text-center" style={{ paddingBottom: '50px' }}>
        <span
          style={{
            color: '#FFFFFF',
            background: '#221F64',
            fontSize: '32px',
            padding: '5px 10px',
          }}
        >
          ĐỘI NGŨ QUẢN LÝ
        </span>
        </div>
        <div className="d-flex justify-content-around pb-5">
          <div>
            <img src={anh_tuan}/>
            <div className="quan-ly-name">Ông Hoàng Anh Tuấn</div>
            <hr className="quan-ly-hr"/>
            <div className="quan-ly-chuc-vu">TỔNG GIÁM ĐỐC</div>
          </div>

          <div>
            <img src={nomoto}/>
            <div className="quan-ly-name">Ông Kazuomi Nomoto</div>
            <hr className="quan-ly-hr"/>
            <div className="quan-ly-chuc-vu">CHỦ TỊCH</div>
          </div>
        </div>

        <div className="d-flex flex-column">
          <img src={yokomichi} className="m-auto"/>
          <div className="quan-ly-name">Ông Yokomichi</div>
          <hr className="quan-ly-hr" style={{width: '16%'}}/>
          <div className="quan-ly-chuc-vu">GIÁM ĐỐC KỸ THUẬT</div>
        </div>
      </div>
    </div>
  );
}

export default QuanLy;
