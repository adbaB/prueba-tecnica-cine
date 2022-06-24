import React from 'react'

import { StarRating } from '../StarRating'
import './index.css'
export const Filters = ({setMovies}) => {
   
  return (
    <div className='filter_container'>
      <label className='label-rating' htmlFor="rating">Clasificación:</label>
      <StarRating />
    </div>
  )
}
