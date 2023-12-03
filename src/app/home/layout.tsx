import Navbar from "@/components/Navbar";
import React from "react";

export async function generateMetadata() {
  const res = await fetch(`${process.env.BASE_URL}/api/SiteMeta/home`);
  const JSON = await res.json();

  return {
    title: JSON[0]?.title,
    description: JSON[0]?.description,
    keywords: JSON[0].keywords,
    openGraph: {
      images: JSON[0]?.image,
    },
  };
}

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-gradient-to-b from-[#D7F5DC] to-[#D7F5DC]">
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;
