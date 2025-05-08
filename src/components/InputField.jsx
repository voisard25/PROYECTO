import styles from './InputField.module.css';

function InputField({ label, type, name, value, onChange, required }) {
    return (
        <div className={styles.inputGroup}>
            <label htmlFor={name}>{label}{required && <span className={styles.required}>*</span>}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
                required={required}
                // Eliminar las flechitas para inputs numéricos
                {...(type === 'number' && { inputMode: 'numeric', pattern: '[0-9]*' })}
            />
        </div>
    );
}

export default InputField;