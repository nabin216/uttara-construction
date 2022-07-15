import React from 'react'
import sketch from "../assets/sketch.png"
export default function plan() {
  return (
    <div>
        <div className="paln">
            <img src={sketch} alt="" id="bg" height={86} width={86}/>
            <div className="phead">Planning</div>
            <p className="ppara">To find the perfect location, we work with you and gain an understanding of your needs</p>
        </div>
    </div>
  )
}
