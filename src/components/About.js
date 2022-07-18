import React from 'react'
import profile from '../assets/profile21.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function About() {
  return (
    <div id='abouts'>
        <h2 className="heading" id='head'>Know About us</h2>
        <div className="flexhero">
    <div className="image" data-aos="zoom-in-right"
                    data-aos-duration="500">
        <img id= 'img' src={profile} alt=""  height={500}/>
        <center><h2 className="nam">Er. Yash Farkya</h2>
        <h3 id='h33'>Founder Chairman</h3></center>
    </div>
    <div className="text" data-aos="zoom-in-left"
                    data-aos-duration="500">
   <p className="para">
   The architect and builder, Mr. Yash Farkya, hails from the holy place of Lord Pashupatinath in Mandsaur. He is a delightful character with a graceful personality. Sgsits Indore awarded him a Bachelor of Engineering in Civil Engineering in 2021. His burning desire for plotting the dreams of others, eventually led him to open a construction company of his own. Encouraged by his family, he took the plunge into the world of Business. This approach is aimed at winning people's trust and delivering what they need. Shreeram Architecture and Construction is not just a Company, it's a sense of belonging and pride. Maps, construction, and even interior of the home are all handled by Mr. Yash on his own.
   </p>
   <div className="link">
   <a href="./Service" id='serv'>Services</a>
   </div>
    </div>
</div>
    </div>
  )
}
