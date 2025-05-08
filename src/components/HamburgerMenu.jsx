import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Cerrar el menú cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Cerrar el menú cuando cambia la ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className={styles.hamburgerMenu} ref={menuRef}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FaBars size={24} />
            </div>
            <div className={`${styles.menuItems} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li>
                        <Link to="/dashboard-empresa" className={styles.menuItem}>SAU</Link>
                    </li>
                    <li> <Link to="/registrar-oportunidad-pasantia" className={styles.menuItem}>Registrar Oportunidad de Pasantía</Link> </li>
                    <li>
                        <Link to="/" className={styles.menuItem}>Salir</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HamburgerMenu;