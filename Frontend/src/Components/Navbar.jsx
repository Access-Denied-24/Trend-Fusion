import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar(){
  return (
    <>
      <nav>
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>HOME</Link>
        <Link to="/about" style={{color: 'white', textDecoration: 'none'}}>ABOUT</Link>
        <Link to="/products" style={{color: 'white', textDecoration: 'none'}}>PRODUCTS</Link>
        <Link style={{color: 'white', textDecoration: 'none'}}>LIMITED EDITION</Link>
        <Link style={{color: 'white', textDecoration: 'none'}}>SUPPORT</Link>
      </nav>
    </>

  );
}