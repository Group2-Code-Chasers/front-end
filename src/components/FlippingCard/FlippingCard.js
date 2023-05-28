import React, { useState, useEffect, useRef } from 'react'
import'./FlippingCard.css';

 function FlippingCard(props) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  useEffect(setMaxHeight, [props.flippingCard.question, props.flippingCard.answer, props.flippingCard.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div
      className={`cardflip ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {props.flippingCard.question}
        <div className="flashcard-options">
          {props.flippingCard.options.map(option => {
            return <div className="flashcard-option" key={option}>{option}</div>
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>{props.flippingCard.answer}</div>
    </div>
  )
}


export default FlippingCard ;