import style from "../styles/componentsStyles/headerBar.module.css"
import logo from "../assets/images/logo.jpg"
import Image from 'next/image';
import lupa from "../assets/images/lupablanca.png"


export default function HeaderBar(){


    return(
        <>
        <div className={style.headerContainer}>
            <Image src={logo} className={style.logo} alt="Logo moviehub" />
            <div className={style.navLinks}>
                <p>Home</p>
                <p>Series</p>
                <p>Movies</p>
            </div>
            <div className={style.endNavLinks}>
            <Image src={lupa} alt="Lupa" width={24} height={24} className={style.lupaBlanca} />
            </div>
         </div>
</>

    )
}   