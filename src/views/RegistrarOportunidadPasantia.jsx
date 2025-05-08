import React, { useState } from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import HamburgerMenu from '../components/HamburgerMenu';
import styles from './RegistrarOportunidadPasantia.module.css';

function RegistrarOportunidadPasantia() {
    // Forma de la pasantía
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidadVacantes, setCantidadVacantes] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [duracion, setDuracion] = useState('');
    const [horasPorSemana, setHorasPorSemana] = useState('');
    const [modalidadPresencial, setModalidadPresencial] = useState(false);
    const [modalidadRemota, setModalidadRemota] = useState(false);
    const [modalidadMixta, setModalidadMixta] = useState(false);
    const [ubicacion, setUbicacion] = useState('');
    const [cargoReferente, setCargoReferente] = useState('');
    const [horariosEstimados, setHorariosEstimados] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [area, setArea] = useState('');

    // Requisitos de la pasantía
    const [carrerasAceptadas, setCarrerasAceptadas] = useState('');
    const [anioMinimoCursado, setAnioMinimoCursado] = useState('');
    const [habilidadesBlandas, setHabilidadesBlandas] = useState('');
    const [habilidadesTecnicas, setHabilidadesTecnicas] = useState('');
    const [experienciaPrevia, setExperienciaPrevia] = useState('');
    const [idiomasRequeridos, setIdiomasRequeridos] = useState('');
    const [tareasRealizar, setTareasRealizar] = useState('');
    const [remuneracion, setRemuneracion] = useState('');

    const handleRegistrarPasantia = () => {
        if (
            titulo.trim() === '' ||
            descripcion.trim() === '' ||
            cantidadVacantes.trim() === '' ||
            fechaInicio.trim() === '' ||
            duracion.trim() === '' ||
            horasPorSemana.trim() === '' ||
            ubicacion.trim() === '' ||
            cargoReferente.trim() === '' ||
            horariosEstimados.trim() === '' ||
            fechaFin.trim() === '' ||
            area.trim() === '' ||
            carrerasAceptadas.trim() === '' ||
            anioMinimoCursado.trim() === '' ||
            habilidadesBlandas.trim() === '' ||
            habilidadesTecnicas.trim() === '' ||
            experienciaPrevia.trim() === '' ||
            idiomasRequeridos.trim() === '' ||
            tareasRealizar.trim() === '' ||
            remuneracion.trim() === ''
        ) {
            alert('Por favor, completa todos los campos para registrar la pasantía.');
            return;
        }

        if (parseInt(cantidadVacantes) <= 0 || parseInt(horasPorSemana) <= 0) {
            alert('La cantidad de vacantes y las horas por semana deben ser números positivos.');
            return;
        }

        if (new Date(fechaInicio) >= new Date(fechaFin)) {
            alert('La fecha de inicio debe ser anterior a la fecha de fin.');
            return;
        }

        if (!modalidadPresencial && !modalidadRemota && !modalidadMixta) {
            alert('Debe seleccionar al menos una modalidad.');
            return;
        }

        const oportunidadPasantia = {
            // Forma de la pasantía
            titulo,
            descripcion,
            cantidadVacantes,
            fechaInicio,
            duracion,
            horasPorSemana,
            modalidad: {
                presencial: modalidadPresencial,
                remota: modalidadRemota,
                mixta: modalidadMixta
            },
            ubicacion,
            cargoReferente,
            horariosEstimados,
            fechaFin,
            area,
            // Requisitos de la pasantía
            carrerasAceptadas,
            anioMinimoCursado,
            habilidadesBlandas,
            habilidadesTecnicas,
            experienciaPrevia,
            idiomasRequeridos,
            tareasRealizar,
            remuneracion
        };

        console.log('Oportunidad de pasantía a registrar:', oportunidadPasantia);
        alert('Oportunidad de pasantía registrada/actualizada.');
        // Aquí iría la lógica para enviar los datos al servidor
    };

    return (
        <div className={styles.container}>
            <Header />
            <HamburgerMenu />
            <div className={styles.formContainer}>
                <h2>Registrar Oportunidad de Pasantía</h2>
                <form className={styles.twoColumnForm} onSubmit={(e) => { e.preventDefault(); handleRegistrarPasantia(); }}>
                    <div className={styles.column}>
                        <h3>Forma de la pasantía</h3>
                        <InputField 
                            label="Título del puesto / Nombre de la pasantía" 
                            type="text" 
                            name="titulo" 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                            required={true} 
                        />
                        <div className={styles.inputGroup}>
                            <label htmlFor="descripcion">Descripción general<span className={styles.required}>*</span></label>
                            <textarea
                                id="descripcion"
                                name="descripcion"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className={styles.textarea}
                                required
                            />
                        </div>
                        <InputField 
                            label="Cantidad de vacantes" 
                            type="number" 
                            name="cantidadVacantes" 
                            value={cantidadVacantes} 
                            onChange={(e) => setCantidadVacantes(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Fecha de inicio" 
                            type="date" 
                            name="fechaInicio" 
                            value={fechaInicio} 
                            onChange={(e) => setFechaInicio(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Fecha de fin" 
                            type="date" 
                            name="fechaFin" 
                            value={fechaFin} 
                            onChange={(e) => setFechaFin(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Duración (en semanas)" 
                            type="number" 
                            name="duracion" 
                            value={duracion} 
                            onChange={(e) => setDuracion(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Horas por semana" 
                            type="number" 
                            name="horasPorSemana" 
                            value={horasPorSemana} 
                            onChange={(e) => setHorasPorSemana(e.target.value)} 
                            required={true} 
                        />
                        <div className={styles.inputGroup}>
                            <label>Modalidad<span className={styles.required}>*</span></label>
                            <div className={styles.checkboxGroup}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={modalidadPresencial}
                                        onChange={(e) => setModalidadPresencial(e.target.checked)}
                                    />
                                    Presencial
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={modalidadRemota}
                                        onChange={(e) => setModalidadRemota(e.target.checked)}
                                    />
                                    Remota
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={modalidadMixta}
                                        onChange={(e) => setModalidadMixta(e.target.checked)}
                                    />
                                    Mixta
                                </label>
                            </div>
                        </div>
                        <InputField 
                            label="Ubicación" 
                            type="text" 
                            name="ubicacion" 
                            value={ubicacion} 
                            onChange={(e) => setUbicacion(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Cargo del referente" 
                            type="text" 
                            name="cargoReferente" 
                            value={cargoReferente} 
                            onChange={(e) => setCargoReferente(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Horarios estimados" 
                            type="text" 
                            name="horariosEstimados" 
                            value={horariosEstimados} 
                            onChange={(e) => setHorariosEstimados(e.target.value)} 
                            required={true} 
                        />
                    </div>
                    <div className={styles.column}>
                        <h3>Requisitos de la pasantía</h3>
                        <InputField 
                            label="Carreras aceptadas" 
                            type="text" 
                            name="carrerasAceptadas" 
                            value={carrerasAceptadas} 
                            onChange={(e) => setCarrerasAceptadas(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Año mínimo de cursado" 
                            type="number" 
                            name="anioMinimoCursado" 
                            value={anioMinimoCursado} 
                            onChange={(e) => setAnioMinimoCursado(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Habilidades blandas" 
                            type="text" 
                            name="habilidadesBlandas" 
                            value={habilidadesBlandas} 
                            onChange={(e) => setHabilidadesBlandas(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Habilidades técnicas" 
                            type="text" 
                            name="habilidadesTecnicas" 
                            value={habilidadesTecnicas} 
                            onChange={(e) => setHabilidadesTecnicas(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Experiencia previa" 
                            type="text" 
                            name="experienciaPrevia" 
                            value={experienciaPrevia} 
                            onChange={(e) => setExperienciaPrevia(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Idiomas requeridos" 
                            type="text" 
                            name="idiomasRequeridos" 
                            value={idiomasRequeridos} 
                            onChange={(e) => setIdiomasRequeridos(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Tareas a realizar" 
                            type="text" 
                            name="tareasRealizar" 
                            value={tareasRealizar} 
                            onChange={(e) => setTareasRealizar(e.target.value)} 
                            required={true} 
                        />
                        <InputField 
                            label="Remuneración" 
                            type="text" 
                            name="remuneracion" 
                            value={remuneracion} 
                            onChange={(e) => setRemuneracion(e.target.value)} 
                            required={true} 
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.submitButton}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrarOportunidadPasantia;