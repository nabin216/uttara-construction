import React from "react";
import "../Contact.css";
import Nav from "./Nav";
// iconify icons
import { Icon } from "@iconify/react";
import Footer from "./Footer";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    {
      /* --- METHOD TO SEND THE MAIL --- */
    }
    send(
      "service_pp3bpkg",
      "template_839eo6i",
      toSend,
      "user_m0sMh3qvjp4HeTas3kAoH"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank You for your message 🤝");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contactsection">
      <Nav />
      <div className="conflex">
        <div className="concontainer">
          {/* form */}
          <div className="conform">
            <h3 className="write">Write to us </h3>
            <div className="formblock">
              <form onSubmit={onSubmit}>
                <div className="name">
                  <input
                    type="text"
                    name="from_name"
                    id=""
                    placeholder="Name"
                    value={toSend.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="emaill">
                  <input
                    type="email"
                    name="emailll"
                    id=""
                    placeholder="Email"
                    value={toSend.emailll}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="msgg">
                  <textarea
                    name="message"
                    id=""
                    cols="35"
                    rows="8"
                    placeholder="Message"
                    value={toSend.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="buttoncon">
                  <button type="submit" value="Submit" id="button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* contact side */}
          <div className="leftside">
            <h3 className="contactus">Contact Us </h3>
            <div className="address">
              <div className="conicons">
                <Icon icon="entypo:address" id="conicon" />
              </div>
              <div className="cotext">
                House-17, Road-18, Sector-07, Uttara Dhaka-1230, Bangladesh.
              </div>
            </div>
            <div className="eemail">
              <div className="conicons">
                <Icon icon="clarity:email-line" id="conicon" />
              </div>
              <div className="con-text">
                <a
                  href="mailto:constructionuttara@gmail.com
"
                >
                  constructionuttara@gmail.com
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="conicons">
                <Icon icon="bxs:phone-incoming" id="conicon" />
              </div>
              <div className="con-text">
                <a href="tel:+01630715744">+01630715744</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
