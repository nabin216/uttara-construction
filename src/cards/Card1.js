import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/img1.png'
import CardInfo from './CardInfo';
AOS.init();
export default function Card1() {
  return (
    <div className="flexcard">
        {CardInfo.map((item)=>{
            return <>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img class="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div class="p-5">
                <a href="/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.body}</p>
                
            </div>
        </div>
        </>
        })}
        
    </div>
  )
}
