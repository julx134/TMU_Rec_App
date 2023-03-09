import styles from '../../styles/Login.module.css';
function TMULogo() {
    return (  
        <div className={styles.LOGOContainer}>
            <img className={styles.LOGO} src="../../TMULOGO.svg" alt="TMU Logo" />
            <div className={styles.verticalLine}></div>
            <img className={styles.RIMS} src="../../RIMS.png" alt="TMU Logo" />
        </div>
    );
}

export default TMULogo;