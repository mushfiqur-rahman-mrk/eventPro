import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";

import "./services.css"
import ServiceCard from "./ServiceCard";

const Services = () => {
  const eventData=useLoaderData([])
  console.log(eventData);
  return (
    <>
      <Navbar></Navbar>
      <div className="h-40">  
      <div className="custom-shape-divider-bottom-1696681030 bg-pink-300"  >
        <h1>hi</h1>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-5 ">
          {
            eventData.map(data=><ServiceCard data={data} key={data.id}></ServiceCard>)
          }
      </div>
       
      
    </>
  );
};

export default Services;
