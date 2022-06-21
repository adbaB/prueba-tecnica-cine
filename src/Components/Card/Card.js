import React from 'react'

export const Card = ({title,image}) => {
  return (
    <div>
        <img width='250px' src={`https://image.tmdb.org/t/p/original${image}`} alt="title" />
        <p>{title}</p>
    </div>
  )
}
