import React from "react";
import profile from "../assets/Tools-16.jpg";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();
export default function About() {
  return (
    <div id="abouts">
      <h2 className="heading" id="head">
        Know About us
      </h2>
      <div className="flexhero">
        <div className="image" data-aos="zoom-in-right" data-aos-duration="500">
          <img id="img" src={profile} alt="" height={500} />
          <center>
            {/* <h2 className="nam">Er. Yash Farkya</h2> */}
            <h3 id="h33">Uttara Construction</h3>
          </center>
        </div>
        <div className="text" style={{ textAlign: "justify", padding: "20px", fontFamily: "Arial" }}>
          <p className="para">
            Welcome to Uttara Construction, your trusted partner in building
            excellence. Located in the heart of Uttara, Dhaka, we are a leading
            construction company committed to delivering high-quality,
            innovative, and sustainable building solutions. With years of
            industry expertise, we specialize in residential, commercial, and
            industrial construction, ensuring that every project meets the
            highest standards of quality, safety, and efficiency. Our team of
            skilled engineers, architects, and project managers work
            collaboratively to bring your vision to life, using the latest
            technology and best practices in the construction industry. At
            Uttara Construction, we prioritize client satisfaction, timely
            project delivery, and cost-effective solutions. Whether it's
            designing modern homes, constructing high-rise buildings, or
            developing infrastructure projects, we are dedicated to excellence
            in every detail. Let us build your future—strong, reliable, and
            sustainable.
          </p>
          <div className="link">
            <a href="./Service" id="serv">
              Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
