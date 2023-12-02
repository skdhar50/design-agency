"use client";

import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black h-[440px] w-full flex justify-center items-center">
      <div className="flex justify-between items-center container h-full mx-auto relative">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-white text-[40px] font-[700] px-[20px]">
            WEB LOGO
          </h1>
          <p className="text-white text-[20px] font-[400]">
            Some footer text about the
            <br />
            Agency. Just a little description to
            <br />
            help people understand you better
          </p>
          <div className="flex gap-[16px]">
            <Image
              width={40}
              height={40}
              src="/assets/logos/facebook.svg"
              alt=""
            />
            <Image
              width={40}
              height={40}
              src="/assets/logos/twitter.svg"
              alt=""
            />
            <Image
              width={40}
              height={40}
              src="/assets/logos/linkdn.svg"
              alt=""
            />
            <Image
              width={40}
              height={40}
              src="/assets/logos/instagram.svg"
              className="bg-[#20B15A] p-[13px] rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <h3 className="text-white text-[20px] font-[600] pb-[16px]">
            Quick Links
          </h3>
          <div className="flex flex-col gap-[25px]">
            <p className="text-[18px] text-white font-[500]">Services</p>
            <p className="text-[18px] text-white font-[500]">Portfolio</p>
            <p className="text-[18px] text-white font-[500]">About Us</p>
            <p className="text-[18px] text-white font-[500]">Contact Us</p>
          </div>
        </div>
        <div className="">
          <h3 className="text-white text-[20px] font-[600] pb-[26px]">
            Address
          </h3>
          <p className="text-white text-[20px] font-[500]">
            Design Agency Head Office.
            <br />
            Airport Road
            <br />
            United Arab Emirate
          </p>
        </div>
        <div className="text-[20px] text-white font-[500] absolute left-0 bottom-4">
          Copyright Design Agency 2022
        </div>
      </div>
    </div>
  );
}

export default Footer;
