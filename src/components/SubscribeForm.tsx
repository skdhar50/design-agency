function SubscribeForm() {
  return (
    <div className="h-[500px] bg-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[600px]">
        <p className="text-[20px] uppercase text-[#20B15A] mb-[22px]">
          SUBSCRIBE
        </p>
        <h2 className="text-[30px] font-[600] text-center capitalize">
          Subscribe to get the latest
          <br /> news about us
        </h2>
        <p className="text-[#8B8B8] text-[16px] capitalize mt-[5px] mb-[40px]">
          Please drop your email below to get daily update about what we do
        </p>
        <div className="w-full h-fit relative">
          <input
            type="email"
            name=""
            className="ring-1 ring-black rounded-[14px] pl-[16px] py-[20px] pr-[140px] w-full relative placeholder:text-[#8B8B8B] placeholder:text-[16px] placeholder:font-[600]"
            placeholder="Enter Your Email Address"
            id=""
          />
          <button className="bg-[#F55F1D] rounded-[14px] text-[16px] text-white font-[500] px-[24px] py-[9px] absolute end-1 inset-y-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
