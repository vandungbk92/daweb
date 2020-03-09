import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import BaoVeCamera from '../../components/DichVu/BaoVeCamera';
import CameraMobile from '../../components/DichVu/CameraMobile';
import './baovecamera.scss'
import '../VeSinhCongNghiepPage/Vscn.scss';


export default function BaoVeCameraPage() {
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
      label: 'Bảo vệ, camera',
      dot: true,
    },
  ];

  React.useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 0);
  }, []);

  return <div className="ve-sinh-cong-nghiep-page bao-ve-camera-page">
    <div className="ve-sinh-cong-nghiep-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>

      <BaoVeCamera/>
    </div>
    <CameraMobile/>
  </div>;

}
