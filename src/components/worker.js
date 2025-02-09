import React from "react";
import "./worker.css";
import workerImage from "../assets/worker.webp";

function Worker() {
  return (
    <div className="worker-container">
      <div className="worker-text">
        <h1>Skilled & Trained Workforce</h1>
        <p>
          The Backbone of Uttara Construction At Uttara Construction, we take
          pride in our team of highly trained and experienced workers who are
          the foundation of our success. Our workforce consists of certified
          engineers, skilled architects, expert masons, electricians, plumbers,
          carpenters, and heavy machinery operators—each dedicated to delivering
          excellence in every project. We ensure our team undergoes regular
          training on the latest construction techniques, safety protocols, and
          advanced technology to maintain the highest industry standards. Their
          expertise allows us to execute projects efficiently, ensuring
          structural integrity, durability, and precision in every construction
          endeavor. Our commitment to quality and safety is reinforced through
          strict adherence to workplace safety regulations, ensuring a secure
          and productive environment for both our workers and clients. With
          Uttara Construction, you can trust that your project is in the hands
          of skilled professionals who are dedicated to building a stronger,
          safer, and better future.
        </p>
      </div>
      <div className="worker-image">
        <img src={workerImage} alt="worker" className="worker" />
      </div>
    </div>
  );
}

export default Worker;
