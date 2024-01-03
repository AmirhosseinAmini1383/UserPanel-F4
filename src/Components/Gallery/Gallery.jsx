import React from "react";
import GalleryIcon from "../../css/Icons/gallery.png";
import Counter from "./Counter";
import CounterIndex from "./CounterIndex";
const Gallery = () => {
  return (
    <div className="grid-temp">
      <div className="manage">
        <div>
          <img className="manage-icon" src={GalleryIcon} alt="gallery" />
          <p>Manage Gallerys</p>
          <Counter />
        </div>
      </div>
      <div className="bg-title">
        <CounterIndex />
      </div>
    </div>
  );
};
export default Gallery;
