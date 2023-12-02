import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const TestimonialPage = () => {
  return (
    <div>
      {/* Title section */}
      <MainTitle title="Testimonial List" currentPage="Testimonial List" />

      {/* Sevices section */}
      <div className="bg-white">
        <div className="container py-[70px] mx-auto">
          <div className="mb-[72px]">
            <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
              Testimonial List
            </p>
            <h2 className="text-[30px] font-[600]">
              Better Agency/SEO Solution At
              <br />
              Your Fingertips
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[32px] content-center">
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center">
              <Image
                width={900}
                height={600}
                src="/assets/images/customer/customer-1.png"
                alt=""
                className="object-cover rounded-[20px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                  Alice Bradley
                </h2>
                <h3 className="text-[16px] font-[400] mt-[10px]">
                  Backend Developer
                </h3>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center">
              <Image
                width={900}
                height={600}
                src="/assets/images/customer/customer-2.png"
                alt=""
                className="object-cover rounded-[20px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                  Alice Bradley
                </h2>
                <h3 className="text-[16px] font-[400] mt-[10px]">
                  Backend Developer
                </h3>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center">
              <Image
                width={900}
                height={600}
                src="/assets/images/customer/customer-3.png"
                alt=""
                className="object-cover rounded-[20px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                  Alice Bradley
                </h2>
                <h3 className="text-[16px] font-[400] mt-[10px]">
                  Backend Developer
                </h3>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center">
              <Image
                width={900}
                height={600}
                src="/assets/images/customer/customer-4.png"
                alt=""
                className="object-cover rounded-[20px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                  Alice Bradley
                </h2>
                <h3 className="text-[16px] font-[400] mt-[10px]">
                  Backend Developer
                </h3>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center">
              <Image
                width={900}
                height={600}
                src="/assets/images/customer/customer-5.png"
                alt=""
                className="object-cover rounded-[20px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                  Alice Bradley
                </h2>
                <h3 className="text-[16px] font-[400] mt-[10px]">
                  Backend Developer
                </h3>
              </div>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center">
              <Image
                width={900}
                height={600}
                src="/assets/images/customer/customer-6.png"
                alt=""
                className="object-cover rounded-[20px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                  Alice Bradley
                </h2>
                <h3 className="text-[16px] font-[400] mt-[10px]">
                  Backend Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
};

export default TestimonialPage;
