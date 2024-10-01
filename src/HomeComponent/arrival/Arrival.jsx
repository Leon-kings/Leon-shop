import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Arrival = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              NEW ARRIVAL
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              Here you see what we bring to you
            </h2>

          </div>
          <div className="body">

            <div className="container p-6 mx-auto mb-10 xl:px-0">
              <div className="left">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-1">
                  <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <h2 className="text text-blue-700"> <b>YOUR BOOKING SPACE</b></h2>
                    <h3 className="text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae quaerat mollitia sit quod nihil, tenetur repudiandae quisquam aut hic.
                      Ratione cumque assumenda sequi iste! Unde repellat suscipit distinctio eaque nobis?</h3>

                    <div className="buttonKey flex m-5 gap-10">
                      <button className="sm:*:m-0 mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><Link to={'/Login'}><EnvelopeIcon className="text-white w-6 "/> </Link> </button>
                      <button className=" sm:*:m-0 mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><Link to={'/Contact-Leon-shop'}>Contact</Link> </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="left">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-1">
                  <div className="rightSide flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <h2 className="invisible text text-blue-700"> <b>NEW ARRIVAL</b></h2>
                    <h3 className="invisible text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae quaerat mollitia sit quod nihil, tenetur repudiandae quisquam aut hic.
                      Ratione cumque assumenda sequi iste! Unde repellat suscipit distinctio eaque nobis?</h3>

                    <div className="invisible buttonKey flex m-5 gap-10">
                      <button className="sm:*:m-0 mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">View All</button>
                      <button className="sm:*:m-0 mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">Contact</button>
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
