import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import NavigationMenu from '../components/NavigationMenu';
import styles from './Login.module.css';

function Login() {
    const [tipoUsuario, setTipoUsuario] = useState('estudiante');
    const [legajo, setLegajo] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Detectar el tipo de usuario desde la URL al cargar el componente
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tipoParam = params.get('tipo');
        if (tipoParam && ['estudiante', 'empresa', 'administrador'].includes(tipoParam)) {
            setTipoUsuario(tipoParam);
        } else {
            // Si no hay parámetro o es inválido, intentar recuperar de localStorage
            const savedTipoUsuario = localStorage.getItem('tipoUsuario');
            if (savedTipoUsuario) {
                setTipoUsuario(savedTipoUsuario);
            }
        }
    }, [location]);

    const handleIngresar = () => {
        if (tipoUsuario === 'estudiante') {
            if (legajo.trim() === '' || password.trim() === '') {
                alert('Por favor, ingresa tu legajo y contraseña.');
                return;
            }
            console.log('Verificando legajo:', legajo, 'y contraseña:', password);
            navigate('/registro');
        } else if (tipoUsuario === 'empresa') {
            // Validar que el CUIT y contraseña sean obligatorios
            if (legajo.trim() === '') {
                alert('Por favor, ingresa el CUIT de la empresa.');
                return;
            }
            if (password.trim() === '') {
                alert('Por favor, ingresa la contraseña de la empresa.');
                return;
            }
            // Validar que el CUIT sea numérico
            if (!/^\d{11}$/.test(legajo)) {
                alert('El CUIT debe contener solo números y tener exactamente 11 dígitos.');
                return;
            }
            // Validar que el CUIT coincida con el registrado
            const cuitRegistrado = localStorage.getItem('cuit');
            if (legajo !== cuitRegistrado) {
                alert('El CUIT ingresado no coincide con el registrado.');
                return;
            }
            
            // Validar que la contraseña coincida con la registrada
            const passwordRegistrada = localStorage.getItem('password_' + legajo);
            if (!passwordRegistrada || password !== passwordRegistrada) {
                alert('Contraseña incorrecta.');
                return;
            }
            
            console.log('Verificando CUIT:', legajo, 'y contraseña:', password);
            navigate('/dashboard-empresa');
        } else if (tipoUsuario === 'administrador') {
            // Lógica para administrador (puedes agregarla después)
            alert('Funcionalidad de administrador aún no implementada.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.formContainer}>
                <h2>Iniciar Sesión</h2>
                <div className={styles.selectGroup}>
                    <label htmlFor="tipoUsuario">Tipo de Usuario</label>
                    <select
                        id="tipoUsuario"
                        value={tipoUsuario}
                        onChange={(e) => {
                        setTipoUsuario(e.target.value);
                        // Guardar la selección en localStorage
                        localStorage.setItem('tipoUsuario', e.target.value);
                    }}
                        className={styles.select}
                    >
                        <option value="estudiante">Estudiante</option>
                        <option value="empresa">Empresa</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <InputField
                    label={tipoUsuario === 'empresa' ? 'CUIT' : 'Legajo'}
                    type={tipoUsuario === 'empresa' ? 'text' : 'text'}
                    name="legajo"
                    value={legajo}
                    onChange={(e) => setLegajo(e.target.value)}
                    required={true}
                />
                <div className={styles.passwordInput}>
                    <InputField
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                    <button type="button" onClick={togglePasswordVisibility} className={styles.showPasswordButton}> {/* Remove text and keep only icon */} </button>
                </div>
                <button onClick={handleIngresar} className={styles.button}>
                    Ingresar
                </button>
                {tipoUsuario === 'empresa' && (
                    <div className={styles.empresaButtons}>
                        <div className={styles.registerLink}>
                            <Link to="/registrar-empresa">¿No tienes una cuenta? Registrarme</Link>
                        </div>
                        <Link to="/verificador-contrasena" className={styles.empresaButton}>Restablecer contraseña</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;