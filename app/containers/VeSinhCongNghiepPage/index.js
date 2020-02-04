import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import VeSinhCongNghiep from '../../components/DichVu/VeSinhCongNghiep';
import './Vscn.scss'

export default function VeSinhCongNghiepPage() {
  const breadcrumb = [
    {
      label: 'Trang chủ',
      link: '/'
    },
    {
      label: 'Dịch vụ',
      link: '/dich-vu',
      dot: true
    },
    {
      label: 'Vệ sinh công nghiệp',
      dot: true
    },
  ]
  return <div className="container-custom">
    <Breadcrumb breadcrumb={breadcrumb}/>

    <VeSinhCongNghiep />
  </div>

}
