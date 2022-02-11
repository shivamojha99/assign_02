import React from 'react';
import {json1} from '../../Images/apple'
import { connect } from "react-redux";
import Box from '../Box/Box';
import store from '../../Redux/store';
import Display from '../Display/Display';

 function Results(props) {

  const query=props.userInput

  let itemList=[]; 

  json1.map((obj)=>{
    for(let i in obj)
    {
        if(i==query)
        {
            obj[i].map((dish)=>{
                itemList.push(<Box src={dish.original} name={dish.title}/>)
            })
        }
    }
  })

  return <div>
      <Display itemList={itemList}/>
  </div>
}

const mapStateToProps =(state)=>{
    return{
        userInput : state.userInput
    }

}

export default connect (mapStateToProps)(Results)
