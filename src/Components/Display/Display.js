import React from 'react';
import './Display.css'

function Display(props) {
  return <div className='container'>
      {props.itemList}
  </div>;
}

export default Display;
