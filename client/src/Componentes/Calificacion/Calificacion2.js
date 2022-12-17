import React, { useState} from 'react'
import { Rating } from 'react-simple-star-rating'

const number = 0;
const Calificacion = (props) => {
  const [rating, setRating] = useState(3)
  const {calificacion2} = props
  
  
  return (
    <div className=''>
      <Rating
        initialValue={calificacion2}
        onClick={function noRefCheck(){}}
        size = {20}
        readonly
        /* Available Props */
      />
    </div>
  )
}

export default Calificacion;