import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import VeSinhCongNghiep from '../../components/DichVu/VeSinhCongNghiep';
import VeSinhCongNghiepMobile from '../../components/DichVu/VeSinhCongNghiepMobile';
import './Vscn.scss';

export default function VeSinhCongNghiepPage() {
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
      label: 'Vệ sinh công nghiệp',
      dot: true,
    },
  ];

  React.useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 0);
  }, []);

  return <div className="ve-sinh-cong-nghiep-page">
    <div className="ve-sinh-cong-nghiep-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>

      <VeSinhCongNghiep/>
    </div>
    <VeSinhCongNghiepMobile/>
  </div>;

}
