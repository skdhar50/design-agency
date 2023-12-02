import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const ProjectsPage = () => {
  return (
    <div>
      {/* Title section */}
      <MainTitle title="All Project" currentPage="All Project" />

      {/* Sevices section */}
      <div className="bg-white">
        <div className="container py-[70px] mx-auto">
          <div className="mb-[72px]">
            <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
              All Project
            </p>
            <h2 className="text-[30px] font-[600]">
              Better Agency/SEO Solution At
              <br />
              Your Fingertips
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[32px] content-center">
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/projects/all-project-1.png"
                alt=""
                className="object-cover rounded-[20px]"
              />
              <h2 className="text-[26px] font-[600]">
                Lorem ipsum dolor sit consectutar
              </h2>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/projects/all-project-2.png"
                alt=""
                className="object-cover rounded-[20px]"
              />
              <h2 className="text-[26px] font-[600]">
                Lorem ipsum dolor sit consectutar
              </h2>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/projects/all-project-3.png"
                alt=""
                className="object-cover rounded-[20px]"
              />
              <h2 className="text-[26px] font-[600]">
                Lorem ipsum dolor sit consectutar
              </h2>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/projects/all-project-4.png"
                alt=""
                className="object-cover rounded-[20px]"
              />
              <h2 className="text-[26px] font-[600]">
                Lorem ipsum dolor sit consectutar
              </h2>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/projects/all-project-5.png"
                alt=""
                className="object-cover rounded-[20px]"
              />
              <h2 className="text-[26px] font-[600]">
                Lorem ipsum dolor sit consectutar
              </h2>
            </div>
            <div className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]">
              <Image
                width={1024}
                height={768}
                src="/assets/images/projects/all-project-6.png"
                alt=""
                className="object-cover rounded-[20px]"
              />
              <h2 className="text-[26px] font-[600]">
                Lorem ipsum dolor sit consectutar
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
};

export default ProjectsPage;
