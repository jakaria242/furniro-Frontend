import React from "react";
import HeadingPeraTxt from "@/utils/HeadingPeraTxt";
import Image from "next/image";
import browser1 from "@/assets/browse1.jpg";
import browser2 from "@/assets/browse2.jpg";
import browser3 from "@/assets/browse3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Parallax } from "swiper/modules";

const Browse = () => {
  const browsingImages = [
    {
      id: 0,
      src: browser1,
      alt: "Browser Image 1",
      text: "Living Room",
    },
    {
      id: 1,
      src: browser2,
      alt: "Browser Image 2",
      text: "Dining",
    },
    {
      id: 2,
      src: browser3,
      alt: "Browser Image 3",
      text: "Bedroom",
    },
    {
      id: 3,
      src: browser1,
      alt: "Browser Image 1",
      text: "Living Room",
    },
    {
      id: 4,
      src: browser2,
      alt: "Browser Image 2",
      text: "Dining",
    },
    {
      id: 5,
      src: browser3,
      alt: "Browser Image 3",
      text: "Bedroom",
    },
  ];

  return (
    <div className="pt-14">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col justify-center items-center  gap-y-px">
          <HeadingPeraTxt
            level="h4"
            className="text-32 font-bold text-smallText capitalize"
            text="Browse The Range"
          />
          <HeadingPeraTxt
            level="p"
            className="text-xl font-normal text-[#666666]"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="pt-62 flex justify-around items-center gap-x-[20px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500 }}
            parallax={true}
            speed={1500}
            modules={[Autoplay, Parallax]}
          >
            {browsingImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-y-[30px]">
                  <div className="h-[480px] w-[380px] overflow-hidden border rounded-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      height={480}
                      width={380}
                      quality={100}
                    />
                  </div>
                  <HeadingPeraTxt
                    level="p"
                    className="text-2xl text-smallText font-semibold capitalize"
                    text={item.text}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Browse;
