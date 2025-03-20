import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://cdn.pixabay.com/photo/2018/07/26/14/00/mentor-3563666_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/07/26/14/00/mentor-3563666_640.jpg",
  },
  {
    original:
      "https://cdn.pixabay.com/photo/2020/04/09/20/11/group-5022964_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/04/09/20/11/group-5022964_640.jpg",
  },
  {
    original:
      "https://cdn.pixabay.com/photo/2018/07/26/14/00/mentor-3563666_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/07/26/14/00/mentor-3563666_640.jpg",
  },
  {
    original:
      "https://cdn.pixabay.com/photo/2020/04/09/20/11/group-5022964_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/04/09/20/11/group-5022964_640.jpg",
  },
  {
    original:
      "https://cdn.pixabay.com/photo/2018/07/26/14/00/mentor-3563666_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/07/26/14/00/mentor-3563666_640.jpg",
  },
  {
    original:
      "https://cdn.pixabay.com/photo/2020/04/09/20/11/group-5022964_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/04/09/20/11/group-5022964_640.jpg",
  },
  {
    original:
      "https://cdn.pixabay.com/photo/2020/08/18/18/46/chemistry-teacher-5499052_640.jpg",
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/08/18/18/46/chemistry-teacher-5499052_640.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="text-dark title text-center">School Gallery</h1>
      <p className="text-center">
        Our Gallery containing memories of our students.
      </p>
      <ImageGallery items={images} additionalClass="custom-gallery" />
    </div>
  );
};

export default Gallery;
