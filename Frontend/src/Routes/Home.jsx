import { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Gallery from '../Components/Gallery';
import Slider from '../Components/ImageSlider';
import { carousel } from '../../data/imageCarousel';
import ImageSlider from '../Components/ImageSlider';


export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if(isLoading){
    return <Loading />;
  }

  let imageUrls = [carousel.img]

  return (
    <div>
      <Header />
      <Navbar />
      <h1>Home Page</h1>

      <div style={{
        maxWidth: "1200px",
        width: "100%",
        // height: "500px",
        aspectRatio: "10/4",
        margin: "0 auto",
        backgroundColor: "grey",
      }}>
        <ImageSlider images={carousel.img} />
      </div>
      <Gallery />
    </div>
  );
}



// import Header from "./Header";
// import Loading from "./Loading";
// import Navbar from "./Navbar";

// export default function Home(){
//   return (
//     <>
//       <Header />
//       <Navbar />

//       <div>
//         Home page
//       </div>
//     </>
//   );
// }