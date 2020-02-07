import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../containers/HomePage/Loadable';
import DichVuPage from '../../containers/DichVuPage/Loadable';
import VeSinhCongNghiepPage from '../../containers/VeSinhCongNghiepPage/Loadable';
import VeChungToiPage from '../../containers/VeChungToiPage/Loadable';
import ThuVienAnhPage from '../../containers/ThuVienAnhPage/Loadable';
import LienHePage from '../../containers/LienHePage/Loadable';
import TinTucPage from '../../containers/TinTucPage/Loadable';
import ChiTietTinTucPage from '../../containers/ChiTietTinTucPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import Footer from '../../components/Footer';

import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';

export default function App() {
  return (
    <div id='container'>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/dich-vu" component={DichVuPage}/>
        <Route path="/ve-sinh-cong-nghiep" component={VeSinhCongNghiepPage}/>
        <Route path="/ve-chung-toi" component={VeChungToiPage}/>
        <Route path="/thu-vien-anh" component={ThuVienAnhPage}/>
        <Route path="/lien-he" component={LienHePage}/>
        <Route path="/tin-tuc" component={TinTucPage}/>
        <Route path="/chi-tiet-tin-tuc" component={ChiTietTinTucPage}/>
        <Route path="" component={NotFoundPage}/>
      </Switch>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
}
