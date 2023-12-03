import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import React from "react";

interface ProjectsType {
  id: number;
  title: string;
  image: string;
  live: string;
  remark: string;
}

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/AllProject`);
  if (!res.ok) {
    throw new Error("Team calling fail!");
  }

  return res.json();
}

const ProjectsPage = async () => {
  const data = await getData();

  return (
    <div>
      {/* Title section */}
      <MainTitle title="All Project" currentPage="All Project" />

      {/* Projects section */}
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
            {data?.map((project: ProjectsType, index: number) => (
              <div
                key={project?.id}
                className="shadow-lg bg-white rounded-[20px] px-[30px] py-[40px] flex flex-col gap-[30px]"
              >
                <Image
                  width={1024}
                  height={768}
                  src={project?.image}
                  alt=""
                  className="object-cover rounded-[20px]"
                />
                <h2 className="text-[26px] font-[600]">{project?.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
};

export default ProjectsPage;
