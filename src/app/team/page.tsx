import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";

interface TeamType {
  id: number;
  name: string;
  bio: string;
  image: string;
}

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/TeamList`);
  if (!res.ok) {
    throw new Error("Team calling fail!");
  }

  return res.json();
}

const TeamPage = async () => {
  const data = await getData();

  return (
    <div>
      {/* Title section */}
      <MainTitle title="Team" currentPage="Team" />

      {/* Team section */}
      <div className="bg-white">
        <div className=" container py-[70px] mx-auto">
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
          <div className="grid grid-cols-3 gap-[32px]">
            {data?.map((member: TeamType, index: number) => (
              <div
                key={member?.id}
                className="shadow-lg flex flex-col rounded-[20px] overflow-hidden items-center"
              >
                <Image
                  width={900}
                  height={600}
                  src={member?.image}
                  alt=""
                  className="rounded-t-[20px] max-h-[550px] object-cover"
                />
                <h1 className="text-[30px] font-[600] text-gray-900 py-[50px]">
                  {member?.name}
                </h1>
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

export default TeamPage;
