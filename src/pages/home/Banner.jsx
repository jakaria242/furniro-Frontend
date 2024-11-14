import React from "react";
import Button from "@/utils/Button";
import HeadingPeraTxt from "@/utils/HeadingPeraTxt";

const Banner = () => {
  return (
    <div
      className="pt-158 pb-[100px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className="max-w-container mx-auto">
        <div className="flex justify-end">
          <div className="w-[643px] px-10 pt-60 pb-10 bg-bannerBox">
          <HeadingPeraTxt level="span" className="text-base text-smallText font-semibold tracking-[3px] capitalize" text="New Arrival"/>
            <HeadingPeraTxt level="h2" className="text-52 text-boxH w-460 font-bold leading-[65px] capitalize pt-[4px] pb-[17px]" text="Discover Our New Collection"/>
            <HeadingPeraTxt level="p" className="text-lg text-smallText w-546 font-medium leading-6 pb-[46px]" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis."/>
            <Button
              className="py-[25px] px-[75px] bg-boxH text-white"
              btntxt="BUY NOW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
