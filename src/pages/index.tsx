import Head from 'next/head'
import LoginBTN from '../components/Login/LoginBTN';
import TMULogo from '../components/Login//Logo';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    //router.push('/') //set path of 
    console.log("test")
  }
  return (
    <>
      <Head>
        <title>TMU REC | Login</title>
      </Head>
      <main>
        <div className={styles.main}>
          <div className={styles.leftSide}>
            <TMULogo />
          </div>
          
          <div className={styles.rightSide}>
            <LoginBTN router={handleLogin}/>
          </div>
        </div>
      </main>
    </>
  )
}
