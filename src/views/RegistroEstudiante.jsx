import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import NavigationMenu from '../components/NavigationMenu';
import styles from './RegistroEstudiante.module.css';

function RegistroEstudiante() {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [dni, setDni] = useState('');
    const [legajo, setLegajo] = useState('');
    const [genero, setGenero] = useState('');
    const [anioCursado, setAnioCursado] = useState('');
    const [promedio, setPromedio] = useState('');
    const [materiasAprobadas, setMateriasAprobadas] = useState('');
    const [materiasRegularizadas, setMateriasRegularizadas] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const navigate = useNavigate();

    const handleConfirmarDatos = () => {
        // Aquí podrías guardar los datos del estudiante en un estado global o enviarlos a una API
        const datosEstudiante = {
            nombreCompleto,
            dni,
            legajo,
            genero,
            anioCursado,
            promedio,
            materiasAprobadas,
            materiasRegularizadas,
            correoElectronico,
        };
        console.log('Datos del estudiante:', datosEstudiante);
        navigate('/confirmacion-adicionales');
    };

    return (
        <div className={styles.container}>
            <Header />
            <NavigationMenu />
            <div className={styles.formContainer}>
                <h2>Registro de Estudiante</h2>
                <InputField
                    label="Nombre Completo"
                    type="text"
                    name="nombreCompleto"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                />
                <InputField
                    label="DNI"
                    type="number"
                    name="dni"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                />
                <InputField
                    label="Legajo Universitario"
                    type="number"
                    name="legajo"
                    value={legajo}
                    onChange={(e) => setLegajo(e.target.value)}
                />
                <InputField
                    label="Género"
                    type="text"
                    name="genero"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                />
                <InputField
                    label="Año de Cursado"
                    type="number"
                    name="anioCursado"
                    value={anioCursado}
                    onChange={(e) => setAnioCursado(e.target.value)}
                />
                <InputField
                    label="Promedio"
                    type="number"
                    step="0.01"
                    name="promedio"
                    value={promedio}
                    onChange={(e) => setPromedio(e.target.value)}
                />
                <InputField
                    label="Materias Aprobadas"
                    type="number"
                    name="materiasAprobadas"
                    value={materiasAprobadas}
                    onChange={(e) => setMateriasAprobadas(e.target.value)}
                />
                <InputField
                    label="Materias Regularizadas"
                    type="number"
                    name="materiasRegularizadas"
                    value={materiasRegularizadas}
                    onChange={(e) => setMateriasRegularizadas(e.target.value)}
                />
                <InputField
                    label="Correo Electrónico"
                    type="email"
                    name="correoElectronico"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                />
                <button onClick={handleConfirmarDatos} className={styles.button}>
                    Confirmar datos
                </button>
            </div>
        </div>
    );
}

export default RegistroEstudiante;