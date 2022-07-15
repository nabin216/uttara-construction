import React from 'react'
import Nav from './Nav'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
import Footer from './Footer'
import Plan from "../Construction cards/Plan"
import Design from '../Construction cards/Design'
import Build from '../Construction cards/Build'
import Finish from '../Construction cards/Finish'
import Stat1 from '../Construction cards/Stat1'
import Stat2 from '../Construction cards/Stat2'
import Stat3 from '../Construction cards/Stat3'
import Test1 from '../Construction cards/Test1'
import Test2 from '../Construction cards/Test2'

export default function Construct() {
  return (
    <div id='body'>
        <div className="const">
        <Nav />
        <div className="headc"> We’re help to build your <br></br> dream professionaly</div>
        </div>
       {/* how it works */}
       <div className="work">
          <h2 id='heh3'>Our Working Structure</h2>
          <div className="work-flex">
            <Plan />
            <Design />
            <Build />
            <Finish />
          </div>
          <div className="stat">Stats</div>
          <div className="stat-flex">
              <Stat1 />
              <Stat2 />
              <Stat3 />
          </div>
          <div className="stat">Testimonals</div>
          <div className="stat-flex">
              <Test1 />
              <Test2 />
          </div>
       </div>
        <div className="seccard">
            <p className="context">Take a glance at some <br></br>of the construction sites</p>
            {/* <h3>Construction of buildings or interior of house, whatever it is , Our Labour force makes it easy and affordable with punctuality in completing the project. </h3> */}
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
  <div id='cfoot'> <Footer /> 
    </div>
    </div>
   
    
  )
}

