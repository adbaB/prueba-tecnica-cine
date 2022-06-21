import React from 'react'
import { Card } from '../Card/Card'

export const Container = ({movies}) => {
  return (
    <div>
            {
                movies.movies.map((movie) => (<Card key= {movie.id} title = {movie.original_title} image = {movie.poster_path}/>))
            }
    </div>
  )
}
