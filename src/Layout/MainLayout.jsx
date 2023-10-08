import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Authentication/Authentication";
 
const MainLayout = () => {
    const {loading }=useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>;
      }
    return (
        <>
             
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;