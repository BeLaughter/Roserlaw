import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import body2 from "../assets/body2.jpg";
import "./Body.css";

const images = [
  {
    src: body2,
    title: "Make A Brighter Future For Your Child",
    description: "Start A Brighter Future For Your Child",
  },
  {
    src: "https://cdn.pixabay.com/photo/2024/01/04/14/27/write-8487618_640.jpg",
    title: "The Best Kindergarten School For Your Child",
    description:
      "Experience perfect learning at Roserlaw, one of the best schools!",
  },
];

function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle previous and next slide updates
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="simpleCarousel"
      className="carousel slide caro-height"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={item.src}
              className="d-block w-100 imgh"
              alt={`Image ${index + 1}`}
            />
            <div className="boxy"></div>
            <div className="carousel-caption capcaro">
              <h5
                className="caroh5"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                {item.title}
              </h5>
              <p
                className="carop"
                data-aos="zoom-out-left"
                data-aos-duration="1500"
              >
                {item.description}
              </p>
              <div className="flex">
                <a className="btn caroa" href="#learn">
                  Learn More
                </a>
                <a className="btn caroa" href="#classes">
                  Our Classes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <div className="flex">
          <div className="img-botton hiddenonmobile">
            <img
              src={
                images[(currentIndex - 1 + images.length) % images.length].src
              }
              className="d-block w-100"
              alt="Previous Slide"
            />
          </div>
          <div>
            <FaArrowLeft className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </div>
        </div>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <div className="flex">
          <div>
            <FaArrowRight className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </div>
          <div className="img-botton hiddenonmobile">
            <img
              src={images[(currentIndex + 1) % images.length].src}
              className="d-block w-100"
              alt="Next Slide"
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Body;
