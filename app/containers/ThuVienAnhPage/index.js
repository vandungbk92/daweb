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

import tva_slide from '../../asset/ImageMobile/tva_slide_1.png';
import tva_mobile_1 from '../../asset/ImageMobile/tva_1.png';
import tva_mobile_2 from '../../asset/ImageMobile/tva_2.png';
import tva_mobile_3 from '../../asset/ImageMobile/tva_3.png';
import tva_mobile_4 from '../../asset/ImageMobile/tva_4.png';
import tva_mobile_5 from '../../asset/ImageMobile/tva_5.png';
import tva_mobile_6 from '../../asset/ImageMobile/tva_6.png';
import tva_mobile_7 from '../../asset/ImageMobile/tva_7.png';
import tva_mobile_8 from '../../asset/ImageMobile/tva_8.png';
import tva_mobile_9 from '../../asset/ImageMobile/tva_9.png';
import tva_mobile_10 from '../../asset/ImageMobile/tva_10.png';



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
    <div className="thu-vien-anh-large">
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
      </div>
    </div>

    <div className="thu-vien-anh-mobile">
      <div className="block-1">
        <img src={tva_slide} className='img-sl'/>
        <div className="bg-slide"></div>
        <div className="tva-sl-title">THƯ VIỆN ẢNH</div>
      </div>
      <div className="block-2">
        <div className="bl-2-1">
          <img src={tva_mobile_1}/>
          <img src={tva_mobile_2}/>
        </div>

        <div className="bl-2-1 my-2">
          <img src={tva_mobile_3}/>
          <img src={tva_mobile_4}/>
        </div>

        <div className="bl-2-1">
          <img src={tva_mobile_5}/>
          <img src={tva_mobile_6}/>
        </div>

        <div className="bl-2-1 my-2">
          <img src={tva_mobile_7}/>
          <img src={tva_mobile_8}/>
        </div>

        <div className="bl-2-1">
          <img src={tva_mobile_9}/>
          <img src={tva_mobile_10}/>
        </div>
      </div>
    </div>
  </div>

}
