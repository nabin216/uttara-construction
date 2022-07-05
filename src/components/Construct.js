import React from 'react'
import Nav from './Nav'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
import Footer from './Footer'

export default function Construct() {
  return (
    <div id='body'>
        <div className="const">
        <Nav />
        </div>
        <div className="seccard">
            <p className="context">Take a glance at some of the construction sites</p>
            <h3>Construction of buildings or interior of house, whatever it is , Our Labour force makes it easy and affordable with punctuality in completing the project. </h3>
  <div class="box">
      <div class="card">
        <div class="imgBx">
        <video src={video1} controls></video>

        </div>
        <div class="details">
            <h2>New Project<br /><span>Er. Yash</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
         <video src={video2} controls></video>

         </div>
         <div class="details">
            <h2>3D Kitchen Design<br /><span>Er. Yash</span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
         <video src={video3} controls></video>

         </div>
         <div class="details">
            <h2>Slab Casting<br /><span>Er. Yash</span></h2>
          </div>
       </div>
 
  </div>
  </div>
     <Footer />  
    </div>
  )
}

