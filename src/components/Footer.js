import React from 'react'
import Count from '../Count'

export default function Footer() {
  return (
    <div>
        <div className="foot">
        <div className="footer">
            <div className="ftext">
                <p className="fp">
                    SHREERAM ARCHITECT AND CONSTRUCTION<br></br>We design your dreams!
                </p>
                <Count />
            </div>
            <div className="flink">
            <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                <div>
                <a href="/">Home</a>
                </div>
                <div>
                <a href="/Service">Services</a>
                </div>
                <div>
                <a href="http://">Instagram</a>
                </div>
                <div>
                <a href="http://">Facebook</a>
                </div>

            </div>
            <div className="addr">
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i>44, Opposit Dak Bunglow <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pipliya Mandi, Mandsaur(M.P)
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                yashfarkya@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> 8989-614-646
              </p>
              <p>
                <i className='fas fa-print me-3'></i> 8989-614-646
              </p>
            </div>
          
            </div>
        </div>
        </div>
    </div>
  )
}
