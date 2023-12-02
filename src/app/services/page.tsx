import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const ServicesPage = () => {
  return (
    <div>
      {/* Title section */}
      <MainTitle title="Our Services" currentPage="Our Services" />

      {/* Sevices section */}
      <div className="bg-white py-[70px] container mx-auto">
        <div className="mb-[72px]">
          <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
            Our All Services
          </p>
          <h2 className="text-[30px] font-[600]">
            We Provide BestWeb design
            <br />
            services
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-[32px] content-center">
          <div className="rounded-[20px] shadow-lg h-fit overflow-hidden px-[30px] py-[40px]">
            <h3 className="text-[26px] font-[600] uppercase pb-[20px]">
              Build & Launch without problems
            </h3>
            <p className="text-[#9D9D9D] text-[16px] font-[400] capitalize pb-[50px]">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-1.png"
                alt=""
                className="col-span-4 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-2.png"
                alt=""
                className="col-span-2 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-3.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-4.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
            </div>
          </div>
          <div className="rounded-[20px] shadow-lg h-fit overflow-hidden px-[30px] py-[40px]">
            <h3 className="text-[26px] font-[600] uppercase pb-[20px]">
              Build & Launch without problems
            </h3>
            <p className="text-[#9D9D9D] text-[16px] font-[400] capitalize pb-[50px]">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-2.png"
                alt=""
                className="col-span-4 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-5.png"
                alt=""
                className="col-span-2 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-6.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-7.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
            </div>
          </div>
          <div className="rounded-[20px] shadow-lg h-fit overflow-hidden px-[30px] py-[40px]">
            <h3 className="text-[26px] font-[600] uppercase pb-[20px]">
              Build & Launch without problems
            </h3>
            <p className="text-[#9D9D9D] text-[16px] font-[400] capitalize pb-[50px]">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-8.png"
                alt=""
                className="col-span-4 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-9.png"
                alt=""
                className="col-span-2 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-10.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-11.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
            </div>
          </div>
          <div className="rounded-[20px] shadow-lg h-fit overflow-hidden px-[30px] py-[40px]">
            <h3 className="text-[26px] font-[600] uppercase pb-[20px]">
              Build & Launch without problems
            </h3>
            <p className="text-[#9D9D9D] text-[16px] font-[400] capitalize pb-[50px]">
              Increase your team’s productivity and save time with a bot that
              answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-12.png"
                alt=""
                className="col-span-4 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-5.png"
                alt=""
                className="col-span-2 h-[200px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-9.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
              <Image
                width={1024}
                height={768}
                src="/assets/images/services/service-12.png"
                alt=""
                className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
};

export default ServicesPage;
