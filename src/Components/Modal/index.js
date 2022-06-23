import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
export const Modal = (props) => {
  return (
    ReactDOM.createPortal(
        <div className='backgroundModal'>
            {props.children}
        </div>,document.getElementById('modalContainer')
    )
  )
}
