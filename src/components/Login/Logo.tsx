import styles from '../../styles/Login.module.css';
import { Col, Space, Row } from 'antd';
function TMULogo() {
    return (  
        <div className={styles.LOGOContainer}>
            <Row justify='center'>
                <Col >
                    <Space align='center' size={39}>
                        <img className={styles.LOGO} src="../../TMULOGO.svg" alt="TMU Logo" />
                        <div className={styles.verticalLine}></div>
                        <img className={styles.RIMS} src="../../RIMS.png" alt="TMU Logo" />
                    </Space> 
                </Col>
                          
            </Row>
            <Row justify='start'>
                <Col offset={3}>
                    <p className={styles.desc}>
                        A web-based facility management
                        <br />
                        system designed for
                        <br />
                        Recreational Athletic Center staff members
                    </p>
                </Col>     
                     
            </Row>                            
        </div>
    );
}

export default TMULogo;