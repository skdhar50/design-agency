import { WorkListType } from "@/app/home/interfaces";
import Image from "next/image";

interface PropsType {
  workList: WorkListType[];
}

function WorkList({ workList }: PropsType) {
  return (
    <div className="bg-white">
      <div className="py-[67px] container mx-auto">
        <div className="mb-[40px]">
          <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
            Work List
          </p>
          <h2 className="text-[30px] font-[600]">
            We provide the Perfect Solution
            <br />
            to your business growth
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-[45px] justify-items-between items-center">
          {workList?.map((item: WorkListType, index: number) => (
            <div
              key={item?.id}
              className="flex flex-col gap-[15px] px-[30px] py-[50px]"
            >
              <Image
                width={60}
                height={60}
                src={`/assets/logos/worklist-${index + 1}.svg`}
                className="bg-[#D7F5DC] p-[30px] rounded-[20px] w-[90px] h-[90px]"
                alt=""
              />
              <h3 className="text-[24px] font-[600]">{item?.title}</h3>
              <p className="text-[18px] font-[400]">{item?.des}</p>
              <button className="px-[20px] py-[15px] flex items-center justify-center w-fit gap-[10px] mt-[28px]">
                Learn More
                <Image
                  width={60}
                  height={60}
                  src="./assets/logos/arrow.svg"
                  className="w-[16px] h-[16px]"
                  alt=""
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkList;
