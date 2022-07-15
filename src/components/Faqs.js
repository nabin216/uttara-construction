import React from 'react'
import "../Faqs.css"
export default function Faqs() {
  return (
   
    <div className='faqsection'>

        <div className='faq'>
  <input id='faq-a' type='checkbox' />
  <label for='faq-a'>
    <p className="faq-heading">Is this Dropbox upgrade safe?</p>
    <div className='faq-arrow'></div>
      <p className="faq-text">It is completely safe and totally legal! There will is no record of this process to your shared Dropbox users.</p>
  </label>
  <input id='faq-b' type='checkbox' />
  <label for='faq-b'>
    <p className="faq-heading">How long does it take to upgrade my Dropbox?</p>
    <div className='faq-arrow'></div>
      <p className="faq-text">Upgrading is a slow process and will take around 3-10 days. <strong>In order to control the risk and secure the space you earned, we will gradually process it.</strong> during this time you can still use your account as normal as usual.</p>
  </label>
  <input id='faq-c' type='checkbox' />
  <label for='faq-c'>
    <p className="faq-heading">What do you need to do the upgrade?</p>
    <div className='faq-arrow'></div>
      <p className="faq-text">NO ACCESS TO YOUR PERSONAL ACCOUNT OR INFO IS REQUIRED! All I need from you is your Dropbox referral link.</p>
  </label>
  <input id='faq-d' type='checkbox' />
  <label for='faq-d'>
    <p className="faq-heading">Where do I find my personal Dropbox referral link?</p>
    <div className='faq-arrow'></div>
      <p className="faq-text">Log in to the Dropbox website and get your referral link: www.dropbox.com/referral. Copy the link (example link: <strong>https://db.tt/xYxYzyXy</strong>) and send it via eBay message. </p>
  </label>
  <input id='faq-e' type='checkbox' />
  <label for='faq-e'>
    <p className="faq-heading">Can I split the purchased space between several accounts?</p>
    <div className='faq-arrow'></div>
      <p className="faq-text">Yes, you can! Just send me all the referral links during the checkout process, including a short note, what account should receive which amount of space.</p>
  </label>
   </div>

    </div>
  
  )
}
