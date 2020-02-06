import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Index from '../../components/TinTuc/Index';
import TinTucMobile from '../../components/TinTuc/TinTucMobile';
import './TinTuc.scss';

export default function TinTucPage() {
  const breadcrumb = [
    {
      label: 'Trang chủ',
      link: '/'
    },
    {
      label: 'Tin tức & Sự kiện',
      link: '/tin-tuc',
      dot: true
    }
  ]
  return <div className="tin-tuc-full-page">
    <div className="tin-tuc-large container-custom">
      <Breadcrumb breadcrumb={breadcrumb}/>

      <Index />

    </div>

    <TinTucMobile />
  </div>

}
