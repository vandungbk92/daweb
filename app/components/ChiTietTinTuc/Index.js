import React from 'react';
import { useHistory } from "react-router-dom";
import Content from './Content';
import Sidebar from './Sidebar';

function Index() {

  return (
    <div className="chi-tiet-tin-tuc-page clearfix my-5">

      <Content />

      <Sidebar />

    </div>
  );
}

export default Index;
