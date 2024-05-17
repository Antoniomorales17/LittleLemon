import React, { useState } from 'react';
import reservation from "../../assets/reservation.png";
import logoDefault from "../../assets/logoDefault.png"
import { Link } from 'react-scroll';
import  Modal  from '../Modal/Modal'; // Asegúrate de importar el componente Modal desde su ubicación correcta
import "./Navbar.css";
import menu from "../../assets/menu.png"; // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    // Función para mostrar u ocultar el modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <nav className='navbar'>
            <img src={logoDefault} alt='Company Logo' className='companyLogo' />
            <div className='desktopMenu'> 
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={100} className='desktopMenuListItem'> Home</Link>
                <Link activeClass='active' to="menu" spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'> Menu</Link>
                <Link activeClass='active' to="popular" spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'>Popular </Link>
                <Link activeClass='active' to="reservation" spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'> Reservas</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'>Contacto </Link>
            </div>

            {/* Botón de reserva con evento onClick que llama a toggleModal */}
            <button className='desktopMenuBtn' onClick={toggleModal}>
                <img src={reservation} alt='' className='desktopMenuImg' /> Reserva
            </button>

            {/* Renderizamos el modal solo si showModal es true */}
            {showModal && <Modal setShowModal={setShowModal} />} 

            <img src={menu} alt='Logo' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}> Home</Link>
                <Link activeClass='active' to="menu" spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}> Menu</Link>
                <Link activeClass='active' to="popular" spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Popular </Link>
                <Link activeClass='active' to="reservation" spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}> Reservas</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Contacto </Link>
            </div>
        </nav>
    );
}

export default Navbar;
