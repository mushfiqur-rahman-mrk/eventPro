import { BsCheck2Circle } from "react-icons/bs";

const WhyUs = () => {
  return (
     <>
      <div className="grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-20 mx-auto">
        <div data-aos="fade-right"
     data-aos-duration="2000">
          <h1 className="text-4xl font-bold text-center">Why <br/> Choose us</h1>
          <div className="bg-red-700 mx-auto rounded-sm w-48 h-10 "></div>  
        </div>  
        <div data-aos="fade-left"
     data-aos-duration="2000">
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            <BsCheck2Circle className="text-2xl text-yellow-400"></BsCheck2Circle>
          <h1 className="text-lg">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            
          <h1 className="text-lg">Lorem ipsum dolor sit amet.</h1>
          <BsCheck2Circle className="text-2xl text-yellow-400"></BsCheck2Circle>
          </div>
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            <BsCheck2Circle className="text-2xl text-yellow-400"></BsCheck2Circle>
          <h1 className="text-lg">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
          <h1 className="text-lg">Lorem ipsum dolor sit amet.</h1>
            <BsCheck2Circle className="text-2xl text-yellow-400"></BsCheck2Circle>
          </div>
           
        </div>
      </div>     
     </>
  );
};

export default WhyUs;
