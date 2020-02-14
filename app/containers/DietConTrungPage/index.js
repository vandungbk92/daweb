import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DietConTrung from '../../components/DichVu/DietConTrung';
import VeSinhCongNghiepMobile from '../../components/DichVu/VeSinhCongNghiepMobile';
import '../VeSinhCongNghiepPage/Vscn.scss';
import './dietcontrung.scss'

export default function DietConTrungPage() {
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
      label: 'Diệt côn trùng',
      dot: true,
    },
  ];

  React.useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 0);
  }, []);

  return <div className="ve-sinh-cong-nghiep-page">
    <div className="ve-sinh-cong-nghiep-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>

      <DietConTrung/>
    </div>
    <VeSinhCongNghiepMobile/>
  </div>;

}
