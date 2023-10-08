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

 
 
import slider1 from "../../assets/housewarming banner.jpeg"
import slider2 from "../../assets/nameing party banner-1.jpeg"
import slider3 from "../../assets/weeding banner.jpeg"

const BannerSlider = () => {
  return (
    <>
      <div className="carousel w-full h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img  src={slider1} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-white w-full h-full"></div>
           
            <h1 className="absolute text-4xl font-bold text-white text-center top-[45%] w-full">Birthday Party</h1>
            <p className="text-white absolute text-center top-[55%] mt-2 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, minima?</p>
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-white w-full h-full"></div>
           
            <h1 className="absolute text-4xl font-bold text-white text-center top-[45%] w-full">Birthday Party</h1>
            <p className="text-white absolute text-center top-[55%] mt-2 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, minima?</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full object-cover object-center" />
          <div className="absolute top-0 opacity-40 bg-white w-full h-full"></div>
           
            <h1 className="absolute text-4xl font-bold text-white text-center top-[45%] w-full">Birthday Party</h1>
            <p className="text-white absolute text-center top-[55%] mt-2 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, minima?</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
  
</div> 
    </>
  );
};

BannerSlider.propTypes = {
  
};

export default BannerSlider;

 
      