import React,{useState,ChangeEvent, useEffect} from 'react';
import './Search.css'
import { connect  } from 'react-redux';
import { useDispatch } from 'react-redux'
import {search_result} from '../../Redux/resultActions'
import Results from '../Result/Results';
import { useNavigate } from "react-router-dom"



function Search(props) {
    
    const [name, setName] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault();   
        navigate(`${name}`)
        dispatch(search_result(name))
    }
  

    const handleChange = e => setName(e.target.value)
   
    return(<div>
      <form onSubmit={handleSubmit} >
          <h1>{name}</h1>
      <input className='input' type='text' value={name} onChange={handleChange} ></input>
      </form>
      <br></br>
        
      
        
    </div>)
}

 
export default (Search)

