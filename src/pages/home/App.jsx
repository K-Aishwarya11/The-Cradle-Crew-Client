import "./App.css";
import Carousel from "framer-motion-carousel";

import { useNavigate } from "react-router-dom";

import CrecheIcon from "../../assets/icons/users-alt.svg";
import AdminIcon from "../../assets/icons/badge-check.svg";
import ParentIcon from "../../assets/icons/hand-holding-heart.svg";
import NavFooter from "../../components/navfooter";
import BabySitterIcon from "../../assets/icons/baby-carriage.svg";

function App() {
  const imageArray = [
    
    "https://images.pexels.com/photos/10494238/pexels-photo-10494238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5905749/pexels-photo-5905749.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6266990/pexels-photo-6266990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5902913/pexels-photo-5902913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ];

  const navigate = useNavigate();

  const handleLoginRedirect = (type) => {
    navigate("/login/" + type);
  };

  return (
    <div className="">
      {/* <div className="absolute bg-pink-200 h-96 w-[3000px] top-[960px] -rotate-12 z-0 -left-20"></div> */}

      <section className="">
        <div className="w-full pt-10 max-w-screen-xl mx-auto">
          <Carousel
            interval={4000}
            renderDots={({ handlePrev, activeIndex }) => <div />}
            renderArrowLeft={({ handlePrev, activeIndex }) => <div />}
            renderArrowRight={({ handlePrev, activeIndex }) => <div />}
          >
            {imageArray.map((item, i) => (
              <img
                className="object-cover  w-full object-center block h-[80vh] rounded-xl border-4 border-black mx-auto overflow-hidden"
                draggable="false"
                src={item}
                key={i}
                alt=""
              />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="h-[80vh] max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="w-60 h-96 rounded-xl flex flex-col items-center justify-between pb-16 pt-10 shadow-xl bg-gray-50">
          <img
            src={CrecheIcon}
            style={{
              width: "130px",
              height: "130px",
            }}
          />

          <span className="text-xl font-[500]">Creche</span>

          <button
            onClick={() => handleLoginRedirect("creche")}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-700 transition-colors duration-200 shadow-xl shadow-pink-200 text-white rounded"
          >
            Continue
          </button>
        </div>
        <div className="w-60 h-96 rounded-xl flex flex-col items-center justify-between pb-16 pt-10 shadow-xl bg-gray-50">
          <img
            src={BabySitterIcon}
            style={{
              width: "130px",
              height: "130px",
            }}
          />

          <span className="text-xl font-[500]">Babysitter</span>

          <button
            onClick={() => handleLoginRedirect("babysitter")}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-700 transition-colors duration-200 shadow-xl shadow-pink-200 text-white rounded"
          >
            Continue
          </button>
        </div>
        <div className="w-60 h-96 rounded-xl flex flex-col items-center justify-between pb-16 pt-10 shadow-xl bg-gray-50">
          <img
            src={ParentIcon}
            style={{
              width: "130px",
              height: "130px",
            }}
          />

          <span className="text-xl font-[500]">I am a Parent</span>

          <button
            onClick={() => handleLoginRedirect("parent")}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-700 transition-colors duration-200 shadow-xl shadow-pink-200 text-white rounded"
          >
            Continue
          </button>
        </div>
        <div className="w-60 h-96 rounded-xl flex flex-col items-center justify-between pb-16 pt-10 shadow-xl bg-gray-50">
          <img
            src={AdminIcon}
            style={{
              width: "130px",
              height: "130px",
            }}
          />

          <span className="text-xl font-[500]">Admin </span>

          <button
            onClick={() => handleLoginRedirect("admin")}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-700 transition-colors duration-200 shadow-xl shadow-pink-200 text-white rounded"
          >
            Continue
          </button>
        </div>
      </section>

      <section className="flex justify-center space-x-3 w-full mb-20 max-w-screen-xl mx-auto items-center">
        <div
          onClick={() => {
            navigate("/contact");
          }}
          className="border px-4 py-2 cursor-pointer hover:shadow-lg rounded"
        >
          Feedback Rating
        </div>
      </section>

      <NavFooter />
    </div>
  );
}

export default App;
