import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900" data-aos="fade-up"
     data-aos-duration="2000">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our 
              <span className="before:block before:absolute ml-3 my-4 before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
              <span className="relative text-white">newsletter</span>
            </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Sign up here to get the latest decorations, updates and special offers delivered directly to your inbox.
            </p>
            <form>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    for="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-orange-500 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm  text-center text-gray-500 newsletter-form-footer dark:text-gray-300">
                <p>We care about the protection of your data. <span
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </span></p> 
                
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
