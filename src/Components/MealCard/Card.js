import React from 'react'
import './Card.css'

const Card = ({item}) => {
    const {coverSrc,title,price,deliveryFee,serviceTime,rating}=item
  return (
    <div className='card-item'>
        <img  src={coverSrc}  alt={title}/>
        <header>
            <h4>{title}</h4>
            <span>⭐{rating}</span>
        </header>
        <footer>
            <p>{serviceTime} <span>Delivery Fee ${deliveryFee}</span></p>
            <p>Price: ${parseFloat(price)}</p>
        </footer>
        

    </div>
  )
}

export default Card