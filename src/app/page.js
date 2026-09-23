
import Hero from "@/components/homepage/Hero";
import Image from "next/image";

import Appcard from "@/components/homepage/Appcard";

const getApps = async () => {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/data.json`
);

  if (!res.ok) {
    throw new Error("Failed to fetch apps");
  }

  return res.json();
};

const Home = async () => {
  const apps = await getApps();

  return (
    <main>

      <Hero></Hero>

      <section className="py-16">
  <div className="container mx-auto px-4">

    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold">
        Trending Apps
      </h2>

      <p className="mt-3 text-base-content/60">
        Discover the most popular apps loved by users.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {apps.slice(0,6).map((app) => (
        <Appcard key={app.id} app={app} />
      ))}
    </div>

  </div>
</section>
    </main>
  );
};

export default Home;