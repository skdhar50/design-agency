import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";

const TeamPage = () => {
  return (
    <div>
      {/* Title section */}
      <MainTitle title="Team" currentPage="Team" />

      {/* Team section */}
      <div className="bg-white">
      <div className=" h-[850px] container py-[70px] mx-auto">
        <div className="mb-[72px]">
          <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
            Our Team Member
          </p>
          <h2 className="text-[30px] font-[600]">
            Check our awesome team
            <br />
            members
          </h2>
        </div>
        <div className="grid grid-cols-3 h-[520px] gap-[32px]">
          <div className="shadow-lg flex flex-col rounded-[20px] overflow-hidden items-center">
            <Image
              width={900}
              height={600}
              src="/assets/images/team/member-1.png"
              alt=""
              className="rounded-t-[20px] grow object-cover"
            />
            <h1 className="text-[30px] font-[600] text-gray-900 py-[50px]">
              Devon Lane
            </h1>
          </div>
          <div className="shadow-lg flex flex-col rounded-[20px] overflow-hidden items-center">
            <Image
              width={900}
              height={600}
              src="/assets/images/team/member-2.png"
              alt=""
              className="rounded-t-[20px] flip grow object-cover"
            />
            <h1 className="text-[30px] font-[600] text-gray-900 py-[50px]">
              Danny Bailey
            </h1>
          </div>
          <div className="shadow-lg flex flex-col rounded-[20px] overflow-hidden items-center">
            <Image
              width={900}
              height={600}
              src="/assets/images/team/member-3.png"
              alt=""
              className="rounded-t-[20px] grow object-cover"
            />
            <h1 className="text-[30px] font-[600] text-gray-900 py-[50px]">
              Alex Lov
            </h1>
          </div>
        </div>
      </div>
      </div>

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
};

export default TeamPage;
