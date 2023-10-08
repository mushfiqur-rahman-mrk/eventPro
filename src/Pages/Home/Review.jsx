import React from "react";

const Review = () => {
  return (
    <>
      <div className="my-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10">Word from our Customers</h1>
        </div>
        <div>
          <div className="carousel w-full">
            <div id="slides1" className="carousel-item relative w-full bg-red-500 py-10 ">
                <div className="w-full   h-40 flex flex-col justify-center items-center">
                    <div>image</div>
                    <div className="text-cente xl:mx-40">                      
                      <p>rating</p>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam expedita odit similique modi in error commodi, laboriosam molestiae doloremque temporibus?</p>
                      <p>name</p>
                    </div>
                </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slides2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slides2" className="carousel-item bg-red-500 py-10 relative w-full">
            <div className="w-full  h-40 flex flex-col justify-center items-center">
                    <div>image</div>
                    <div className="text-cente xl:mx-40">                      
                      <p>rating</p>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam expedita odit similique modi in error commodi, laboriosam molestiae doloremque temporibus?</p>
                      <p>name</p>
                    </div>
                </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slides3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slides3" className="carousel-item relative w-full bg-red-500 py-10 ">
            <div className="w-full  flex flex-col justify-center items-center">
                    <div>image</div>
                    <div className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard.  </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  </div>
</div>
                </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slides1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
