import React from "react";
import Image from "next/image";
import airbnb from "@/assets/floatinglogos/airbnb.png";
import booking from "@/assets/floatinglogos/booking.png";
import vrbo from "@/assets/floatinglogos/vrbo.png";
import tripadvisor from "@/assets/floatinglogos/tripadvisor.png";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-25 flex flex-col items-center justify-center border-b border-gray-200">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem] z-0"></div>

      {/* Floating Logos */}
      <div className="absolute top-[18%] left-[15%] w-16 md:w-20 lg:w-24 -rotate-12 z-10 transition-transform hover:scale-110 duration-300">
        <Image
          src={airbnb}
          alt="Airbnb"
          className="w-full h-auto drop-shadow-lg"
        />
      </div>
      <div className="absolute top-[22%] right-[15%] w-16 md:w-20 lg:w-24 rotate-12 z-10 transition-transform hover:scale-110 duration-300">
        <Image
          src={booking}
          alt="Booking"
          className="w-full h-auto drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-[20%] left-[18%] w-16 md:w-20 lg:w-24 rotate-12 z-10 transition-transform hover:scale-110 duration-300">
        <Image src={vrbo} alt="VRBO" className="w-full h-auto drop-shadow-lg" />
      </div>
      <div className="absolute bottom-[12%] right-[22%] w-16 md:w-20 lg:w-24 -rotate-12 z-10 transition-transform hover:scale-110 duration-300">
        <Image
          src={tripadvisor}
          alt="Tripadvisor"
          className="w-full h-auto drop-shadow-lg"
        />
      </div>

      {/* Floating Colored Dots */}
      <div className="absolute top-[22%] left-[8%] w-3 h-3 bg-indigo-500 rounded-full shadow-sm z-10"></div>
      <div className="absolute top-[60%] left-[12%] w-4 h-4 bg-red-500 rounded-full shadow-sm z-10"></div>
      <div className="absolute bottom-[5%] left-[8%] w-2 h-2 bg-yellow-400 rounded-full shadow-sm z-10"></div>

      <div className="absolute top-[10%] left-[48%] w-3 h-3 bg-emerald-400 rounded-full shadow-sm z-10"></div>
      <div className="absolute bottom-[6%] left-[44%] w-3 h-3 bg-cyan-400 rounded-full shadow-sm z-10"></div>

      <div className="absolute top-[35%] right-[12%] w-3 h-3 bg-yellow-400 rounded-full shadow-sm z-10"></div>
      <div className="absolute bottom-[18%] right-[8%] w-2 h-2 bg-slate-800 rounded-full shadow-sm z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-15 py-10 text-center rounded-3xl md:rounded-full bg-white/55">
        <h1 className="text-5xl font-bold text-black tracking-tight mb-2">
          Airbnb Assistants For
        </h1>
        <h1 className="text-4xl font-medium text-black tracking-tight mb-5">
          Property Management
        </h1>

        <p className="max-w-2xl mx-auto mb-8 font-medium text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button className="btn btn-primary text-white p-5 rounded-md">
            Schecdule A Meeting <IoMdArrowForward size={20} />
          </button>

          <a
            href="#"
            className="text-sm font-bold text-slate-800 underline underline-offset-6 decoration-2 hover:text-primary transition-colors mt-2"
          >
            See Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
