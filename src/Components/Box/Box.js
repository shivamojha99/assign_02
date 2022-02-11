import React from 'react';
import './Box.css'

function Box(props) {
  return <div>
      
      <div className="card">
      
      <img src={props.src} alt="Avatar"/>
      
      <div className="container">
       <h4><b>{props.title}</b></h4> 
      </div>

      </div>

  </div>;
}

export default Box;
