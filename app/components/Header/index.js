import React from 'react';

import ic_phone from '../../asset/Icon/ic_phone.svg';
import ic_location from '../../asset/Icon/ic_location.svg';
import ic_mail from '../../asset/Icon/ic_mail.svg';

import flag_en from '../../asset/Image/flag_en.jpg';
import flag_japan from '../../asset/Image/flag_japan.jpg';
import flag_vn from '../../asset/Image/flag_vn.jpg';

function Header() {
  return (
    <div style={{ width: '100%', height: '50px', background: '#00142B' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <div>
          <img src={ic_mail} alt="ic_mail" />
          <span>bm-v@gmail.com</span>
        </div>
        <div>
          <img src={ic_phone} alt="ic_mail" />
          <span>+84 24 666666 84</span>
        </div>
        <div>
          <img src={flag_vn} alt="flag_vn" />
          <img src={flag_en} alt="flag_en" style={{ padding: '0 10px' }} />
          <img src={flag_japan} alt="flag_japan" />
        </div>
      </div>
    </div>
  );
}

export default Header;
