import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Authentication/Authentication";
import { BallTriangle } from "react-loader-spinner";
 
const MainLayout = () => {
    const {loading }=useContext(AuthContext)
    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#FFA500"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
        </div>
      }
    return (
        <>
             
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;