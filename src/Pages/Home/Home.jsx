import { Link, NavLink, useLoaderData } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";
import Review from "./Review";
import WhyUs from "./WhyUs";
import BannerSlider from "../../Components/Header/BannerSlider";
import logoimg from "../../../src/assets/logo.png"
import NumberBar from "../../Components/NumberBar";
import "./home.css";

const Home = () => {
  const ServiceData = useLoaderData([]);
  const navlinks=<>
  <li className="font-semibold text-lg"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 bg-red-200" : ""}>Home</NavLink></li>
  <li className="font-semibold text-white text-lg"><NavLink to="/services" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 bg-red-200" : ""}>Services</NavLink></li>
  <li className="font-semibold text-lg"><NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 bg-red-200" : ""}>Contact Us</NavLink></li>
  </>

  return (
    <div className="font-poopins relative">
    <div className="relative z-10">
      <div>
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

      </div>
      <div className="custom-shape-divider-bottom-1696779889">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>






    </div>

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
