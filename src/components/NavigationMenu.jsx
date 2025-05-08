import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationMenu.module.css';

function NavigationMenu() {
    return (
        <div className={styles.hamburgerMenu}>
            <div className={styles.menuIcon}>|||</div>
            <div className={styles.menuItems}>
                <Link to="/sau" className={styles.menuItem}>SAU</Link>
                <Link to="/registrar-oportunidad-pasantia" className={styles.menuItem}>Registrar Oportunidad de Pasantía</Link>
            </div>
        </div>
    );
}

export default NavigationMenu;