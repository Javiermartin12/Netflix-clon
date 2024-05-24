import LoginPage from "./loginPage";
import style from "../styles/global.module.css"
import { Session, getSession } from '@auth0/nextjs-auth0';

async function MyApp() {
  const session: Session | null | undefined = await getSession()

  console.log(session)
    return (
      <div style={style}>
        <h1>Welcome to My Next.js App!</h1>
        <p>This is the home page.</p>
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  
  export default MyApp;