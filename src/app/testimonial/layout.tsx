import Navbar from "@/components/Navbar";

export async function generateMetadata() {
  const res = await fetch(`${process.env.BASE_URL}/api/SiteMeta/testimonials`);
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

export default function TestimonialPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
}
