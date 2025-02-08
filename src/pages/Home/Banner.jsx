import { motion } from "framer-motion";
import { easeOut } from "motion";
import side01 from "../../assets/Banner/Sidebar01.jpg";
import side02 from "../../assets/Banner/Sidebar02.jpg";
import banner2 from "../../assets/Banner/banner02.jpg";
import banner3 from "../../assets/Banner/banner03.jpg";
import banner4 from "../../assets/Banner/banner04.jpg";
import Lottie from "lottie-react";
import lottiebanner2 from "../../assets/lottie/banner02lottie.json";

const Banner = () => {
  return (
    <div className="carousel w-full my-4">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="p-36 bg-green-50 rounded-2xl flex flex-row w-full">
          <div>
            <motion.h2
              animate={{ y: 100 }}
              transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              className="text-5xl font-bold"
            >
              " Running is a way of life. It's a metaphor for life. "
            </motion.h2>
            <motion.button
              animate={{ y: -100 }}
              transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              className="px-7 py-3 bg-green-500 text-xl font-bold rounded-lg mt-60"
            >Get Started</motion.button>
          </div>
          <div className="w-2/3 pb-40 flex relative justify-center items-center">
            <motion.img
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-[400px] h-fit absolute rounded-t-[30px] rounded-br-[30px] border-l-[6px] border-b-[6px] border-green-600"
              src={side01}
              alt=""
            />
            <motion.img
              animate={{ x: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-[400px] absolute top-52 left-52 h-fit rounded-t-[30px] rounded-br-[30px] border-l-[6px] border-b-[6px] border-green-600"
              src={side02}
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="max-h-[700px] w-full relative rounded-2xl flex flex-row">
          <div className="max-h-[700px] w-full">
            <img className="rounded-2xl h-full w-full" src={banner2} alt="" />
          </div>
          <div className="absolute flex flex-row justify-center items-center mt-56">
            <h2 className="text-4xl text-white font-bold w-2/3">
              "You have to forget your last marathon before you try another.
              Your mind can’t know what’s coming."<br></br>
              <span className="text-lg p-3 rounded-xl bg-slate-50 text-black">
                
                - Frank Shorter,
                <span className="text-green-400">
                  Olympic Marathon Gold Medalist.
                </span>
              </span>
            </h2>
            <Lottie className="w-1/4" animationData={lottiebanner2}></Lottie>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="max-h-[700px] w-full relative rounded-2xl flex flex-col">
          <div className="max-h-[700px]">
            <img className="rounded-2xl h-full w-full" src={banner3} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center space-y-7 mt-56">
            <h2 className="text-4xl text-white font-bold w-2/3">
              The hardest part of running a marathon is deciding to start. Once
              you do, the rest is just a beautiful journey.
            </h2>
            <button className="px-7 py-3 bg-green-50 bg-opacity-50 text-xl font-bold rounded-lg">
              Explore
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="max-h-[700px] w-full relative rounded-2xl flex flex-col">
          <div className="max-h-[700px]">
            <img className="rounded-2xl h-full w-full opacity-60" src={banner4} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center space-y-7 mt-56">
            <h2 className="text-4xl font-bold w-2/3 text-black">
              "Running teaches you that you are capable of so much more than you
              ever thought possible."<span className="text-lg"> <br />
              - <span className="text-red-500">Kara Goucher,</span> American Marathoner.
              </span>
            </h2>
            <button className="px-7 py-3 border-[1px] border-green-500 bg-green-50 bg-opacity-50 text-xl font-bold rounded-lg">
              Explore
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
