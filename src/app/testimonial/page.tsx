import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";

interface TestimonialType {
  id: number;
  name: string;
  image: string;
  msg: string;
  designation: string;
}

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/TestimonialList`);
  if (!res.ok) {
    throw new Error("Testimonial calling fail!");
  }

  return res.json();
}

const TestimonialPage = async () => {
  const data = await getData();

  return (
    <div>
      {/* Title section */}
      <MainTitle title="Testimonial List" currentPage="Testimonial List" />

      {/* Sevices section */}
      <div className="bg-white">
        <div className="container py-[70px] mx-auto">
          <div className="mb-[72px]">
            <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
              Testimonial List
            </p>
            <h2 className="text-[30px] font-[600]">
              Better Agency/SEO Solution At
              <br />
              Your Fingertips
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[32px] content-center">
            {data?.map((testimonial: TestimonialType) => (
              <div
                key={testimonial?.id}
                className="shadow-lg bg-white rounded-[20px] px-[30px] h-[450px] py-[40px] flex flex-col gap-[40px] justify-center items-center"
              >
                <Image
                  width={900}
                  height={600}
                  src={testimonial.image}
                  alt="Testimonial image"
                  className="object-cover rounded-[20px] w-[100px] h-[100px]"
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[16px] font-[400] text-[#9D9D9D] capitalize text-center leading-[26px]">
                    {testimonial?.msg}
                  </p>
                  <h2 className="text-[26px] font-[600] uppercase mt-[26px]">
                    {testimonial?.name}
                  </h2>
                  <h3 className="text-[16px] font-[400] mt-[10px]">
                    {testimonial?.designation}
                  </h3>
                </div>
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

export default TestimonialPage;
