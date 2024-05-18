import React from 'react';
import footerLogo from '../../assets/logoDefault.png';
import menuImage from '../../assets/menu.webp';
import './Footer.css'; // Asegúrate de que los estilos estén en este archivo

export default function Footer() {
  return (
    <section id='footer'>
    <footer>
      <menu>
        <li className="img-footer">
          <img src={footerLogo} alt="Company Logo"></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href={menuImage} target="_blank" rel="noreferrer">Menu</a>
            <a href="#reservations">Reservations</a>
            <a href="#order">Order</a>
            <a href="#login">Login</a>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Join us!</a>
          </ul>
        </li>
      </menu>
    </footer>
    </section>
  );
}
