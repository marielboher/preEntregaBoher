import React from 'react'
import './itemListContainer.css'


const ItemListContainer = ({greeting}) => {
  return (
    <div className="container">
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer;