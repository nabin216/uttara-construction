import React from 'react'
import work from './WorkingStruct'
export default function plan() {
  return (
    <div  className="work-flex">
        {work.map((item)=>{
          return <>
          <div className="paln">
            <img src={item.image} alt="" id="bg" height={86} width={86}/>
            <div className="phead">{item.title}</div>
            <p className="ppara">{item.body}</p>
        </div>
          </>
        })}
        
    </div>
  )
}
