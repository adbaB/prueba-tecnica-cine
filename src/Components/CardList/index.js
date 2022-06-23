import React from 'react'
import './index.css'
export const CardList = (props) => {
  return (
    <div className='cardsContainer'>
        {props.children}
    </div>
  )
}
