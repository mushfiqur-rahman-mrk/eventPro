import Navbar from "../Header/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/Authentication";
import logimage1 from "/src/assets/login1.jpeg";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai"

const Signup = () => {
  const { createUser, google } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show,setShow]=useState(false)
  const navigate=useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");
    var specialCarrecter= /[!@#$%^&*()_+{}:;<;>,.?=\\|]/;
    if(password.length<6){
      setError('Password must be atleast 6 carrecter or long ')
      return
    }
    else if(!/[A-Z]/.test(password)){
      setError('Password should have atleast one capital letter')
      return
    }
    else if(!specialCarrecter.test(password)){
      setError('Password should have atleast one special carrecter like !@#$%^&*()_+{}:;<;>,.?=\\|')
      return
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError('Account created successfully')
        e.target.reset();
        navigate('/')
        
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-2xl text-center font-bold my-10">
        Create Your Account Now!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 max-w-6xl mx-auto mb-20">
        <div className="shadow-xl rounded-xl hidden lg:block">
          <img className="rounded-xl h-full" src={logimage1} alt="" />
        </div>
        <div className="col-span-2">
          {/* google login */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div>
              <button className="btn mr-2" onClick={handleGoogle}>
                <FcGoogle className="text-2xl"></FcGoogle>Continue With Google
              </button>
               
            </div>
            <div className="flex justify-center items-center gap-3">
              <hr className="w-40 h-1"></hr>
              <p className="font-semibold text-gray-400">Or</p>
              <hr className="w-40 h-1"></hr>
            </div>
          </div>

          <div className="px-6 py-2 lg:py-0">
            <div className="">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSignUp}
                >
                  <div>
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div className="relative">
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type={show ? 'text':'password'}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <span className="absolute text-2xl top-2/4 right-4" onClick={()=>setShow(!show)}>
                      {
                          show ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                      }
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-md font-semibold transition duration-150 text-white hover:bg-red-500 hover:text-black w-full"
                  >
                    Create my account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account yet?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      {" "}
                      Log in{" "}
                    </Link>
                  </p>
                </form>
                {error && (
                  <p className="bg-red-500 py-1 rounded-lg px-3 text-white">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
