import React from "react";
import "./Gallery.css";

const images = [
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project1" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project1" },
  { src: " /assets/Images/gallery/pic2.jpg", alt: "Project2" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project3" },
  { src: " /assets/Images/gallery/pic2.jpg", alt: "Project4" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project1" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project1" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project1" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project1" },
  { src: " /assets/Images/gallery/pic2.jpg", alt: "Project2" },
  { src: " /assets/Images/gallery/pic1.webp", alt: "Project3" },
  { src: " /assets/Images/gallery/pic2.jpg", alt: "Project4" },
];

const Gallery = () => {
  return (
    <div className="wrapper-section">
      <div className="title">
        <h1>Our Gallery</h1>
      </div>
      <div className="gallery-section">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image.src} className="card-img" alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;