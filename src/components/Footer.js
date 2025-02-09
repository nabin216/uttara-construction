import React from 'react'
import Count from '../Count'

export default function Footer() {
  return (
    <div>
        <div className="foot">
        <div className="footer">
            <div className="ftext">
                <p className="fp">
                    UTTARA ARCHITECT AND CONSTRUCTION<br></br>We design your dreams!
                </p>
                <Count />
            </div>
            <div className="flink">
            <h6 className='text-uppercase fw-bold mb-4 text-lg font-bold'>Links</h6>
                <div>
                <a id='fleft' href="/">Home</a>
                </div>
                <div>
                <a id='fleft' href="/Service">Services</a>
                </div>
                <div>
                <a id='fleft' href="http://">Instagram</a>
                </div>
                <div>
                <a id='fleft' href="http://">Facebook</a>
                </div>

            </div>
            <div className="addr">
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-lg font-bold'>Contact</h6>
              <p>
                <i id='foothover' className='fas fa-home me-3'></i>House-17, Road-18, Sector-07<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uttara, Dhaka-1230, Bangladesh
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                <a id='foothover' href="constructionuttara@gmail.com">constructionuttara@gmail.com</a> 
              </p>
              <p>
                <i className='fas fa-phone me-3'></i>                      
                <a id='foothover' href="tel:+01630715744">+01630715744</a> 

              </p>
              <p>
                <i className='fas fa-print me-3'></i>                     
                 <a id='foothover' href="tel:+01630715744">+01630715744</a> 

              </p>
            </div>
          
            </div>
        </div>
        </div>
    </div>
  )
}
