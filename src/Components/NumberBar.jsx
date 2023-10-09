import React from "react";

const NumberBar = () => {
  return (
    <>
      <div className="">
        
        <section className="relative z-20 font-poopins bg-[url('/src/assets/numbr.jpeg')] bg-fixed   bg-cover bg-center  text-gray-600 body-font">
        <div className="absolute top-0 opacity-60 z-20 bg-white w-full h-full"></div>
          <div className="container relative z-40 top-0 px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-semibold sm:text-4xl text-3xl text-black">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-semibold sm:text-4xl text-3xl text-black">
                  1.8K
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-semibold sm:text-4xl text-3xl text-black">
                  35
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-semibold sm:text-4xl text-3xl text-black">
                  4
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NumberBar;
