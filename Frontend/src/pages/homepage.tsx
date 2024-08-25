import HeaderBar from "@/components/headerBar";
import NewMovie from "@/components/postMovie";
import ReqGetAllMoviesAndDelete from "@/components/reqGetDelMovies";

 function Home(){


    return (
        <>
        
        <HeaderBar />
        <ReqGetAllMoviesAndDelete />
        <NewMovie />
        </>
    )
}
export default Home;