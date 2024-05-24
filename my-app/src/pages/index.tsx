import LoginPage from "./loginPage";
import style from "../styles/global.module.css"
import HeaderBar from "@/components/headerBar";
// import { Session, getSession, } from '@auth0/nextjs-auth0';


//async
//const session: Session | null | undefined = await getSession()
  function MyApp() {


    return (
      <div style={style}>
        <HeaderBar/>
        <h1>Welcome to My Next.js App!</h1>
        <p>This is the home page.</p>
        {/* <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a> */}
      </div>
    );
  }
  
  export default MyApp;