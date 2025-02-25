import React, { useState, useEffect } from "react";
//import "./CarSlider.css"; 

const carImages = [
  "https://auto.goodfon.com/honda/wallpaper-car-honda-nsx.html",
  "https://auto.goodfon.com/lamborghini/wallpaper-lamborghini-centenario-roadster-lamborghini-centenario-2.html",
  "https://auto.goodfon.com/nissan/wallpaper-nissan-issan-370z-project-clubsport-23370z-z34-car-interior.html",
];

const CarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img src={carImages[currentIndex]} alt="Car" className="slider-image" />
    </div>
  );
};

export default CarSlider;
