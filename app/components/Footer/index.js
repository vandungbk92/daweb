import React from 'react';
import './Footer.css';
import imageFooter from '../../asset/Image/Group_106.jpg';
import logo_blue from '../../asset/Icon/Logo_blue.svg';
import IC_MAIL from '../../asset/Icon/IC_MAIL.svg';
import GROUP_96 from '../../asset/Icon/Group96.svg';
import IC_PHONE from '../../asset/Icon/ic_phone.svg';

import flag_en from '../../asset/Image/flag_en.jpg';
import flag_japan from '../../asset/Image/flag_japan.jpg';
import flag_vn from '../../asset/Image/flag_vn.jpg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='section-top'>
        <img src={imageFooter} alt="Snow" style={{ width: '100%' }}/>

        <img src={logo_blue} alt="Snow" className="logo-bmv"/>

        <span className='company-name-vi'>{'CÔNG TY CỔ PHẦN QUẢN LÝ TÒA NHÀ VIỆT NAM'}</span>
        <span className='company-name-en'>{'Vietnam Building Management.,JSC'}</span>

        <div className='contact-container'>
          <div className='contact__item'>
            <div className='contact__icon'>
              <img src={IC_MAIL} alt=""/>
            </div>
            <span className='contact__text'>{'bm-v@gmail.com'}</span>
          </div>
          <div className='contact__item'>
            <div className='contact__icon'>
              <img src={GROUP_96} alt=""/>
            </div>
            <span
              className='contact__text'>{'Tầng 5 toà A1 toà nhà Ecolife Capital, số 58 Tố Hữu, Nam Từ Liêm, HN'}</span>
          </div>
          <div className='contact__item'>
            <div className='contact__icon'>
              <img src={IC_PHONE} alt=""/>
            </div>
            <span className='contact__text'>{'+84 24 666666 84'}</span>
          </div>
        </div>

        <div className='language'>
          <div className='language__title'>{'Ngôn ngữ'}</div>
          <div className='language__item clearfix'>
            <img className='language__flag' src={flag_vn} alt={''}/>
            <img className='language__flag' src={flag_en} alt={''}/>
            <img className='language__flag' src={flag_japan} alt={''}/>
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
