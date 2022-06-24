import React from 'react'
import { getImageMovie } from '../../Services/Movies'
import './index.css'
export const Card = ({title,image,setOpenModal,id,setMovieId}) => {
  const handlerClick = (e) =>{
    setOpenModal(true)
    setMovieId(id)
  }
  return (
    <section className='container-card' onClick={handlerClick}>
      <div className="card">

        <img width='250px' className='img-card' src={getImageMovie(image)} alt="title" />

        <p className='text-card'>{title}</p>
      </div>
    </section>
  )
}
 