import React from 'react';
import IC_PHONE from '../../asset/Icon/ic_phone.svg';
import IC_MAIL from '../../asset/Icon/IC_MAIL.svg';
import FLAG_EN from '../../asset/Image/flag_en.jpg';
import FLAG_JAPAN from '../../asset/Image/flag_japan.jpg';
import FLAG_VN from '../../asset/Image/flag_vn.jpg';
import Group_113 from '../../asset/Icon/Group_113.svg';
import global from '../../asset/Icon/global.svg';
import { useHistory } from "react-router-dom";

function Header() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  function openNav() {
    console.log('111111')
    // document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    console.log('111111')
    // document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className="header">
      <div className="container-custom header-large">
        <div className="row mx-0">
          <ul className="nav align-items-center w-100 justify-content-end" style={{ height: '50px' }}>
            <li className="nav-item header__item">
              <img className='header__icon' src={IC_MAIL} alt=""/>
              <span className='header__text'>bm-v@gmail.com</span>
            </li>
            <li className="nav-item header__item" style={{paddingRight: '85px'}}>
              <img className='header__icon' src={IC_PHONE} alt=""/>
              <span className='header__text'>+84 24 666666 84</span>
            </li>
            <li className="nav-item">
              <img src={FLAG_VN} alt="FLAG_VN" className="header__flag" />
              <img src={FLAG_EN} alt="FLAG_EN" className="header__flag" />
              <img src={FLAG_JAPAN} alt="FLAG_JAPAN" className="header__flag" />
            </li>
          </ul>

          <div className="w-100 menu-header-top">
            <div
              style={{
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, .2)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              className="h-100"
            >
              <div style={{cursor: 'pointer' }} onClick={() => handleClick('/')}>
                <img src={Group_113} alt="ic_mail" />
              </div>
              <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <div className="menu-active menu-header" onClick={() => handleClick('/')}><span className="menu-text">Trang chủ</span></div>
                <div className="menu-header"><span className="menu-text" onClick={() => handleClick('/dich-vu')}>Dịch vụ</span></div>
                <div className="menu-header"><span className="menu-text" onClick={() => handleClick('/ve-chung-toi')}>Về chúng tôi</span></div>
                <div className="menu-header"><span className="menu-text" onClick={() => handleClick('/tin-tuc')}>Tin tức</span></div>
                <div className="menu-header"><span className="menu-text" onClick={() => handleClick('/thu-vien-anh')}>Thư viện ảnh</span></div>
                <div className="menu-header menu-header-last" onClick={() => handleClick('/lien-he')}><span className="menu-text">Liên hệ</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container-custom header-mobile">
        <div className="header-content">

          {/*<div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>*/}

          <img src={IC_MAIL} onClick={() => openNav()}/>
          <img src={Group_113} />
          <div className="language">
            <img src={global} className="img-language"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
