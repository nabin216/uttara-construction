import React from 'react'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function Icard1() {
  return (
    <div>
      
<section class="text-gray-600 body-font " id='isec'>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-8 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl pt-5 font-medium title-font mb-2 text-gray-900">"The details are not the details. They make the design."</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Miniature details play an important role when designing a space for someone. Those particulars are what we emphasize and make your space HAPPY! Here are some stunning examples of our clients' living spaces.</p>
    </div>
    <center>
    <div class="flex flex-wrap -m-4 pb-10" id='flexint' data-aos="zoom-in">
      <div class="xl:w-full md:w-1/2 p-4" data-aos="zoom-in">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class=" rounded  object-cover object-center mb-6" id='interior' src={img4} height={400} alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Kitchen Design</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-full md:w-1/2 p-4" data-aos="zoom-in">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" id='interior' src={img5} height={400} width={400} alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Living Room</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-full md:w-1/2 p-4" data-aos="zoom-in">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" id='interior' src={img6} height={400} alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">A Couch</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="2xl:w-full md:w-1/2 p-4" data-aos="zoom-in">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" id='interior' src={img7} height={400} alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Drawing Room</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
    </center>
  </div>
</section>

    </div>
  )
}
