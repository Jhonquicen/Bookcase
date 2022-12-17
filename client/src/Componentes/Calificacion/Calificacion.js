import React, { useState} from 'react'
import { Rating } from 'react-simple-star-rating'

const number = 0;
const Calificacion = (props) => {
  const [rating, setRating] = useState(0)
  const {calificacion, setCalificacion} = props
  

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    setCalificacion(rate)
    console.log(rating)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)

  return (
    <div className=''>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        showTooltip
        size = {30}
        fillColorArray={[
            '#f14f45',
            '#f16c45',
            '#f18845',
            '#f1b345',
            '#f1d045'
          ]}
        tooltipArray={[
            'Malo',
            'Regular',
            'Medio',
            'Bueno',
            'Excelente'
          ]}
        /* Available Props */
      />
    </div>
  )
}

export default Calificacion;