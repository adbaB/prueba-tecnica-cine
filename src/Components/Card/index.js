import React from 'react'
import { getImageMovie } from '../../Services/Movies'
export const Card = ({title,image,setOpenModal,id,setMovieId}) => {
  const handlerClick = (e) =>{
    setOpenModal(true)
    setMovieId(id)
  }
  return (
    <section onClick={handlerClick}>
        <img width='250px' src={getImageMovie(image)} alt="title" />
        <p>{title}</p>
    </section>
  )
}
 