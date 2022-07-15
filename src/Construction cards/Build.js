import React from 'react'
import build from "../assets/build.png"

export default function Build() {
  return (
    <div>
        <div className="paln">
            <img src={build} alt="" id="bg" height={86} width={86}/>
            <div className="phead">Building</div>
            <p className="ppara"> As soon as you have your plans in place, we start construction using durable, low-maintenance, environmentally friendly materials.</p>
        </div>
    </div>
  )
}
