import PropTypes from "prop-types";
 
import Navbar from "../../Components/Header/Navbar";
import { Link } from "react-router-dom";

const ServiceDetailCard = ({ eventData }) => {
  // const [loading, setLoading] = useState(false);
  // console.log(eventData.length);
//   useEffect(()=>{
//     if(eventData.length <= 0){
//         setLoading(true);
//         setTimeout(() => {
//         setLoading(false);
//         }, 500);
//     }
  
//   }, [eventData.length]);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);
  console.log(eventData);
  const { title,image2,image3,image4 ,image, price, description,special_features1,special_features2,special_features3,special_features4 } = eventData || {}
   
//   console.log(image[0]);

  return (

    <>
    <Navbar></Navbar>
        <div>
          <div className="bg-red-600 h-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 items-center max-w-5xl gap-10 mx-auto" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="border">
              <div className="mb-2">
                <img src={image} alt="" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-pink-400 h-full"></div>
                <div>
                  <img src={image4} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="mb-4 mt-2">Price: {price}</p>
                <p className="font-poopins text-gray-600">{description}</p>
                <Link to={'/contact'}>
                <button className="px-5 w-2/3 mt-10 shadow-xl text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600  hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl">Let's plan your event</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-28" data-aos="fade-up"
     data-aos-duration="3000">
            <div>
            <h1 className='text-3xl font-bold text-center mt-10'>Special Event Features</h1>
            <hr className='w-28 mt-2 h-2 mb-10 rounded-full bg-orange-500 mx-auto'></hr>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-4 px-8 gap-10">
                <div className="card shadow-xl p-10">
                  <div className="bg-orange-400 w-10 h-8 rounded-full"><h1 className="text-center font-semibold text-white text-2xl">1</h1></div>
                  <div className="font-bold text-lg mt-3">{special_features1}</div>
                </div>
                <div className="card shadow-xl p-10">
                  <div className="bg-orange-400 w-10 h-8 rounded-full"><h1 className="text-center font-semibold text-white text-2xl">2</h1></div>
                  <div className="font-bold text-lg mt-3">{special_features2}</div>
                </div>
                <div className="card shadow-xl p-10">
                  <div className="bg-orange-400 w-10 h-8 rounded-full"><h1 className="text-center font-semibold text-white text-2xl">3</h1></div>
                  <div className="font-bold text-lg mt-3">{special_features3}</div>
                </div>
                <div className="card shadow-xl p-10">
                  <div className="bg-orange-400 w-10 h-8 rounded-full"><h1 className="text-center font-semibold text-white text-2xl ">4</h1></div>
                  <div className="font-bold text-lg mt-3">{special_features4}</div>
                </div>
                 
                 
                 
            </div>
          </div>
          <div className="my-20" data-aos="fade-up"
     data-aos-duration="3000">
            <div>
            <h1 className='text-3xl font-bold text-center mt-10'>Our recent event images</h1>
            <hr className='w-28 mt-2 h-2 mb-10 rounded-full bg-orange-500 mx-auto'></hr>
        </div>
            <div className="flex flex-wrap justify-center gap-10 md:px-2 px-8">
               <img src={image2} alt="" />
               <img src={image3} alt="" />
               <img src={image4} alt="" />
            </div>
          </div>
        </div>
       
    </>
  );
};

ServiceDetailCard.propTypes = {
  eventData: PropTypes.object,
};

export default ServiceDetailCard;
