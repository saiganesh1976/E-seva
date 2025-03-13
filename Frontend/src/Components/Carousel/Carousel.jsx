import React from "react";
import './Carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div key={num} className={`carousel-item ${num === 1 ? "active" : ""}`}>
            <img src={`/assets/Images/slide${num}.png`} className="d-block w-100 carousel-image" alt={`Slide ${num}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;