import React from 'react';
import tva_1 from '../../asset/Image/tva-1.png';
import tva_2 from '../../asset/Image/tva-2.png';
import tva_3 from '../../asset/Image/tva-3.png';
import tva_4 from '../../asset/Image/tva-4.png';
import tva_5 from '../../asset/Image/tva-5.png';
import tva_6 from '../../asset/Image/tva-6.png';
import tva_8 from '../../asset/Image/tva-8.png';
import tva_9 from '../../asset/Image/tva-9.png';
import tva_10 from '../../asset/Image/tva-10.png';
import tva_11 from '../../asset/Image/tva-11.png';
import Breadcrumb from '../../components/Breadcrumb';
import './ThuVienAnh.scss'


export default function ThuVienAnhPage() {
  const breadcrumb = [
    {
      label: 'Trang chủ',
      link: '/'
    },
    {
      label: 'Thư viện ảnh',
      dot: true
    }
  ]

  return <div className="thu-vien-anh-page container-custom">
    <Breadcrumb breadcrumb={breadcrumb}/>
    <div className="thu-vien-anh-content">
      <div className="block-1">
        <img src={tva_1} className=""/>

        <div className="bl-1-r">
          <img src={tva_2} className="w-100"/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={tva_3} className="bl-1-img-3"/>
            <img src={tva_4} className="bl-1-img-4"/>
          </div>
        </div>

      </div>
      <div className="block-2">
        <img src={tva_5} className="bl-2-l"/>
        <img src={tva_6} className="bl-2-r"/>
      </div>

      <div className="block-1">

        <div className="bl-1-r">
          <img src={tva_8} className="w-100 bl-1-r-1"/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={tva_9} className=" bl-1-img-3"/>
            <img src={tva_10} className="bl-1-img-4"/>
          </div>

        </div>
        <img src={tva_11}/>

      </div>

      {/*<img src={tva_1} style={{width: '49.51%'}}/>
      <img src={tva_2} style={{width: '49.51%'}}/>*/}
    </div>

  </div>

}
