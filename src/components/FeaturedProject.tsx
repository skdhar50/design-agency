import { FeaturedProjectType } from "@/app/home/interfaces";
import Image from "next/image";
import moment from "moment";

interface PropsType {
  featuredProjects: FeaturedProjectType[];
}

function FeaturedProject({ featuredProjects }: PropsType) {
  return (
    <div className="bg-[#F0FDF4]">
      <div className="container mx-auto pt-[62px] pb-[84px]">
        <div className="mb-[72px]">
          <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
            Featured Project
          </p>
          <h2 className="text-[30px] font-[600]">
            We provide the Perfect Solution
            <br />
            to your business growth
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[30px] justify-items-between items-stretch">
          <div className="flex flex-col">
            <Image
              src={featuredProjects[0]?.image}
              width={1024}
              height={768}
              alt=""
              className="h-auto grow rounded-[20px] object-cover"
            />
            <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
              App Design -{" "}
              {moment(featuredProjects[0]?.created_at).format("LL")}
            </h3>
            <h2 className="text-[#2E3E5C] text-[24px] font-[700]">
              {featuredProjects[0]?.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[30px] justify-items-between items-center">
            {featuredProjects?.map(
              (project: FeaturedProjectType, index: number) =>
                index > 0 && (
                  <div key={project?.id} className="">
                    <Image
                      src={project?.image}
                      width={1024}
                      height={768}
                      alt=""
                      className="h-auto rounded-[20px] object-cover"
                    />
                    <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
                      App Design - {moment(project?.created_at).format("LL")}
                    </h3>
                    <h2 className="text-[#2E3E5C] text-[18px] font-[700]">
                      {project?.title}
                    </h2>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
