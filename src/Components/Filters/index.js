import React from 'react'
import { findMovies } from '../../Services/Movies'
import { StarRating } from '../StarRating'
import './index.css'
export const Filters = ({setMovies, setFilter}) => {
    const handlerInputChange = ( e)=>{
        console.log(e.target.value)
        findMovies(e.target.value).then (data => setMovies(data.results))
    }
  return (
    <div className='filter_container'>
      <div className='input_container'>
      <label htmlFor="find">Buscar: </label>
        <input type="text" id='find' name='find'  onChange={handlerInputChange} placeholder = 'find Movie...'/>
      </div>
      <StarRating setFilter ={setFilter}/>
    </div>
  )
}