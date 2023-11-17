import React from "react";
import GalleryIcon from "../css/Icons/gallery.png";
const Gallery = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={GalleryIcon} alt="gallery" />
        <p>Manage Gallerys</p>
      </div>
    </div>
  );
};
export default Gallery;
