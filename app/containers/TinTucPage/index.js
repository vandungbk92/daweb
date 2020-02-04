import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Index from '../../components/TinTuc/Index';
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
  return <div className="container-custom">
    <Breadcrumb breadcrumb={breadcrumb}/>

    <Index />

  </div>

}
