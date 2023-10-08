import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";

import "./services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const eventData = useLoaderData([]);
  console.log(eventData);
  return (
    <>
      <Navbar></Navbar>
    <div className="relative h-[30vh] bg-red-400 border-none">
      <div>
        <h1 className="text-center">hello</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi!</p>
      </div>
      <div className="custom-shape-divider-bottom-1696762709">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    </div>
      <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto my-20 ">
        {eventData.map((data) => (
          <ServiceCard data={data} key={data.id}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Services;
