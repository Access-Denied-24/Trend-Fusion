import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import { products } from "../../../data/products";
import styles from "./products.module.css";
import { useState, useEffect } from "react";
// import { cartQuantity } from "../../../data/cartQuant"; 



const addToCart = () => {
  setCartQuantity(prevQuant => prevQuant + 1);
};

export default function ProductsList(){

  const [cartQuantity, setCartQuantity] = useState(0);
  
  useEffect(() => {
    const newCartQuantity = 1;
    setCartQuantity(newCartQuantity);
  },[]);
  // function displayAddToCart(){
  //   const addElement = document.querySelector('.addedToCartMsg').innerText;


  // }

  return (
    <>
      <Header />
      <Navbar />

      <div className={styles.cardContainer}>
        {products.map((item) => (
          <div key={item.id} className={styles.singleCard}>
            <div className={styles.cardImg}>
              <img src="../../public/strtHoodie1.jpg" alt="" />
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <div>{item.artistStory}</div>
          </div>
          <div className={styles.buttons}>
            <p className={styles.addedToCartMsg}></p>
            <button className={styles.addtocartButton} onClick={() => {
              addToCart();
            }}>Add To Cart</button>
            {/* <button className={styles.buyButton}>Buy</button> */}
          </div>

          <img className={styles.wishlistIcon} src="../../public/wishlist-icon2.png" alt="" />

          {/* <img className={styles.sustBadge} src="../../public/sustbg5.jpg" alt="" /> */}
          
        </div>
        ))}
      </div>
    </>
  );
}