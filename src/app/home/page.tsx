import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import { BrandType } from "./interfaces";
import {
  getBrandListData,
  getFeaturedProjectData,
  getHeroListData,
  getStatListData,
  getWorkListData,
} from "./getData";
import FeaturedProject from "@/components/FeaturedProject";
import StateList from "@/components/StateList";
import WorkList from "@/components/WorkList";
import Hero from "@/components/Hero";

const HomePage = async () => {
  const heroList = await getHeroListData();
  const workList = await getWorkListData();
  const brandList = await getBrandListData();
  const stateList = await getStatListData();
  const featuredProjects = await getFeaturedProjectData();

  return (
    <div>
      {/* Hero section */}
      <Hero heroList={heroList} />

      {/* Brand section */}
      <div className="bg-[#F8FFF9]">
        <div className="h-[120px] flex justify-between items-center mt-[80px] mb-[34px] container mx-auto">
          {brandList?.map((brand: BrandType) => (
            <Image
              key={brand?.id}
              width={124}
              height={90}
              src={brand?.image}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* Work list section */}
      <WorkList workList={workList} />

      {/* State list section */}
      <StateList stateList={stateList} />

      {/* Featured project section */}
      <FeaturedProject featuredProjects={featuredProjects} />

      {/* Subscribe section */}
      <SubscribeForm />
    </div>
  );
};

export default HomePage;
