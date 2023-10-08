import { Link, NavLink, useLoaderData } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";
import Review from "./Review";
import WhyUs from "./WhyUs";
import BannerSlider from "../../Components/Header/BannerSlider";
import logoimg from "../../../src/assets/logo.png"
import NumberBar from "../../Components/NumberBar";

const Home = () => {
  const ServiceData = useLoaderData([]);
  const navlinks=<>
  <li className="font-semibold text-lg"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 bg-red-200" : ""}>Home</NavLink></li>
  <li className="font-semibold text-white text-lg"><NavLink to="/services" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 bg-red-200" : ""}>Services</NavLink></li>
  <li className="font-semibold text-lg"><NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 bg-red-200" : ""}>Contact Us</NavLink></li>
  </>

  return (
    <div className="font-poopins relative">
    <div className="sticky top-0 z-40">
    <div className="navbar absolute top-0 z-30 bg-black bg-opacity-20 shadow-md">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
              
               
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">{logoimg}</a> */}
          <img className="h-16" src={logoimg} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             
             {navlinks}
             
          </ul>
        </div>
        <div className="navbar-end">
        <Link to={'/signup'}><button className="btn">Sign Up</button></Link>
        </div>
      </div>
    </div>
      <BannerSlider></BannerSlider>
      <WhyUs></WhyUs>
      <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-4xl mb-10 font-bold text-center">Our Services</h1>
        <div >
          <div className="grid grid-cols-3 gap-5">
            {
                ServiceData.slice(0, 6).map((data) => (<HomeServiceCard data={data} key={data.id}></HomeServiceCard>))
            }
          </div>
          <div className="card-actions justify-center mt-10">
                <Link to={"/services"}>
                  <button className="bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-500 hover:text-black">
                    See All services
                  </button>
                </Link>
            </div>
        </div>
      </div>
      <NumberBar></NumberBar>      
      <Review></Review>
    </div>
  );
};

export default Home;
