import React from 'react'
import '../Contact.css'
import Nav from './Nav';
// iconify icons
import { Icon } from '@iconify/react';
import Footer from './Footer';

function Contact(){
    return (
   
      <div id='contactsection'>
        <Nav />
        <div className="conflex">
            <div className="concontainer">
            {/* form */}
            <div className="conform">
                <h3 className="write">Write to us </h3> 
                <div className="formblock">
                <div className="name">
                <input type="text" name="" id="" placeholder='Name' />
                </div>
                <div className="emaill">
                <input type="email" name="" id="" placeholder='Email'/>
                </div>
                <div className="msgg">
                <textarea name="" id="" cols="35" rows="8" placeholder='Message'></textarea>
                </div>
                <div className="buttoncon">
                <button type="submit" value="Submit" id='button'>Submit</button>
                </div>
                </div>
            </div>
            {/* contact side */}
            <div className="leftside">
                <h3 className="contactus">Contact Us </h3>
                <div className="address">
                    <div className="conicons">
                    <Icon icon="entypo:address" id='conicon'/>
                    </div>
                    <div className="cotext">
                    44, Opposit Dak Bunglow 
                    Pipliya Mandi, Mandsaur(M.P)
                    </div>
                </div>
                <div className="eemail">
                    <div className="conicons">
                        <Icon icon="clarity:email-line" id='conicon'/>
                    </div>
                    <div className="con-text">
                    <a href="mailto:yashfarkya@gmail.com">Yashfarkya@gmail.com</a> 
                    </div>
                </div>
                <div className="phone">
                    <div className="conicons">
                        <Icon icon="bxs:phone-incoming" id='conicon' />
                    </div>
                    <div className="con-text">
                     <a href="tel:+91 8989-614-646">8989-614-646</a> 
                    </div>
                </div>
            </div>
            </div>
            </div>
            <Footer />
     </div>
    )
}
export default Contact;