import Navbar from "../../Components/Header/Navbar";
import { Datepicker } from "flowbite-react";
import logimage2 from "/src/assets/login3.jpeg";
import logimage1 from "/src/assets/login1.jpeg";

const Contact = () => {
   const handleSubmit=(e)=>{
    e.preventDefault();
    e.target.reset();
   }
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-3 my-20 gap-8 px-5 max-w-6xl mx-auto justify-center items-center" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="hidden md:block" >
          <img className="rounded-br-full" src={logimage1} alt="" />
          <img className="rounded-tr-full" src={logimage2} alt="" />
        </div>
        <div className="col-span-2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Let's Plan Your Event !
          </h2>
          <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Feel Free To Contact Us NOW! Plan Your Event With Our Premium
            Consultation And It's Free!
          </p>
          <div>
            <div className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label
                      for="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  </div>
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your event type
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose Your Event</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Dream Wedding">Dream Wedding</option>
                    <option value="Anniversary Affair">
                      Anniversary Affair
                    </option>
                    <option value="Housewarming Happening">
                      Housewarming Happening
                    </option>
                    <option value="Promotion Party">Promotion Party</option>
                    <option value="Holiday Happening">Holiday Happening</option>
                    <option value="Graduation Ceremony">
                      Graduation Ceremony
                    </option>
                    <option value="Naming Ceremony">Naming Ceremony</option>
                  </select>
                    </div>
                 

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Your event date
                    </label>
                    <Datepicker weekStart={2} />
                    </div>
                  </div>

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your event budget
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose Your Budget</option>
                    <option value="US">$1500-$3500</option>
                    <option value="CA">$5000-$8000</option>
                    <option value="FR">More then $10000</option>
                  </select>

                  <div className="sm:col-span-2">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send message
                  </button>
                  <button  className="px-5 text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600  hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl shadow-lg mx-auto md:w-1/2 ">Submit</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
