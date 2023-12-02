"use client"

function Navbar() {
  return (
    <header className="flex justify-between items-center py-[15px] container mx-auto">
      <div className="logo text-[20px] font-[700]">
        <p className="">
          Design<span className="text-[#F55F1D]">AGENCY</span>
        </p>
      </div>
      <div className="flex gap-[30px] font-[16px]">
        <p className="p-[10px]">Home</p>
        <p className="p-[10px]">Team</p>
        <p className="p-[10px]">Service</p>
        <p className="p-[10px]">Projects</p>
        <p className="p-[10px]">Testimonials</p>
        <p className="p-[10px] rounded-[10px] border-[1px] border-[#20B15A] cursor-pointer">
          Login
        </p>
        <p className="p-[10px] bg-[#20B15A] rounded-[10px] text-white cursor-pointer">
          Register
        </p>
      </div>
    </header>
  );
}

export default Navbar;
