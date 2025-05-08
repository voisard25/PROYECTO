import React, { useState } from 'react';
import Header from '../components/Header';
import styles from './DatosAdicionales.module.css';

function DatosAdicionales() {
    const [habilidadesTecnicas, setHabilidadesTecnicas] = useState('');
    const [habilidadesBlandas, setHabilidadesBlandas] = useState('');
    const [disponibilidadHoraria, setDisponibilidadHoraria] = useState('');
    const [experienciaPrevia, setExperienciaPrevia] = useState('');
    const [idiomas, setIdiomas] = useState('');
    const handleRegistrarActualizar = () => {
        if (
            habilidadesTecnicas.trim() === '' ||
            habilidadesBlandas.trim() === '' ||
            disponibilidadHoraria.trim() === '' ||
            experienciaPrevia.trim() === '' ||
            idiomas.trim() === ''
        ) {
            alert('Por favor, completa todos los campos.');
            return; // Detiene la ejecución si algún campo está vacío
        }
        
        // Aquí podrías guardar o actualizar estos datos adicionales
        const datosAdicionales = {
            habilidadesTecnicas,
            habilidadesBlandas,
            disponibilidadHoraria,
            experienciaPrevia,
            idiomas,
        };
        console.log('Datos adicionales:', datosAdicionales);
        alert('Datos adicionales registrados/actualizados.'); // Mensaje de confirmación simple
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.formContainer}>
                <h2>Datos Adicionales del Estudiante</h2>
                <div>
                    <label htmlFor="habilidadesTecnicas">Habilidades Técnicas</label>
                    <textarea
                        id="habilidadesTecnicas"
                        value={habilidadesTecnicas}
                        onChange={(e) => setHabilidadesTecnicas(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <div>
                    <label htmlFor="habilidadesBlandas">Habilidades Blandas</label>
                    <textarea
                        id="habilidadesBlandas"
                        value={habilidadesBlandas}
                        onChange={(e) => setHabilidadesBlandas(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <div>
                    <label htmlFor="disponibilidadHoraria">Disponibilidad Horaria</label>
                    <textarea
                        id="disponibilidadHoraria"
                        value={disponibilidadHoraria}
                        onChange={(e) => setDisponibilidadHoraria(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <div>
                    <label htmlFor="experienciaPrevia">Experiencia Previa</label>
                    <textarea
                        id="experienciaPrevia"
                        value={experienciaPrevia}
                        onChange={(e) => setExperienciaPrevia(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <div>
                    <label htmlFor="idiomas">Idiomas</label>
                    <textarea
                        id="idiomas"
                        value={idiomas}
                        onChange={(e) => setIdiomas(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <button onClick={handleRegistrarActualizar} className={styles.button}>
                    Registrar/Actualizar Datos
                </button>
            </div>
        </div>
    );
}

export default DatosAdicionales;