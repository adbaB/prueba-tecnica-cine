import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FilterContext } from '../../Context/CineContext'
import './index.css'
export const StarRating = () => {
  const { setFilter } = useContext(FilterContext)
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const starArray = [
    { id: 0, max: 2 },
    { id: 1, max: 4 },
    { id: 2, max: 6 },
    { id: 3, max: 8 },
    { id: 4, max: 10 },
  ]
  const handlerClick = (ratingValue, max) => {
    setRating((prev) => {
      return prev === ratingValue ? null : ratingValue
    })
  }
  useEffect(() => {
    if (rating === null) {
      setHover(null)
      setFilter({ min: 0, max: 10 })
    } else {
      setFilter({
        min: starArray[rating - 1].max - 2,
        max: starArray[rating - 1].max,
      })
    }
    // eslint-disable-next-line
  }, [rating, setFilter])

  return (
    <div>
      {starArray.map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={star.id}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                handlerClick(ratingValue, star.max)
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#FFC107' : '#E4E5E9'}
              size={25}
              onMouseEnter={() => {
                setHover(ratingValue)
              }}
              onMouseLeave={() => {
                setHover(null)
              }}
            />
          </label>
        )
      })}
    </div>
  )
}
