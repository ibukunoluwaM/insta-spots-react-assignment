import React, { useState } from "react";
import "./gallery.css";
import "./preview-card.css";


// Import images
import valThorens from "../Assets/images/Vals-Thorens.png";
import restaurantTerrace from "../Assets/images/Restaurant-Terrace.png";
import outdoorCafe from "../Assets/images/An-outdoor-cafe.png";
import longBridge from "../Assets/images/A-very-long-bridge-over-the-forest.png";
import tunnelMorningLight from "../Assets/images/Tunnel-with-the-morning-light.png";
import mountainHouse from "../Assets/images/Mountain-house.png";

const galleryImages = [
  {
    id: "valThorens",
    title: "Val Thorens",
    src: valThorens,
    description:
      "A ski town in the French Alps, known for its stunning slopes and vibrant après-ski scene.",
  },
  {
    id: "restaurantTerrace",
    title: "Restaurant terrace",
    src: restaurantTerrace,
    description:
      "A restaurant terrace dressed in green and yellow - an ambience of grandeur and elegance. A promise of fine dining and a good time.",
  },
  {
    id: "outdoorCafe",
    title: "An outdoor cafe",
    src: outdoorCafe,
    description:
      "An outdoor cafe buzzing softly with laughter and conversation. The perfect spot to unwind and savour the moment.",
  },
  {
    id: "longBridge",
    title: "A very long bridge, over the forest...",
    src: longBridge,
    description:
      "A very long bridge, suspended over the forest. Can you dare to cross it?",
  },
  {
    id: "tunnelMorningLight",
    title: "Tunnel with morning light",
    src: tunnelMorningLight,
    description:
      "Iron-framed glass walls, morning light spilling from their sides - glinting, scattering. A breathtaking sight.",
  },
  {
    id: "mountainHouse",
    title: "Mountain house",
    src: mountainHouse,
    description:
      "A mountain house shrouded in fog, surrounded by trees and of course mountains. Depending on your vibe, it could mean solitude. A cabin perfect for a getaway.",
  },
];

function Gallery() {
  const [openId, setOpenId] = useState(null);

  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (e, id) => {
    e.stopPropagation(); 
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id],  
    }));
  };


  return (
    <section className="gallery_container">
      <div className="gallery_grid">
        {galleryImages.map((item) => (
          <div className="gallery_image" key={item.id}>
            <img
              src={item.src}
              alt={item.title}
              className="img1"
              onClick={() => setOpenId(item.id)}
            />
            <div className="content">
              <p>{item.title}</p>
      <i
                className={likedItems[item.id] ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                style={{ color: likedItems[item.id] ? "red" : "#000", cursor: "pointer" }}
                onClick={(e) => toggleLike(e, item.id)}
              ></i>        </div>

            {openId === item.id && (
              <dialog open className="preview-dialog">
                <img src={item.src} alt={item.title} className="modal-img" />
                <p className="modal-title">{item.title}</p>
                <p className="modal-description">{item.description}</p>
                <button onClick={() => setOpenId(null)}>Close</button>
              </dialog>
            )}
          </div>
        ))}
      </div>
      <div className="thin-line"></div>
    </section>
  );
}

export default Gallery;
