import styles from "../styles/pagesStyle/loginPage.module.css"
import logo from "../assets/images/logo.jpg"
import Image from 'next/image';
// import { UserProvider } from "@auth0/nextjs-auth0/client";
export default function LoginPage() {


    return (
        <>
        <div className={styles.container}>
        <div className={styles.background}></div>
        <Image src={logo} className={styles.logo} alt="Logo moviehub" />
        <a href="/api/auth/login">Login</a>
        
        </div>
        </>
    )
    
}
