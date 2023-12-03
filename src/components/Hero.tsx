import { HeroType } from "@/app/home/interfaces";
import Image from "next/image";

interface PropsType {
  heroList: HeroType;
}

function Hero({ heroList }: PropsType) {
  return (
    <div className="hero grid grid-cols-2 pt-[51px] justify-items-between items-center content-between container mx-auto">
      <div className="flex flex-col justify-start w-3/4">
        <h1 className="text-[50px] font-[700] leading-[65px]">
          {heroList?.title}
        </h1>
        <p className="text-[20px] mt-[10px]">{heroList?.description}</p>
        <button className="mt-[50px] text-[20px] text-white rounded-[16px] bg-[#20B15A] w-fit px-[30px] py-[20px]">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
        <Image
          src={heroList?.image1}
          alt=""
          width={1024}
          height={768}
          className="col-span-4 h-[300px] w-full rounded-[10px] object-cover"
        />
        <Image
          src={heroList?.image2}
          alt=""
          width={1024}
          height={768}
          className="col-span-2 h-[300px] w-full rounded-[10px] object-cover"
        />
        <Image
          src={heroList?.image3}
          alt=""
          width={1024}
          height={768}
          className="col-span-2 h-[250px] w-full rounded-[10px] object-cover"
        />
        <Image
          src={heroList?.image4}
          alt=""
          width={1024}
          height={768}
          className="col-span-4 h-[250px] w-full rounded-[10px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
