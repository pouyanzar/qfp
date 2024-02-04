import React, { useEffect, useState } from "react";
const Slideshow = () => {
  let randomSlideIndex = Math.floor(Math.random(0, 1) * 2);
  const [slidesIndex, setSlidesIndex] = useState(0);
  const changeIndex = (slides) => {
    if (slidesIndex < slides.length - 1) {
      setSlidesIndex(slidesIndex + 1);
    } else {
      setSlidesIndex(slidesIndex - 1);
    }
  };

  let baseUrl = "/Assets/Images/slideshow/";
  let slides = [`${baseUrl}1.jpg`, `${baseUrl}2.jpg`];
  useEffect(() => {
    // setSlidesIndex(randomSlideIndex);
    // setTimeout(10000);
    setInterval(() => {
      setSlidesIndex(randomSlideIndex);
    }, 5000);
    console.log(randomSlideIndex);
  }, [randomSlideIndex]);

  return (
    <img className="slideshow" alt="slideshow" src={slides[slidesIndex]} />
  );
};

export default Slideshow;
