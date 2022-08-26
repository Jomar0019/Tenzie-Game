import React from 'react'
import Die1 from './Die1'
import Die2 from './Die2'
import Die3 from './Die3'
import Die4 from './Die4'
import Die5 from './Die5'
import Die6 from './Die6'

const Dice = (props) => {
  return (
    <div onClick={props.pick} className={props.isPick ? 'bg-green-400 rounded-lg' : 'bg-white rounded-lg'}>
        {props.value === 1 && <Die1 />}
        {props.value === 2 && <Die2 />}
        {props.value === 3 && <Die3 />}
        {props.value === 4 && <Die4 />}
        {props.value === 5 && <Die5 />}
        {props.value === 6 && <Die6 />}
    </div>
  )
}

export default Dice