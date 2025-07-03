import React from 'react'

const Rating = ({stars}) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`${index < stars ? "text-yellow-500" : "text-gray-300"} text-2xl`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating