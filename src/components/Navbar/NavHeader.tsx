import styles from '../../styles/Nav.module.css';
function NavHeader() {
    return (  
        <div className={styles.navhead}>
            <img className={styles.LOGO} src="../../TMULOGO.svg" alt="TMU Logo" />
            <div className={styles.line}></div>
        </div>
    );
}

export default NavHeader;