import React from "react";
import HeadingPeraTxt from "@/utils/HeadingPeraTxt";
import Image from "next/image";
import browser1 from "@/assets/browse1.jpg";
import browser2 from "@/assets/browse2.jpg";
import browser3 from "@/assets/browse3.jpg";

const Browse = () => {
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
          <div className="flex flex-col items-center gap-y-[30px]">
            <div className="h-[480px] w-[380px] overflow-hidden border rounded-2xl">
              <Image
                src={browser3}
                alt="Browser Image"
                className="w-full h-full object-cover"
                height={480}
                width={380}
                quality={100}
              />
            </div>
            <HeadingPeraTxt level="p" className="text-2xl text-smallText font-semibold capitalize" text='Dining'/>
          </div>
          <div className="flex flex-col items-center gap-y-[30px]">
            <div className="h-[480px] w-[380px] overflow-hidden border rounded-2xl">
              <Image
                src={browser2}
                alt="Browser Image"
                className="w-full h-full object-cover"
                height={480}
                width={380}
                quality={100}
              />
            </div>
            <HeadingPeraTxt level="p" className="text-2xl text-smallText font-semibold capitalize" text='Living'/>
          </div>
          <div className="flex flex-col items-center gap-y-[30px]">
            <div className="h-[480px] w-[380px] overflow-hidden border rounded-2xl">
              <Image
                src={browser1}
                alt="Browser Image"
                className="w-full h-full object-cover"
                height={480}
                width={380}
                quality={100}
              />
            </div>
            <HeadingPeraTxt level="p" className="text-2xl text-smallText font-semibold capitalize" text='Bedroom'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
