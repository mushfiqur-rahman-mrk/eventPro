import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
     <div className="relative bg-gradient-to-r from-orange-500 to-red-500 flex justify-center items-center">
     <footer className="grid grid-cols-1 md:grid-cols-4 w-full justify-center items-center pt-20 pb-10 ">
        <div>
           <img className="w-40 mx-auto" src="/src/assets/logo2.png" alt="" />
           
        </div>
        <nav className="flex flex-col items-center">
          <header className="font-semibold text-lg text-white">Services</header>
          <ul>
            <li><a className="link link-hover">Branding</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Marketing</a></li>
          </ul>
        </nav>
        <nav className="flex flex-col items-center">
          <header className="font-semibold text-lg text-white">Company</header>
          <ul>
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
             
          </ul>
        </nav>

        <nav className="flex flex-col items-center">
          <header className="font-semibold text-lg text-white">Legal</header>
          <ul>
            <li><a className="link link-hover">Terms of use</a></li>
            <li><a className="link link-hover">Privacy policy</a></li>
            <li><a className="link link-hover">Cookie policy</a></li>
          </ul>
        </nav>
      </footer>
      <div className="custom-shape-divider-top-1696768387">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
     </div>
    </>
  );
};

export default Footer;
