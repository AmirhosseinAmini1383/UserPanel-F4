import React from "react";
import GalleryIcon from "../../css/Icons/gallery.png";
import Counter from "./Counter";
const Gallery = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={GalleryIcon} alt="gallery" />
        <p>Manage Gallerys</p>
        <Counter />
      </div>
    </div>
  );
};
export default Gallery;
