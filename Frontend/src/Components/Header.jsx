import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useState, useEffect } from 'react';

function HandleInput(event){
  const inputElement = document.querySelector('.search-text');

  console.log(inputElement.value);
}



export default function Header(){
  const [cartQuantity, setCartQuantity] = useState(0);
  
  useEffect(() => {
    const newCartQuantity = 1;
    setCartQuantity(newCartQuantity);
  },[]);

  return (
  <>
  <div className={styles.header}>
    <Link to="/" style={{color: 'white', cursor: 'pointer', textDecoration:'none'}}>TREND FUSION</Link>
    {/* <Link to="/">TREND FUSION</Link> */}

    <div className={styles.searchBar}>
      <input type="text" className={styles.searchText} onKeyDown={() => {
        console.log(event.key);
      }}
      />

      <button onClick={() => {
        HandleInput(event);
      }} className={styles.searchButton}>
        <img className={styles.searchIcon} src="../public/search-icon.png" alt="" />
      </button>

    </div>

    <div className={styles.headerRightSide}>
      <Link to="/cart">
        <button className={styles.cartButton}>
          <img className={styles.cartIcon} src="../public/cart-icon.png" alt="" />
          <span className={styles.cartQuantity}>{cartQuantity}</span>
        </button>
      </Link>
      
      <Link to="/login">
        <img className={styles.userAvatar} src="../public/strtHoodie1.jpg" alt="User" />
      </Link>

    </div>

  </div>
  </>
  );
}