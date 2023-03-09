
import styles from '../../styles/Login.module.css';
import TMULogo from './Logo';
 
function LoginPage() {
    const hello = () => {
        console.log("test")
    }
    return (  
        <>
            <div className={styles.main}>
                <div className={styles.leftSide}>
                    <TMULogo />
                </div>
                <div className={styles.rightSide}>
                    <button className="LoginBTN" onClick={hello}>
                       
                    </button>
                </div>
            </div>
        </>
    );
}

export default LoginPage;