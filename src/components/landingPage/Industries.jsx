"use client";

import React from "react";
import Image from "next/image";
import Container from "../shared/Container";
import airbnb from "@/assets/industries/airbnb.png";
import booking from "@/assets/industries/booking.png";
import vrbo from "@/assets/industries/vrbo.png";
import tripadvisor from "@/assets/industries/tripadvisor.png";
import agoda from "@/assets/industries/agoda.png";
import expedia from "@/assets/industries/expedia.png";
import hometogo from "@/assets/industries/hometogo.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const industryLogos = [
  airbnb,
  booking,
  vrbo,
  tripadvisor,
  agoda,
  expedia,
  hometogo,
];

const Industries = () => {
  return (
    <div>
      <p className="text-xl font-bold text-center pb-5">
        Trusted by leaders in 50+ industries
      </p>
      <div className="bg-[#F6F6F6] py-4">
        <Container className={""}>
          <Swiper
            slidesPerView={"4"}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {industryLogos.map((logo, i) => (
              <SwiperSlide key={i}>
                <Image src={logo} alt="logo" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Industries;
