import utnLogo from '../assets/utn_logo.png'; // Asegúrate de tener el logo en la carpeta 'assets'
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src={utnLogo} alt="Logo UTN" className={styles.logo} />
        </header>
    );
}

export default Header;