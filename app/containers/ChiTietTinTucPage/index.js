import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Index from '../../components/ChiTietTinTuc/Index';
import TinTucMobile from '../../components/ChiTietTinTuc/TinTucMobile';
import './ChiTietTinTuc.scss';
import chi_tiet_tin_tuc from '../../asset/Image/chi-tiet-tin-tuc.png';


export default function TinTucPage() {
  const breadcrumb = [
    {
      label: 'Trang chủ',
      link: '/',
    },
    {
      label: 'Tin tức & Sự kiện',
      link: '/tin-tuc',
      dot: true,
    },
  ];





  return <div className="tin-tuc-detail-page">
    <div className="tin-tuc-detail-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>
      <div>
        <img src={chi_tiet_tin_tuc} style={{ width: '100%' }} alt=''/>
      </div>
      <Index/>
    </div>

    <TinTucMobile/>

  </div>;

}
