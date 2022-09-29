import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase rounded-full bg-teal-accent-400">
            
            </p>
          </div>
          <h2 className="max-w-lg mb-9 font-sans text-3xl font-bold leading-none tracking-tight text-pink-700 sm:text-4xl md:mx-auto">
          About Us          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto mt-4">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium text-pink-700 ">
              1.	Can I tour providers online?              </p>
              <p className="text-gray-700">
              Yes! We give you the online tools to communicate, tour, and to help you make the best choice, all contactless.
               
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium text-pink-700 ">
              2.	What program options are there?              </p>
              <p className="text-gray-700">
             
                Cradle crew provides nurturing in-home Child Care as well as center-based Care. Each is designed to meet the unique requirements of your child.


              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium text-pink-700 ">
              3.	How can I talk with our providers?              </p>
              <p className="text-gray-700">
              Yes, You can talk with providers with built-in video call feature.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium text-pink-700 ">
              4.	How will I know a parent is interested in visiting my childcare centre?             </p>
              <p className="text-gray-700">
              When a parent is interested in visiting your childcare centre, you’ll receive an message on your dashboard with their request.              </p>
            </div>

            <div>
              <p className="mb-4 text-xl font-medium text-pink-700 ">
              5. What if i have additional questions         </p>
              <p className="text-gray-700">
              We’re here to help! Please reach out to us on our <Link to="/contact" className="text-pink-700 font-bold underline">Contact page</Link> and let us know what questions we can answer for you.   </p>
            </div>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
