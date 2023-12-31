 
import Navbar from '../../Components/Header/Navbar';

const Gallery = () => {
    return (
        <>
        <Navbar></Navbar>
        <div>
            <h1 className='text-2xl font-bold text-center mt-10'>Our Event Gallery</h1>
            <hr className='w-28 mt-2 h-2 rounded-full bg-orange-500 mx-auto'></hr>
        </div>
         
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-20 px-10">
    <div className="grid gap-4" data-aos="zoom-in"
     data-aos-duration="2000">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/KWqCg8H/holiday-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/y4y0mkr/promotion-2.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3WpTcBF/housewarming-2.jpg" alt=""/>
        </div>
    </div>

    <div className="grid gap-4" data-aos="fade-up"
     data-aos-duration="2000">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/NFkbJQz/anniversary-2.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/t2xGnjd/weeding-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/17RpZC9/weeding-4.jpg" alt=""/>
        </div>
    </div>

    <div className="grid gap-4" data-aos="fade-up"
     data-aos-duration="2000">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/0BY7NTd/nameing-party-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/RQVyb3Z/birthday-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/hyttnfC/birthday-3.png" alt=""/>
        </div>
    </div>

    <div className="grid gap-4" data-aos="zoom-in"
     data-aos-duration="2000">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Wzb06mk/holiday-banner.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/vdsWGkw/holiday-2.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/s9yf2Mk/graduation-2.jpg" alt=""/>
        </div>
    </div>
</div>
   
        </>
    );
};

export default Gallery;