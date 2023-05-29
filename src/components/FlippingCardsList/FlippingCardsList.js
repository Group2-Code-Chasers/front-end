import React from 'react'
import FlippingCard from '../FlippingCard/FlippingCard';
import './FlippingCardsList.css';


 function FlippingCardsList(props) {
  return (
    <div className="card-grid">
      {props.flashcards.map(flippingCard => {
        return <FlippingCard flippingCard={flippingCard} key={flippingCard.id} />
      })}
    </div>
  )
}

export default FlippingCardsList;