import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import styles from './VerificadorContrasena.module.css';

function VerificadorContrasena() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [strengthClass, setStrengthClass] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    // Evaluar la fortaleza de la contraseña automáticamente cuando cambia
    useEffect(() => {
        evaluatePasswordStrength();
    }, [password]);

    // Función para evaluar la fortaleza de la contraseña
    const evaluatePasswordStrength = () => {
        if (password.length === 0) {
            setPasswordStrength('');
            setStrengthClass('');
            return;
        }

        // Verificar si tiene menos de 6 caracteres o solo letras minúsculas
        if (password.length < 6 || /^[a-z]+$/.test(password)) {
            setPasswordStrength('Poco segura');
            setStrengthClass(styles.weak);
            return;
        }

        // Verificar si tiene al menos 6 caracteres y combina letras y números
        if (password.length >= 6 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
            // Verificar si tiene más de 8 caracteres, mayúsculas, minúsculas, números y símbolos
            if (
                password.length > 8 &&
                /[A-Z]/.test(password) &&
                /[a-z]/.test(password) &&
                /[0-9]/.test(password) &&
                /[^A-Za-z0-9]/.test(password)
            ) {
                setPasswordStrength('Muy segura');
                setStrengthClass(styles.strong);
            } else {
                setPasswordStrength('Segura');
                setStrengthClass(styles.medium);
            }
            return;
        }

        setPasswordStrength('Poco segura');
        setStrengthClass(styles.weak);
    };

    // Función para generar una contraseña aleatoria segura
    const generateRandomPassword = () => {
        const length = 12; // Longitud de la contraseña
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
        let newPassword = '';
        
        // Asegurar que tenga al menos una mayúscula, una minúscula, un número y un símbolo
        newPassword += 'A'; // Mayúscula
        newPassword += 'a'; // Minúscula
        newPassword += '1'; // Número
        newPassword += '#'; // Símbolo
        
        // Generar el resto de caracteres aleatorios
        for (let i = 4; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }
        
        // Mezclar los caracteres para que no siempre empiece con los mismos
        newPassword = newPassword.split('').sort(() => 0.5 - Math.random()).join('');
        
        setPassword(newPassword);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.formContainer}>
                <h2>Verificador de Fortaleza de Contraseña</h2>
                <div className={styles.passwordContainer}>
                    <InputField
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} 
                        className={styles.toggleButton}
                    >
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                </div>
                
                {passwordStrength && (
                    <div className={`${styles.strengthIndicator} ${strengthClass}`}>
                        <p>Fortaleza: <span>{passwordStrength}</span></p>
                    </div>
                )}
                
                <div className={styles.buttonContainer}>
                    <button 
                        type="button" 
                        onClick={generateRandomPassword} 
                        className={styles.generateButton}
                    >
                        Generar Contraseña Segura
                    </button>
                </div>
                
                {successMessage && (
                    <div className={styles.successMessage}>
                        <p>{successMessage}</p>
                    </div>
                )}
                
                <div className={styles.buttonContainer}>
                    <button 
                        type="button" 
                        onClick={() => {
                            if (!password) {
                                alert('Por favor, ingrese una contraseña');
                                return;
                            }
                            
                            if (passwordStrength === 'Poco segura') {
                                if (!window.confirm('La contraseña es poco segura. ¿Desea continuar de todos modos?')) {
                                    return;
                                }
                            }
                            
                            // Guardar la contraseña en localStorage
                            const cuit = localStorage.getItem('cuit');
                            if (cuit) {
                                localStorage.setItem('password_' + cuit, password);
                                setSuccessMessage('Contraseña guardada exitosamente');
                                // Ya no redirigimos automáticamente
                            } else {
                                alert('Error: No se encontró el CUIT de la empresa');
                            }
                        }} 
                        className={styles.confirmButton}
                    >
                        Confirmar contraseña
                    </button>
                </div>
                
                <div className={styles.loginLink}>
                    <Link to="/?tipo=empresa">¿Estás registrado? Iniciá sesión</Link>
                </div>
            </div>
        </div>
    );
}

export default VerificadorContrasena;