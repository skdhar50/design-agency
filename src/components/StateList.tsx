import { StateListType } from "@/app/home/interfaces";
import Image from "next/image";

interface PropsType {
  stateList: StateListType;
}

function StateList({ stateList }: PropsType) {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-[66px] grid grid-cols-4 gap-[30px]">
        <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
          <Image
            width={90}
            height={90}
            src={`/assets/logos/state-1.svg`}
            alt=""
            className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
          />
          <h2 className="text-[30px] font-[600] mt-[22px]">
            {stateList?.followers}
          </h2>
          <p className="text-[16px] mt-[4px]">Followers</p>
        </div>
        <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
          <Image
            width={90}
            height={90}
            src="./assets/logos/state-2.svg"
            alt=""
            className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
          />
          <h2 className="text-[30px] font-[600] mt-[22px]">
            {stateList?.solved}
          </h2>
          <p className="text-[16px] mt-[4px]">Solved Problems</p>
        </div>
        <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
          <Image
            width={90}
            height={90}
            src="./assets/logos/state-3.svg"
            alt=""
            className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
          />
          <h2 className="text-[30px] font-[600] mt-[22px]">
            {stateList?.customers}
          </h2>
          <p className="text-[16px] mt-[4px]">Happy Customers</p>
        </div>
        <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
          <Image
            width={90}
            height={90}
            src="./assets/logos/state-4.svg"
            alt=""
            className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
          />
          <h2 className="text-[30px] font-[600] mt-[22px]">
            {stateList?.projects}
          </h2>
          <p className="text-[16px] mt-[4px]">Projects</p>
        </div>
      </div>
    </div>
  );
}

export default StateList;
