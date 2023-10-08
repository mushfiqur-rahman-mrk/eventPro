import React from "react";
import user1 from "/src/assets/user1.jpg";
import user2 from "/src/assets/user2.jpg";
import user3 from "/src/assets/user3.jpg";

const Review = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-20 grid grid-cols-2 justify-center items-center ">
        <div>
          <h1 className="text-3xl font-bold text-center mb-10">
            Word from our Customers
          </h1>
        </div>
        <div>
          <div className="carousel w-full rounded-full shadow-lg border">
            <div
              id="slides1"
              className="carousel-item relative w-full py-10"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user1} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg">
                        Edison bulb retro cloud bread echo park, helvetica
                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                        Single-origin coffee ennui shaman taiyaki vape DIY tote
                        bag drinking vinegar cronut adaptogen squid fanny pack
                        vaporware.{" "}
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        HOLDEN CAULFIELD
                      </h2>
                      <p className="text-gray-500">Senior Product Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slides2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slides2"
              className="carousel-item relative w-full bg-red-500"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user2} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg">
                        Edison bulb retro cloud bread echo park, helvetica
                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                        Single-origin coffee ennui shaman taiyaki vape DIY tote
                        bag drinking vinegar cronut adaptogen squid fanny pack
                        vaporware.{" "}
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        HOLDEN CAULFIELD
                      </h2>
                      <p className="text-gray-500">Senior Product Designer</p>
                    </div>
                  </div>
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

            <div
              id="slides3"
              className="carousel-item relative w-full bg-red-500"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user3} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg">
                        Edison bulb retro cloud bread echo park, helvetica
                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                        Single-origin coffee ennui shaman taiyaki vape DIY tote
                        bag drinking vinegar cronut adaptogen squid fanny pack
                        vaporware.{" "}
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        HOLDEN CAULFIELD
                      </h2>
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
