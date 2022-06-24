import React from 'react'
import { InputFind } from '../InputFind'

import { StarRating } from '../StarRating'
import './index.css'
export const Filters = ({setMovies, setFilter}) => {
   
  return (
    <div className='filter_container'>
      <InputFind setMovies={setMovies}/>
      <StarRating setFilter ={setFilter}/>
    </div>
  )
}
