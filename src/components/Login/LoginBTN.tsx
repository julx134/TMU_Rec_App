import styles from '../../styles/Login.module.css';

type ButtonProps = {
    router: () => void
}
function LoginBTN({router}: ButtonProps) {
    return (  
        <button className={styles.LoginBTN} onClick={router}>
            Login
        </button>
    );
}

export default LoginBTN;