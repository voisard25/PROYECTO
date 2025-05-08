import React from 'react';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import styles from './DashboardEmpresa.module.css';

function DashboardEmpresa() {
    return (
        <div className={styles.container}>
            <Header />
            <HamburgerMenu />
            <main className={styles.content}>
                <h1 className={styles.sauText}>SAU</h1>
            </main>
        </div>
    );
}

export default DashboardEmpresa;