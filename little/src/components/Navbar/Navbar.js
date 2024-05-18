import React, { useState } from 'react';
import reservation from "../../assets/reservation.png";
import logoDefault from "../../assets/logoDefault.png";
import { Link } from 'react-scroll';
import Modal from '../Modal/Modal';
import "./Navbar.css";
import menu from "../../assets/menu.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Función para mostrar u ocultar el modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <nav className='navbar'>
            <div className='leftSection'>
                <img src={logoDefault} alt='Company Logo' className='companyLogo' />
            </div>
            <div className='desktopMenu'> 
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to="menu" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Menu</Link>
                <Link activeClass='active' to="popular" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Popular</Link>
                <Link activeClass='active' to="reservation" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Reservas</Link>
                <Link activeClass='active' to="footer" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contacto</Link>
            </div>

            {/* Botón de reserva como enlace que desplaza suavemente a la sección de reservas */}
            <Link to="reservation" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuBtn'>
                <img src={reservation} alt='' className='desktopMenuImg' /> Reserva
            </Link>

            {/* Renderizamos el modal solo si showModal es true */}
            {showModal && <Modal setShowModal={setShowModal} />} 

            <img src={menu} alt='Menu Icon' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to="menu" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Menu</Link>
                <Link activeClass='active' to="popular" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Popular</Link>
                <Link activeClass='active' to="reservation" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Reservas</Link>
                <Link activeClass='active' to="footer" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contacto</Link>
            </div>
        </nav>
    );
}

export default Navbar;
