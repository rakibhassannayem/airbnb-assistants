import React from "react";
import Container from "../shared/Container";
import { IoMdArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import bannerImg from "@/assets/chooseUs/group.png";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className=" mx-3">
      <Container
        className={
          "border border-primary bg-[#FDEBF0] rounded-4xl py-12 px-12"
        }
      >
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="sm:w-1/2 flex flex-col gap-8">
            <h1 className="font-bold text-4xl">
              Few Reasons Why you <br />
              Choose us?
            </h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>

            <ul className="space-y-3 my-2">
              <li className="flex gap-2 items-center">
                <div className="p-2 bg-[#FAC4D2] rounded-full text-primary">
                  <FaCheck />
                </div>
                <p className="font-bold">Brilliant Client Service</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="p-2 bg-[#FAC4D2] rounded-full text-primary">
                  <FaCheck />
                </div>
                <p className="font-bold">Flexibility & Adaptibility</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="p-2 bg-[#FAC4D2] rounded-full text-primary">
                  <FaCheck />
                </div>
                <p className="font-bold">We make it Personal</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="p-2 bg-[#FAC4D2] rounded-full text-primary">
                  <FaCheck />
                </div>
                <p className="font-bold">We have expart in our team</p>
              </li>
            </ul>

            <button className="btn btn-primary text-white p-5 rounded-md w-fit">
              Schecdule A Meeting <IoMdArrowForward size={20} />
            </button>
          </div>

          <div>
            <Image src={bannerImg} alt="banner" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
