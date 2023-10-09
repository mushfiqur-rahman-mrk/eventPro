import { Link, NavLink } from "react-router-dom";
import logoimg from "../../../src/assets/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Authentication";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogout=()=>{
    logOut()
    .then(()=>{
      console.log('logged out successfully');
    })
    .catch(error=>console.log(error))
  }



  const navlinks=<>
  <li className="font-semibold text-md"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Home</NavLink></li>
  <li className="font-semibold text-md"><NavLink to="/services" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Services</NavLink></li>
  <li className="font-semibold text-md"><NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Contact Us</NavLink></li>
  
  {
    user && <><li className="font-semibold text-md"><NavLink to="/gallery" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Gallery</NavLink></li>
    <li className="font-semibold text-md"><NavLink to="/testimonial" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Testimonial</NavLink></li></>
  }

  </>
  return (
    <>
      <div className="navbar bg-base-100 shadow-md ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-300 rounded-box w-52"
            >
              {navlinks}
              
               
            </ul>
          </div>
          
          <img className="h-16" src={logoimg} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             
             {navlinks}
             
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <button onClick={handleLogout} className="px-5 text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600  hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl">Log Out</button>
            :
            <Link to={'/signup'}><button className="px-5 text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600  hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl">Sign Up</button></Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;


 