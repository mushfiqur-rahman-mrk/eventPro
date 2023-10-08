import { BsCheck2Circle } from "react-icons/bs";

const WhyUs = () => {
  return (
     <>
      <div className="grid max-w-2xl grid-cols-2 justify-center items-center my-20 mx-auto">
        <div>
          <h1 className="text-4xl font-bold">Why <br/> Choose us</h1>
          <div className="bg-red-700 rounded-sm w-48 h-10 "></div>  
        </div>  
        <div>
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
