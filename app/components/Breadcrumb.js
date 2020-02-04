import React from 'react';
import { useHistory } from "react-router-dom";

function Breadcrumb({
                      breadcrumb,
                    }) {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  let xhtml = breadcrumb.map((data, i) => {
    return <div key={i} className="mr-4 breadcrumb-detail" onClick={() => handleClick(data.link)}>
      {data.dot && <span className="mr-4 breadcrumb-dot"></span>}
      {data.label}
    </div>
  })
  return (
    <div className="">
      <div className="col-md-12 breadcrumb-custom">
        {xhtml}
      </div>
    </div>
  );
}

export default Breadcrumb;
