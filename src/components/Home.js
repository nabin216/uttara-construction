import React from "react";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Icard1 from "./Icard1";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import "flowbite";
import Worker from "./worker";

import PageProgress from "react-page-progress";

AOS.init();

export default function Home() {
  return (
    <div>
      <Nav />
      <PageProgress color={"blue"} height={5} />
      <div className="center" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h1 className="center__text glitch is-glitching">
          <div className="containerr">
            <div className="box">
              <div className="title">
                <span className="block"></span>
                <h1>Uttara Construction</h1>
              </div>
              <br></br>
              <div className="role">
                <div className="block"></div>
                <p>Architect and Construction</p>
              </div>
              <div className="getstart">
                <a href="#abouts" id="star">
                  Get Started{" "}
                </a>
              </div>
              <div
                className="tagline"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <p id="tag">Dream . Discuss . Design </p>
              </div>
            </div>
          </div>
        </h1>
      </div>

      <About />
      <Worker />
      <Card />
      <Icard1 />
      <Footer />
    </div>
  );
}
