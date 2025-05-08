import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from './ConfirmacionAdicionales.module.css';

function ConfirmacionAdicionales() {
    const navigate = useNavigate();

    const handleSi = () => {
        navigate('/datos-adicionales');
    };

    const handleNo = () => {
        alert('Gracias por registrarse.'); // Mensaje de confirmación simple
        navigate('/'); // Redirigir al inicio o a donde desees
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h2>¿Desea actualizar o registrar los datos adicionales?</h2>
                <div className={styles.buttonGroup}>
                    <button onClick={handleSi} className={styles.siButton}>
                        Sí
                    </button>
                    <button onClick={handleNo} className={styles.noButton}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmacionAdicionales;