import React from 'react';
import Slide from '../../components/VeChungToi/Slide';
import NoiDung from '../../components/VeChungToi/NoiDung';
import VeChungToiMobile from '../../components/VeChungToi/VeChungToiMobile';
import './VeChungToi.scss';

export default function VeChungToiPage() {
  return <div className="ve-chung-toi-page">
    <div className="ve-chung-toi-large">
      <Slide />
      <NoiDung />
    </div>

    <VeChungToiMobile />

  </div>

}
