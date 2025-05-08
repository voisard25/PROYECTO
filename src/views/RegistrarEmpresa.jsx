import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import styles from './RegistrarEmpresa.module.css';
import utnLogo from '../assets/utn_logo.png';

function RegistrarEmpresa() {
    const [formData, setFormData] = useState({
        cuit: '',
        razonSocial: '',
        email: '',
        domicilioLegal: '',
        rubro: '',
        telefono: '',
        nombreReferente: '',
        cargoReferente: '',
        ubicacionTrabajo: '',
        sitioWeb: '',
        redesSociales: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar campos obligatorios
        const camposObligatorios = [
            'cuit', 'razonSocial', 'email', 'domicilioLegal', 
            'rubro', 'telefono', 'nombreReferente', 'cargoReferente', 'ubicacionTrabajo'
        ];
        
        const camposFaltantes = camposObligatorios.filter(campo => !formData[campo]);
        
        if (camposFaltantes.length > 0) {
            alert(`Por favor, complete los siguientes campos obligatorios: ${camposFaltantes.join(', ')}`);
            return;
        }
        
        // Validar formato de CUIT
        const cuitRegex = /^\d{11}$/;
        if (!cuitRegex.test(formData.cuit)) {
            alert('El CUIT debe contener exactamente 11 dígitos numéricos');
            return;
        }
    
        // Validar formato de teléfono
        const telefonoRegex = /^\d+$/;
        if (!telefonoRegex.test(formData.telefono)) {
            alert('El Teléfono de Contacto debe contener solo números');
            return;
        }
    
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, ingrese un correo electrónico válido');
            return;
        }
        
        console.log('Datos del formulario:', formData);
        alert('Formulario enviado correctamente');
        // Aquí se podría implementar la lógica para enviar los datos al backend
        localStorage.setItem('cuit', formData.cuit);
        // Guardar el tipo de usuario como 'empresa' en localStorage
        localStorage.setItem('tipoUsuario', 'empresa');
        navigate('/verificador-contrasena'); // Redireccionar al verificador de contraseñas
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={utnLogo} alt="Logo UTN" className={styles.logo} />
            </div>
            
            <h2 className={styles.title}>REGISTRAR EMPRESA</h2>
            
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <InputField
                            label="CUIT"
                            type="text"
                            name="cuit"
                            value={formData.cuit}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Razón Social"
                            type="text"
                            name="razonSocial"
                            value={formData.razonSocial}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Correo Electrónico"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Domicilio Legal"
                            type="text"
                            name="domicilioLegal"
                            value={formData.domicilioLegal}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Rubro"
                            type="text"
                            name="rubro"
                            value={formData.rubro}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Teléfono de Contacto"
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Nombre del Referente Responsable"
                            type="text"
                            name="nombreReferente"
                            value={formData.nombreReferente}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Cargo del Referente"
                            type="text"
                            name="cargoReferente"
                            value={formData.cargoReferente}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Ubicación de Trabajo"
                            type="text"
                            name="ubicacionTrabajo"
                            value={formData.ubicacionTrabajo}
                            onChange={handleChange}
                            required={true}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <InputField
                            label="Sitio Web (opcional)"
                            type="url"
                            name="sitioWeb"
                            value={formData.sitioWeb}
                            onChange={handleChange}
                            required={false}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="redesSociales">Redes Sociales (si las tuviera)</label>
                        <textarea
                            id="redesSociales"
                            name="redesSociales"
                            value={formData.redesSociales}
                            onChange={handleChange}
                            className={styles.textarea}
                        />
                    </div>
                    
                    <button type="submit" className={styles.button}>
                        VERIFICAR SAU
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarEmpresa;