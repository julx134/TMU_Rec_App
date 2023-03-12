import styles from '../../styles/Nav.module.css';
import {
    RightSquareOutlined
} from '@ant-design/icons';
function SignoutBTN() {
    return (  
        <div className={styles.signoutBTN}>
            <h2>Sign Out</h2>
            <div>
                <RightSquareOutlined />
            </div>
        </div>
    );
}

export default SignoutBTN;