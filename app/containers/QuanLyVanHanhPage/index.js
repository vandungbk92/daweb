import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import QuanLyVanHanh from '../../components/DichVu/QuanLyVanHanh';
import VeSinhCongNghiepMobile from '../../components/DichVu/VeSinhCongNghiepMobile';
import QLVHMobile from '../../components/DichVu/QLVHMobile';
import './quanlyvanhanh.scss'
import '../VeSinhCongNghiepPage/Vscn.scss';


export default function QuanLyVanHanhPage() {
  const breadcrumb = [
    {
      label: 'Trang chủ',
      link: '/',
    },
    {
      label: 'Dịch vụ',
      link: '/dich-vu',
      dot: true,
    },
    {
      label: 'Quản lý vận hành',
      dot: true,
    },
  ];

  React.useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 0);
  }, []);

  return <div className="ve-sinh-cong-nghiep-page quan-ly-van-hanh-page">
    <div className="ve-sinh-cong-nghiep-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>

      <QuanLyVanHanh/>
    </div>
    <QLVHMobile/>
  </div>;

}
