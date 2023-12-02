import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="hero grid grid-cols-2 mt-[51px] justify-items-between items-center content-between container mx-auto">
        <div className="flex flex-col justify-start w-3/4">
          <h1 className="text-[50px] font-[700] leading-[65px]">
            Increase Your Customers Loyalty and Satisfaction
          </h1>
          <p className="text-[20px] mt-[10px]">
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </p>
          <button className="mt-[50px] text-[20px] text-white rounded-[16px] bg-[#20B15A] w-fit px-[30px] py-[20px]">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
          <Image
            src="/assets/images/hero/hero-1.png"
            alt=""
            width={1024}
            height={768}
            className="col-span-4 h-[300px] w-full rounded-[10px] object-cover"
          />
          <Image
            src="/assets/images/hero/hero-2.png"
            alt=""
            width={1024}
            height={768}
            className="col-span-2 h-[300px] w-full rounded-[10px] object-cover"
          />
          <Image
            src="/assets/images/hero/hero-3.png"
            alt=""
            width={1024}
            height={768}
            className="col-span-2 h-[250px] w-full rounded-[10px] object-cover"
          />
          <Image
            src="/assets/images/hero/hero-4.png"
            alt=""
            width={1024}
            height={768}
            className="col-span-4 h-[250px] w-full rounded-[10px] object-cover"
          />
        </div>
      </div>

    {/* Company section */}
      <div className="bg-[#F8FFF9]">
        <div className="h-[120px] flex justify-between items-center mt-[80px] mb-[34px] container mx-auto">
          <Image
            width={124}
            height={90}
            src="/assets/logos/google.svg"
            alt=""
          />
          <Image
            width={124}
            height={90}
            src="/assets/logos/monday.svg"
            alt=""
          />
          <Image
            width={124}
            height={90}
            src="/assets/images/slack.png"
            alt=""
          />
          <Image
            width={124}
            height={90}
            src="/assets/images/notion.png"
            alt=""
          />
          <Image
            width={124}
            height={90}
            src="/assets/images/trello.png"
            alt=""
          />
        </div>
      </div>

    {/* Work list section */}
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
            <div className="flex flex-col gap-[15px] px-[30px] py-[50px]">
              <Image
                width={60}
                height={60}
                src="./assets/logos/activity.svg"
                className="bg-[#D7F5DC] p-[30px] rounded-[20px] w-[90px] h-[90px]"
                alt=""
              />
              <h3 className="text-[24px] font-[600]">Grow Your Business</h3>
              <p className="text-[18px] font-[400]">
                We help identify the best ways to improve your business
              </p>
              <button className="px-[20px] py-[15px] flex items-center justify-center w-fit gap-[10px] mt-[28px]">
                Learn More{" "}
                <Image
                  width={60}
                  height={60}
                  src="./assets/logos/arrow.svg"
                  className="w-[16px] h-[16px]"
                  alt=""
                />
              </button>
            </div>
            <div className="flex flex-col gap-[15px] px-[30px] py-[50px]">
              <Image
                width={60}
                height={60}
                src="./assets/logos/heart.svg"
                className="bg-[#D7F5DC] p-[30px] rounded-[20px] w-[90px] h-[90px]"
                alt=""
              />
              <h3 className="text-[24px] font-[600]">Improve brand loyalty</h3>
              <p className="text-[18px] font-[400]">
                We help identify the best ways to improve your business
              </p>
              <button className="px-[20px] py-[15px] flex items-center justify-center w-fit gap-[10px] mt-[28px]">
                Learn More{" "}
                <Image
                  width={60}
                  height={60}
                  src="./assets/logos/arrow.svg"
                  className="w-[16px] h-[16px]"
                  alt=""
                />
              </button>
            </div>
            <div className="flex flex-col gap-[15px] px-[30px] py-[50px]">
              <Image
                width={60}
                height={60}
                src="./assets/logos/work.svg"
                className="bg-[#D7F5DC] p-[30px] rounded-[20px] w-[90px] h-[90px]"
                alt=""
              />
              <h3 className="text-[24px] font-[600]">Improve Business Model</h3>
              <p className="text-[18px] font-[400]">
                We help identify the best ways to improve your business
              </p>
              <button className="px-[20px] py-[15px] flex items-center justify-center w-fit gap-[10px] mt-[28px]">
                Learn More{" "}
                <Image
                  width={60}
                  height={60}
                  src="./assets/logos/arrow.svg"
                  className="w-[16px] h-[16px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-[66px] grid grid-cols-4 gap-[30px]">
          <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
            <Image
              width={90}
              height={90}
              src="./assets/logos/group.svg"
              alt=""
              className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
            />
            <h2 className="text-[30px] font-[600] mt-[22px]">240452</h2>
            <p className="text-[16px] mt-[4px]">Followers</p>
          </div>
          <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
            <Image
              width={90}
              height={90}
              src="./assets/logos/like.svg"
              alt=""
              className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
            />
            <h2 className="text-[30px] font-[600] mt-[22px]">6300</h2>
            <p className="text-[16px] mt-[4px]">Solved Problems</p>
          </div>
          <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
            <Image
              width={90}
              height={90}
              src="./assets/logos/happy.svg"
              alt=""
              className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
            />
            <h2 className="text-[30px] font-[600] mt-[22px]">25000</h2>
            <p className="text-[16px] mt-[4px]">Happy Customers</p>
          </div>
          <div className="w-[290px] h-[290px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
            <Image
              width={90}
              height={90}
              src="./assets/logos/scan.svg"
              alt=""
              className="p-[30px] bg-[#D7F5DC] rounded-[10px]"
            />
            <h2 className="text-[30px] font-[600] mt-[22px]">360452</h2>
            <p className="text-[16px] mt-[4px]">Projects</p>
          </div>
        </div>
      </div>

      {/* Featured project section */}
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
                src="/assets/images/project-1.png"
                width={1024}
                height={768}
                alt=""
                className="h-auto grow rounded-[20px] object-cover"
              />
              <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
                App Design - June 20, 2022
              </h3>
              <h2 className="text-[#2E3E5C] text-[24px] font-[700]">
                App Redesign
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-[30px] justify-items-between items-center">
              <div className="">
                <Image
                  src="/assets/images/project-2.png"
                  width={1024}
                  height={768}
                  alt=""
                  className="h-auto rounded-[20px] object-cover"
                />
                <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
                  App Design - June 20, 2022
                </h3>
                <h2 className="text-[#2E3E5C] text-[18px] font-[700]">
                  Redesign channel website landng page
                </h2>
              </div>
              <div className="">
                <Image
                  src="/assets/images/project-3.png"
                  width={1024}
                  height={768}
                  alt=""
                  className="h-auto rounded-[20px] object-cover"
                />
                <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
                  App Design - June 20, 2022
                </h3>
                <h2 className="text-[#2E3E5C] text-[18px] font-[700]">
                  Redesign channel website landng page
                </h2>
              </div>
              <div className="">
                <Image
                  src="/assets/images/project-4.png"
                  width={1024}
                  height={768}
                  alt=""
                  className="h-auto rounded-[20px] object-cover"
                />
                <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
                  App Design - June 20, 2022
                </h3>
                <h2 className="text-[#2E3E5C] text-[18px] font-[700]">
                  Redesign channel website landng page
                </h2>
              </div>
              <div className="">
                <Image
                  src="/assets/images/project-5.png"
                  width={1024}
                  height={768}
                  alt=""
                  className="h-auto rounded-[20px] object-cover"
                />
                <h3 className="text-[#2E3E5C] text-[14px] mt-[12px] mb-[8px] opacity-[0.8]">
                  App Design - June 20, 2022
                </h3>
                <h2 className="text-[#2E3E5C] text-[18px] font-[700]">
                  Redesign channel website landng page
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
}

export default HomePage;