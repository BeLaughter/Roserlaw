import "./Body.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import body2 from "../assets/body2.jpg";
function Body() {
  return (
    <div
      id="simpleCarousel"
      className="carousel slide caro-height"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item  active">
          <img src={body2} className="d-block w-100 imgh " alt="Image 1"></img>
          <div className="boxy"></div>
          <div className="carousel-caption capcaro">
            <h5
              className="caroh5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Make A Brighter Future <br></br>For Your Child
            </h5>
            <p
              className="carop"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
            >
              Start A Brighter Future<br></br>For Your Child
            </p>
            <div className="flex">
              <a className="btn caroa" href="#learn">
                Learn More
              </a>
              <a className="btn caroa" href="#">
                Our Classes
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/04/14/27/write-8487618_640.jpg"
            className="d-block w-100 imgh"
            alt="Image 2"
          ></img>
          <div className="boxy"></div>
          <div className="carousel-caption capcaro">
            <h5 className="caroh5">
              The Best Kindergarten School<br></br>For Your Child
            </h5>
            <p className="carop">
              Experience perfect Learning at <br></br>Roserlaw, one of the best
              schools!
            </p>
            <div className="flex">
              <a className="btn caroa" href="#learn">
                Learn More
              </a>
              <a className="btn caroa" href="#">
                Our Classes
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Carousel Controls --> */}
      <button
        className="carousel-control-prev dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="prev"
      >
        <div className="flex">
          <div className="img-botton hiddenonmobile">
            <img
              src="https://cdn.pixabay.com/photo/2024/01/04/14/27/write-8487618_640.jpg"
              className="d-block w-100"
              alt="Image 2"
            ></img>
          </div>
          <div>
            <FaArrowLeft className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden ">Previous</span>
          </div>
        </div>
      </button>
      <button
        className="carousel-control-next dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="next"
      >
        <div className="flex">
          <div>
            <FaArrowRight className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </div>
          <div className="img-botton hiddenonmobile">
            <img src={body2} className="d-block w-100" alt="Image 1"></img>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Body;
