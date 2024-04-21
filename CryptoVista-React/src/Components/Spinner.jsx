import React from 'react';
import './Spinner.css'

function Spinner() {
  return (
    <>
      <div>
        <div className="spinner"></div>
        Wait , Moment
      </div>

      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </>
  )
}

export default Spinner;
