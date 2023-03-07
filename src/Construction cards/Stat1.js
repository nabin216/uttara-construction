import React from 'react'
import stat from './StatsInfo'
export default function Stat1() {
  return (
    <div className="stat-flex">
      {stat.map((item)=>{
        return <>
        <div className="statc">
            <div className="s-num">{item.title}</div>
            <p className="stathead">{item.body} </p>
        </div>
        </>
      })}
          
    </div>
  )
}
