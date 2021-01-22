import React from 'react'
import spinner from '../img/preloader.gif'

function Loading() {
  return (
    <div>
      <img className='spinner-img' src={spinner} alt='spinner' />
    </div>
  )
}

export default Loading
