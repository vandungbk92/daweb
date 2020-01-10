import React from 'react';
import IC_PHONE from '../../asset/Icon/ic_phone.svg';
import IC_MAIL from '../../asset/Icon/IC_MAIL.svg';
import FLAG_EN from '../../asset/Image/flag_en.jpg';
import FLAG_JAPAN from '../../asset/Image/flag_japan.jpg';
import FLAG_VN from '../../asset/Image/flag_vn.jpg';

function Header() {
  return (
    <div className='header'>
      <div className='header__item'>
        <img className='header__icon' src={IC_MAIL} alt=""/>
        <span className='header__text'>bm-v@gmail.com</span>
      </div>
      <div className='header__item'>
        <img className='header__icon' src={IC_PHONE} alt=""/>
        <span className='header__text'>+84 24 666666 84</span>
      </div>
      <div>
        <img className='header__flag' src={FLAG_VN} alt="FLAG_VN"/>
        <img className='header__flag' src={FLAG_EN} alt="FLAG_EN"/>
        <img className='header__flag' src={FLAG_JAPAN} alt="FLAG_JAPAN"/>
      </div>
    </div>
  );
}

export default Header;
