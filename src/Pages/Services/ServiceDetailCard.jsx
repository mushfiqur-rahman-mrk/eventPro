import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";

const ServiceDetailCard = ({ eventData }) => {
  const [loading, setLoading] = useState(false);
  console.log(eventData.length);
//   useEffect(()=>{
//     if(eventData.length <= 0){
//         setLoading(true);
//         setTimeout(() => {
//         setLoading(false);
//         }, 500);
//     }
  
//   }, [eventData.length]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  console.log(eventData);
  const { title, image, price, description } = eventData || {}
//   console.log(image[0]);

  return (

    <>
    <Navbar></Navbar>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <span className="loading loading-spinner text-secondary"></span>
        </div>
      ) : (
        <div>
          <div className="bg-red-600 h-20"></div>
          <div className="grid grid-cols-2 items-center max-w-5xl gap-10 mx-auto">
            <div className="border">
              <div className="mb-2">
                <img src={image} alt="" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-pink-400 h-full"></div>
                <div>
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="mb-4 mt-2">Price: {price}</p>
                <p className="font-poopins text-gray-600">{description}</p>
              </div>
            </div>
          </div>
          <div className="my-20">
            <h1 className="font-bold text-2xl text-center mb-10">
              Our Recent Pogram image
            </h1>
            <div className="flex flex-wrap justify-center gap-10">
              {/* <img src={image[1]} alt="" />
              <img src={image[2]} alt="" />
              <img src={image[3]} alt="" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ServiceDetailCard.propTypes = {
  eventData: PropTypes.object,
};

export default ServiceDetailCard;
