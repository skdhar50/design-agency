import { FaGreaterThan } from "react-icons/fa6";

interface Props {
  title: string;
  currentPage: string;
}

function MainTitle({ title, currentPage }: Props) {
  return (
    <div className="bg-gray-100 flex justify-center items-center mx-auto">
      <div className="h-[275px] pt-[100px] pb-[80px] container">
        <h1 className="text-gray-900 text-[40px] font-[600] pb-[15px]">
          {title}
        </h1>
        <div className="text-[16px] text-gray-900 font-[600] flex justify-start items-center gap-[15px]">
          <p className="">Home</p>
          <FaGreaterThan />
          <p className="text-[#20B15A]">{currentPage}</p>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
