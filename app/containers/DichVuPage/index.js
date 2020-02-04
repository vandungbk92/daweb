import React from 'react';
import Slide from '../../components/DichVu/Slide';
import NoiDung from '../../components/DichVu/NoiDung';
import NoiDungMobile from '../../components/DichVu/NoiDungMobile';
import './DichVu.scss';

export default function DichVuPage() {
  return <div className="dich-vu-page body">
    <div className="dich-vu-large">
      <Slide />
      <NoiDung />
    </div>
    <div className="dich-vu-mobile">
      <NoiDungMobile />
    </div>
  </div>

}
