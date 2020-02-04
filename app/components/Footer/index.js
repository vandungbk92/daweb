import React from 'react';
import imageFooter from '../../asset/Image/Group_106.jpg';
import logo_blue from '../../asset/Icon/Logo_blue.svg';
import IC_MAIL from '../../asset/Icon/IC_MAIL.svg';
import GROUP_96 from '../../asset/Icon/Group96.svg';
import IC_PHONE from '../../asset/Icon/ic_phone.svg';

import FLAG_EN from '../../asset/Image/flag_en.jpg';
import FLAG_JAPAN from '../../asset/Image/flag_japan.jpg';
import FLAG_VN from '../../asset/Image/flag_vn.jpg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='section-top'>
        <img src={imageFooter} alt="Snow" style={{ width: '100%' }}/>

        <div className="contact-container-logo">
          <div>
            <img src={logo_blue} alt="Snow" className="logo-bmv"/>

            <div className='company-name-vi'>{'CÔNG TY CỔ PHẦN QUẢN LÝ TÒA NHÀ VIỆT NAM'}</div>
            <div className='company-name-en'>{'Vietnam Building Management.,JSC'}</div>
          </div>
        </div>

        <div className='contact-container'>
          <div className='contact__item'>
            <div className='contact__icon'>
              <img src={IC_MAIL} alt="" className="ic-footer"/>
            </div>
            <span className='contact__text'>{'bm-v@gmail.com'}</span>
          </div>
          <div className='contact__item'>
            <div className='contact__icon'>
              <img src={GROUP_96} alt="" className="ic-footer"/>
            </div>
            <span
              className='contact__text'>{'Tầng 5 toà A1 toà nhà Ecolife Capital, số 58 Tố Hữu, Nam Từ Liêm, HN'}</span>
          </div>
          <div className='contact__item'>
            <div className='contact__icon'>
              <img src={IC_PHONE} alt="" className="ic-footer"/>
            </div>
            <span className='contact__text'>{'+84 24 666666 84'}</span>
          </div>
        </div>

        <div className='language'>
          <div className='language__title'>{'Ngôn ngữ'}</div>
          <div className='language__item clearfix'>
            <img className='language__flag' src={FLAG_VN} alt={''}/>
            <img className='language__flag' src={FLAG_EN} alt={''}/>
            <img className='language__flag' src={FLAG_JAPAN} alt={''}/>
          </div>
        </div>
      </section>

      <section className='section-top-mobile'>
        <div className="block block-1">
          <img src={logo_blue}/>
          <div className="company-name-vi">CÔNG TY CỔ PHẦN QUẢN LÝ TÒA NHÀ VIỆT NAM</div>
          <div className="company-name-en">Vietnam Building Management.,JSC</div>
        </div>
        <div className="block block-2">
          <img src={IC_MAIL}/>
          <div className="title my-3">bm-v@gmail.com</div>
        </div>

        <div className="block block-3">
          <img src={GROUP_96}/>
          <div className="title my-3">Tầng 5 toà A1 toà nhà Ecolife Capital,<br/>số 58 Tố Hữu, Nam Từ Liêm, HN</div>
        </div>

        <div className="block block-4">
          <img src={IC_PHONE}/>
          <div className="title my-3">+84 24 666666 84</div>
        </div>

        <div className="block block-5">
          <div className="mb-3">Ngôn ngữ</div>
          <div>
            <img className='' src={FLAG_VN} alt={''}/>
            <img className='language__flag' src={FLAG_EN} alt={''}/>
            <img className='' src={FLAG_JAPAN} alt={''}/>
          </div>

        </div>

      </section>

      <section className="copyright">
        <div className="copyright__content">Copyright © 2020 bm-v. All rights reserved.</div>
      </section>
    </div>
  );
}

export default Footer;
