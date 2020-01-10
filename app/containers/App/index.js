import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';

export default function App() {
  return (
    <div className='container'>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application"/>
      </Helmet>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/features" component={FeaturePage}/>
        <Route path="" component={NotFoundPage}/>
      </Switch>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
}
