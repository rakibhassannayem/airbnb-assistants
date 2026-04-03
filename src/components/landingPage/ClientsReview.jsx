"use client";

import React from "react";
import Container from "../shared/Container";
import Headings from "../shared/Headings";
import reviwer1 from "@/assets/reviewers/reviewer1.png";
import reviwer2 from "@/assets/reviewers/reviewer2.png";
import reviwer3 from "@/assets/reviewers/reviewer3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow,Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    image: reviwer1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 2,
    name: "Esther Howard",
    image: reviwer2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 3,
    name: "Robert Fox",
    image: reviwer3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
];

const ClientsReview = () => {
  return (
    <div className="px-2">
      <Headings
        title1={"Check Our Clients"}
        title2={"Review"}
        shortDesc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      />

      <div className="mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col lg:flex-row items-center gap-3 px-10 py-5">
                <Image
                  src={review.image}
                  alt="img"
                  className="w-20 h-20 rounded-full"
                />
                <div className="space-y-2">
                  <h4 className="font-bold">{review?.name}</h4>
                  <p>{review?.comment}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review?.rating }).map((_, i) => (
                      <FaStar key={i} color="#FFD700" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsReview;
