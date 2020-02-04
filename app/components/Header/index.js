import React from 'react';
import IC_PHONE from '../../asset/Icon/ic_phone.svg';
import IC_MAIL from '../../asset/Icon/IC_MAIL.svg';
import MENU_BUTTON from '../../asset/Icon/menu-button.jpg';
import ARROW_DOWN from '../../asset/Icon/arrow_down.jpg';
import MENU_BORDER from '../../asset/Icon/menu-border.jpg';

import FLAG_EN from '../../asset/Image/flag_en.jpg';
import FLAG_JAPAN from '../../asset/Image/flag_japan.jpg';
import FLAG_VN from '../../asset/Image/flag_vn.jpg';

import Group_113 from '../../asset/Icon/Group_113.svg';
import global from '../../asset/Icon/global.svg';

import { useHistory } from 'react-router-dom';

function Header() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  function openNav() {
    $('html, body').animate({ scrollTop: 0 }, 0);
    let body = document.body;
    let jsMenuMobile = document.getElementById('js-menu-mobile');
    let jsMenuList = document.getElementById('js-menu-list');

    if (jsMenuMobile.className.includes('show')) {
      body.style.overflow = 'unset';
      jsMenuList.style.width = '0px';
    } else {
      body.style.overflow = 'hidden';
      jsMenuList.style.width = '323px';
    }
    document.getElementById('js-menu-mobile').classList.toggle('show');
  }


  function toggleMenuLanguage() {
    let jsLanguage = document.getElementById('js-language__list');
    let jsArrowDown = document.getElementById('js-img-arrow-down');
    if (jsLanguage.style.height) {
      jsLanguage.style.height = '';
      jsArrowDown.style.transform = '';
    } else {
      jsLanguage.style.height = '135px';
      jsArrowDown.style.transform = 'rotate(-180deg)';
    }
  }

  function checkClickInsideButtonLanguage(evt) {
    const elementCheckInside1 = document.getElementById('js-language-container');
    let jsLanguage = document.getElementById('js-language__list');
    let jsArrowDown = document.getElementById('js-img-arrow-down');

    if (jsLanguage.style.height) {
      let targetElement = evt.target; // clicked element
      let checkInside = false;

      do {
        if (targetElement === elementCheckInside1) checkInside = true;
        targetElement = targetElement.parentNode;
      } while (targetElement);

      if (!checkInside) {
        jsLanguage.style.height = '';
        jsArrowDown.style.transform = '';
      }
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', (e) => checkClickInsideButtonLanguage(e));

    return () => {
      document.removeEventListener('click', (e) => checkClickInsideButtonLanguage(e));
    };
  }, []);

  return (
    <div className="header">
      <div className="container-custom header-large">
        <div className="row mx-0">
          <ul className="nav align-items-center w-100 justify-content-end" style={{ height: '50px' }}>
            <li className="nav-item header__item">
              <img className='header__icon' src={IC_MAIL} alt=""/>
              <span className='header__text'>bm-v@gmail.com</span>
            </li>
            <li className="nav-item header__item" style={{ paddingRight: '85px' }}>
              <img className='header__icon' src={IC_PHONE} alt=""/>
              <span className='header__text'>+84 24 666666 84</span>
            </li>
            <li className="nav-item">
              <img src={FLAG_VN} alt="FLAG_VN" className="header__flag"/>
              <img src={FLAG_EN} alt="FLAG_EN" className="header__flag"/>
              <img src={FLAG_JAPAN} alt="FLAG_JAPAN" className="header__flag"/>
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
              className="h-100">
              <div style={{ cursor: 'pointer' }} onClick={() => handleClick('/')}>
                <img src={Group_113} alt="ic_mail"/>
              </div>
              <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <div className="menu-active menu-header" onClick={() => handleClick('/')}>
                  <span className="menu-text">Trang chủ</span>
                </div>
                <div className="menu-header">
                  <span className="menu-text" onClick={() => handleClick('/dich-vu')}>Dịch vụ</span>
                </div>
                <div className="menu-header">
                  <span className="menu-text" onClick={() => handleClick('/ve-chung-toi')}>Về chúng tôi</span>
                </div>
                <div className="menu-header">
                  <span className="menu-text" onClick={() => handleClick('/tin-tuc')}>Tin tức</span>
                </div>
                <div className="menu-header">
                  <span className="menu-text" onClick={() => handleClick('/thu-vien-anh')}>Thư viện ảnh</span>
                </div>
                <div className="menu-header menu-header-last" onClick={() => handleClick('/lien-he')}>
                  <span className="menu-text">Liên hệ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-content">
          <img src={MENU_BUTTON} onClick={() => openNav()} className='icon-menu' alt=''/>
          <img src={Group_113} className='icon-logo' alt=''/>
          <div id='js-language-container' className='language-container'>
            <div className='language' onClick={() => toggleMenuLanguage()}>
              <img src={global} className='img-language' alt=''/>
              <img src={ARROW_DOWN} id='js-img-arrow-down' className='img-arrow-down' alt=''/>
              <div id='js-language__list' className='language__list'>
                <div className='language__item'>
                  <img className='language__item--flag' src={FLAG_VN} alt=''/>
                  <div className='language__item--text'>{'Tiếng Việt'}</div>
                </div>
                <div className='language__item'>
                  <img className='language__item--flag' src={FLAG_EN} alt=''/>
                  <div className='language__item--text'>{'English'}</div>
                </div>
                <div className='language__item'>
                  <img className='language__item--flag' src={FLAG_JAPAN} alt=''/>
                  <div className='language__item--text'>{'Japanese'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='js-menu-mobile' className='menu-mobile'>
          <div className="header-mobile">
            <div className="header-content">
              <img src={MENU_BUTTON} onClick={() => openNav()} className='icon-menu' alt=''/>
              <img src={Group_113} className='icon-logo' alt=''/>
            </div>
          </div>
          <div id='js-menu-list' className='menu-list'>
            <div className='menu-item'><span className='content active'>{'Trang Chủ'}</span></div>
            <img src={MENU_BORDER} alt=''/>
            <div className='menu-item'><span className='content'>{'DỊCH VỤ'}</span></div>
            <img src={MENU_BORDER} alt=''/>
            <div className='menu-item'><span className='content'>{'VỀ CHÚNG TÔI'}</span></div>
            <img src={MENU_BORDER} alt=''/>
            <div className='menu-item'><span className='content'>{'TIN TỨC'}</span></div>
            <img src={MENU_BORDER} alt=''/>
            <div className='menu-item'><span className='content'>{'THƯ VIỆN ẢNH'}</span></div>
            <img src={MENU_BORDER} alt=''/>
            <div className='menu-item'><span className='content'>{'LIÊN HỆ'}</span></div>
            <img src={MENU_BORDER} alt=''/>
            <div className='menu-item'>
              <div className='content content__language'>
                {'Ngôn ngữ'}
              </div>
            </div>
            <div className='menu-item'>
              <div className='content content__language'>
                <div className='content__language-flag'>
                  <img className='language__item--flag' src={FLAG_VN} alt=''/>
                  <img className='language__item--flag' src={FLAG_EN} alt=''/>
                  <img className='language__item--flag' src={FLAG_JAPAN} alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
