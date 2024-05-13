import styles from "../styles/pagesStyle/loginPage.module.css"
import logo from "../assets/images/logo.jpg"
import Image from 'next/image';

export default function LoginPage() {


    return (
        <>
        <div className={styles.container}>
        <div className={styles.background}></div>
        <Image src={logo} className={styles.logo} alt="Logo moviehub" />
        </div>
        </>
    )
    
}
