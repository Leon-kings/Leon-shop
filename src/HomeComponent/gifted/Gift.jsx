import { EyeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
const Arrival = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              BUY MORE WIN ONE
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              Here you Buy more and Win 1 more
            </h2>

          </div>
          <div className="body">

            <div className="container p-6 mx-auto mb-10 xl:px-0">
              <div className="left">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-1">
                  <div className="giftted flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <h2 className=" invisible text text-blue-700"> <b>YOUR GIFT</b></h2>
                    <h3 className="invisible text-white p-3">LD through Leon-shops provide a gift to their clients,
                      Where you can buy More products and Win other products. We wish you bonne chance
                      to those who will Win This Prize. Everyone can also win to shop on Discount of <b className="text-green-500">15%</b>  of Orginal price </h3>

                    <div className="invisible buttonKey flex m-5 gap-10">
                      <button className="sm:*:m-0 mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">Message</button>
                      <button className="sm:*:m-0 mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><Link to={'/Contact-Leon-shop'}><EyeIcon className="text-white w-6" /></Link> </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="left">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-1">
                  <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <h2 className="text text-blue-700"> <b>BUY MORE WIN ONE </b></h2>
                    <h3 className=" text p-3">LD through Leon-shops provide a gift to their clients,
                      Where you can buy More products and Win other products. We wish you bonne chance
                      to those who will Win This Prize. Everyone can also win to shop on Discount of <b className="text-green-500">15%</b>  of Orginal price </h3>

                    <div className="buttonKey flex m-5 gap-10">
                      <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">Register</button>
                      <button className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><PhoneIcon className="w-6" /> </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default Arrival;
