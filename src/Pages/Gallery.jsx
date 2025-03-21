import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
//image imports

import child1 from "../assets/child1.jpg";
import child2 from "../assets/child2.jpg";
import child3 from "../assets/child3.jpg";
import child4 from "../assets/child4.jpg";
import child5 from "../assets/child5.jpg";
import child6 from "../assets/child6.jpg";

import child7 from "../assets/child7.jpg";

import child8 from "../assets/child8.jpg";

import body2 from "../assets/body2.jpg";

const images = [
  {
    original: body2,
    thumbnail: body2,
  },
  {
    original: child8,
    thumbnail: child8,
  },
  {
    original: child7,
    thumbnail: child7,
  },
  {
    original: child6,
    thumbnail: child6,
  },
  {
    original: child5,
    thumbnail: child5,
  },
  {
    original: child4,
    thumbnail: child4,
  },
  {
    original: child3,
    thumbnail: child3,
  },
  {
    original: child2,
    thumbnail: child2,
  },
  {
    original: child1,
    thumbnail: child1,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="text-dark title text-center">School Gallery</h1>
      <p className="text-center">
        Our Gallery with memories of our students & teachers.
      </p>
      <ImageGallery items={images} additionalClass="custom-gallery" />
      <p className="text-center ptop">
        Return to home <Link to="/">HOME</Link>
      </p>
    </div>
  );
};

export default Gallery;
