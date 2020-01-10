import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import './Footer.css';
import imageFooter from '../../asset/Image/Group_106.jpg';
import logo_blue from '../../asset/Icon/Logo_blue.svg';
import ic_phone from '../../asset/Icon/ic_phone.svg';
import ic_location from '../../asset/Icon/ic_location.svg';
import ic_mail from '../../asset/Icon/ic_mail.svg';

import flag_en from '../../asset/Image/flag_en.jpg';
import flag_japan from '../../asset/Image/flag_japan.jpg';
import flag_vn from '../../asset/Image/flag_vn.jpg';

function Footer() {
  return (
    <Wrapper>
      <section className="a">
        <img src={imageFooter} alt="Snow" style={{ width: '100%' }} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            color: '#FFFFFF',
            width: '70%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: '100%',
            }}
          >
            <div>
              <img src={logo_blue} alt="Snow" className="logo_blue" />
              <div>CÔNG TY CỔ PHẦN QUẢN LÝ TÒA NHÀ VIỆT NAM</div>
              <div className="centered_1">Vietnam Building Management.,JSC</div>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <img src={ic_mail} alt="ic_mail" />
                <div style={{ color: '#FFFFFF' }}>bm-v@gmail.com</div>
              </div>
              <div>
                <img src={ic_location} alt="ic_location" />
                <div style={{ color: '#FFFFFF' }}>
                  Tầng 5 toà A1 toà nhà Ecolife Capital
                </div>
                <div style={{ color: '#FFFFFF' }}>
                  số 58 Tố Hữu, Nam Từ Liêm, HN
                </div>
              </div>
              <div>
                <img src={ic_phone} alt="ic_phone" />
                <div style={{ color: '#FFFFFF' }}>+84 24 666666 84</div>
              </div>
            </div>
            <div>
              <div style={{ color: '#FFFFFF' }}>Ngôn ngữ</div>
              <img src={flag_vn} alt="flag_vn" />
              <img src={flag_en} alt="flag_en" style={{ padding: '0 10px' }} />
              <img src={flag_japan} alt="flag_japan" />
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="b">Copyright © 2020 bm-v. All rights reserved.</div>
      </section>
    </Wrapper>
  );
}

export default Footer;
