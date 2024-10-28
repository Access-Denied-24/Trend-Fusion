import { useState } from "react";
import { carousel } from "../../data/imageCarousel";
import styles from "./imageslider.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider({ images }){
  const [ imageIndex, setImageIndex ] = useState(0);

  function showPrevImage(){
    setImageIndex((index) => {
      if(index === 0) return images.length-1;
      return index-1;
    });
  }
  
  function showNextImage(){
    setImageIndex((index) => {
      if(index === images.length-1) return 0;
      return index+1;
    });
  }

  return (
    <>
      {/* <h1>Slider</h1> */}
      <div className={styles.sliderContainer}>
        <img src={images[imageIndex]} className={styles.imagesliderImg} />
        <button className={styles.arrowButton} style={{left: "0"}} onClick={showPrevImage}><ArrowBigLeft /> </button>

        <button className={styles.arrowButton} style={{right: "0"}} onClick={showNextImage}><ArrowBigRight /></button>

      </div>
      </>
  );
}