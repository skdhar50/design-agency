import MainTitle from "@/components/MainTitle";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";

interface ServicesType {
  id: number;
  tag: string;
  title: string;
  des: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/AllService`);
  if (!res.ok) {
    throw new Error("Testimonial calling fail!");
  }

  return res.json();
}

const ServicesPage = async () => {
  const data = await getData();

  return (
    <div>
      {/* Title section */}
      <MainTitle title="Our Services" currentPage="Our Services" />

      {/* Services section */}
      <div className="bg-white">
        <div className="py-[70px] container mx-auto">
          <div className="mb-[72px]">
            <p className="text-[20px] uppercase text-[#20B15A] mb-[15px]">
              Our All Services
            </p>
            <h2 className="text-[30px] font-[600]">
              We Provide BestWeb design
              <br />
              services
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[32px] content-center">
            {data?.map((service: ServicesType) => (
              <div
                key={service?.id}
                className="rounded-[20px] shadow-lg h-fit overflow-hidden px-[30px] py-[40px]"
              >
                <h3 className="text-[26px] font-[600] uppercase pb-[20px]">
                  {service?.title}
                </h3>
                <p className="text-[#9D9D9D] text-[16px] font-[400] capitalize pb-[50px]">
                  {service?.des}
                </p>
                <div className="grid grid-cols-6 gap-x-[30px] gap-y-[20px]">
                  <Image
                    width={1024}
                    height={768}
                    src={service?.image1}
                    alt=""
                    className="col-span-4 h-[200px] w-full rounded-[10px] object-cover"
                  />
                  <Image
                    width={1024}
                    height={768}
                    src={service?.image2}
                    alt=""
                    className="col-span-2 h-[200px] w-full rounded-[10px] object-cover"
                  />
                  <Image
                    width={1024}
                    height={768}
                    src={service?.image3}
                    alt=""
                    className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
                  />
                  <Image
                    width={1024}
                    height={768}
                    src={service?.image1}
                    alt=""
                    className="col-span-3 h-[250px] w-full rounded-[10px] object-cover"
                  />
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

export default ServicesPage;
