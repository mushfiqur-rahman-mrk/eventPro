
import user1 from "/src/assets/user1.jpg";
import user2 from "/src/assets/user2.jpg";
import user3 from "/src/assets/user3.jpg";

const Review = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 my-20 grid grid-cols-1  justify-center items-center ">
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
                      EventPro handled my son’s wedding where more tan 40,000 guests were attended.I received appreciations about the venue decoration, stage decoration and about wedding arrangements from VIP’s .I recommend eventpro big fat weddings with out hesitation and I wish you all the best aica events.
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        Mohol lal
                      </h2>
                      <p className="text-gray-500">Goverment officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides3" className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href="#slides2" className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slides2"
              className="carousel-item relative w-full"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user2} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg md:px-10">
                      We worked with Eventpro many times for all the events in our family including my son’s wedding and daughter’s wedding.from engagement ceremony to wedding reception ,they handled all pre-wedding ,post-wedding events flawless where more than 10,000 guest were attended. They are very creative people with decoration works, they listen to the requirements in detail and executes in time recently,
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        Rashed khan
                      </h2>
                      <p className="text-gray-500">Banker</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides1" className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href="#slides3" className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slides3"
              className="carousel-item relative w-full"
            >
              <div className="w-full  flex flex-col justify-center items-center">
                <div className="w-28">
                  <img className="rounded-full" src={user3} alt="" />
                </div>
                <div className="text-gray-600 font-poopins mt-3">
                  <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                      <p className="text-lg md:px-10">
                        Edison bulb retro cloud bread echo park, helvetica
                        stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                        Single-origin coffee ennui shaman taiyaki vape DIY tote
                        bag drinking vinegar cronut adaptogen squid fanny pack
                        vaporware.{" "}
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-3 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        Shah Alam
                      </h2>
                      <p className="text-gray-500">Business man</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slides2" className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href="#slides1" className="btn btn-circle bg-transparent">
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
