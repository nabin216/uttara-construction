import React from 'react'
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'
import Card3 from '../cards/Card3'

export default function Card() {
  return (
    <div>
        <div className="heading">Dreaming of the best home with innovative, sustainable <br></br> and budget friendly designs? This is your one way stop! <br></br> Take a look at it!</div>
        <div className="flexcard">
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
    </div>
  )
}
