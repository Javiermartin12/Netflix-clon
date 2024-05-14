import style from "../styles/componentsStyles/headerBar.module.css"
import logo from "../assets/images/logo.jpg"
import Image from 'next/image';
import lupa from "../assets/images/lupablanca.png"
import notification from "../assets/images/notificacion (1).png"
import { useState } from "react";



export default function HeaderBar(){
    const [searchOpen, setSearchOpen] = useState(false)

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    }


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
            <Image src={notification} alt="notification" width={24} height={24} className={style.lupaBlanca} onClick={toggleSearch} />
            <div className={style.profile}></div>
            </div>
            {searchOpen && (
                <div className={style.searchBar}>
                    <input type="text" placeholder="Buscar..." />
                    </div>
            )}
         </div>
</>

    )
}   