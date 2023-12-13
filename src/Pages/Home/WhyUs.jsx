import { BsCheck2Circle } from "react-icons/bs";

const WhyUs = () => {
  return (
    <>
      <div className="grid max-w-2xl grid-cols-1 border md:grid-cols-2 gap-10 px-5 justify-center items-center my-20 mx-auto">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <h1 className="text-4xl font-bold text-center">
            Why we are <br />
            <span className="before:block before:absolute my-4 before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
              <span className="relative text-white">THE BEST</span>
            </span>
            <br></br>in BD
          </h1>
           {/* <div className="w-10 h-full bg-orange-300"></div> */}
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            <BsCheck2Circle className="text-4xl text-yellow-400"></BsCheck2Circle>
            <h1 className="text-lg">We offer services across the country.</h1>
          </div>
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            <h1 className="text-lg">Unique and updated decoration ideas.</h1>
            <BsCheck2Circle className="text-4xl text-yellow-400"></BsCheck2Circle>
          </div>
          {/* <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            <BsCheck2Circle className="text-2xl text-yellow-400"></BsCheck2Circle>
            <h1 className="text-lg">Ski</h1>
          </div> */}
          <div className="shadow-sm mb-2 flex justify-center items-center gap-5 p-3">
            <BsCheck2Circle className="text-4xl text-yellow-400"></BsCheck2Circle>
            <h1 className="text-lg">2 years experience of event management.</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
