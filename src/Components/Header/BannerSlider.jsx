// "use client";

// import { Carousel } from "flowbite-react";

// export default function StaticCarousel() {
//   return (
//     <Carousel slide={false} className="h-[70vh] w-full">
//       <div className="relative">
//         <img alt="..." className="w-full  object-cover object-center" src="/src/assets/nameing party banner-2.jpeg" />
//         <div className="absolute top-0 opacity-10 bg-white w-full h-full"></div>
//         <div className="absolute w-full h-full bg-transparent top-[50%]">
//             <h1 className="text-4xl font-bold text-white text-center">Birthday Party</h1>
//             <p className="text-white text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, minima?</p>
//         </div>
//       </div>

//     </Carousel>
//   );
// }

import slider2 from "../../assets/housewarming banner.jpeg";
import slider1 from "../../assets/nameing party banner-2.jpeg";
import slider3 from "../../assets/weeding banner.jpeg";
import slider4 from "../../assets/holiday banner.jpeg";
import slider5 from "../../assets/anniversary banner.jpg";

const BannerSlider = () => {
  return (
    <>
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-black w-full h-full"></div>
          <h1 className="absolute top-[40%] w-full pb-2 text-center lg:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 ">
            Nameing Ceremony
          </h1>
          <p className="text-white font-semibold font absolute text-center top-[55%] mt-2 w-full md:px-28">
          Celebrate the arrival of a new family member with our Naming Ceremony service.
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide5"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-black w-full h-full"></div>
          <h1 className="absolute top-[40%] w-full pb-2 text-center lg:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 ">
          Housewarming Happening
          </h1>
          <p className="text-white font-semibold absolute text-center top-[55%] mt-2 w-full md:px-28">
          Welcome friends and family to your new home with our Housewarming Happening service.
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-black w-full h-full"></div>
          <h1 className="absolute top-[40%] w-full pb-2 text-center lg:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 ">
            Dream Wedding
          </h1>
          <p className="text-white font-semibold absolute text-center top-[55%] mt-2 w-full md:px-28">
          Make your dream wedding a reality with our comprehensive Dream Wedding service.
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-50 bg-black w-full h-full"></div>
          <h1 className="absolute top-[40%] w-full pb-2 text-center lg:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 ">
          Holiday Happening
          </h1>
          <p className="text-white font-semibold absolute text-center top-[55%] mt-2 w-full md:px-28">
          Celebrate the holiday season in style with our Holiday Happening service. 
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <img src={slider5} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-black w-full h-full"></div>
          <h1 className="absolute top-[40%] w-full pb-2 text-center lg:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 ">
          Anniversary Affair
          </h1>
          <p className="text-white font-semibold absolute text-center top-[55%] mt-2 w-full md:px-28">
          Mark another year of love and togetherness with our Anniversary Affair service. 
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-gray-400 text-3xl border-none"
            >
              ❯
            </a>
          </div>
        </div>



      </div>
    </>
  );
};

BannerSlider.propTypes = {};

export default BannerSlider;
