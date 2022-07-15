import React from 'react'
import finish from "../assets/finish.png"
export default function Finish() {
  return (
    <div>
        <div className="paln">
            <img src={finish} alt="" id="bg" height={86} width={86}/>
            <div className="phead">Finish</div>
            <p className="ppara">To find the perfect location, we work with you and gain an understanding of your needs</p>
        </div>
    </div>
  )
}
