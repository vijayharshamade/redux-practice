import React, { useState } from "react";
import "./carousel.css"; // Add basic styles
const Carousel = () => {
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow left">
        ←
      </button>

      <div className="slider-wrapper">
        <div className="slider">
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="arrow right">
        →
      </button>
    </div>
  );
};

export default Carousel;
