
import Appcard from "@/components/homepage/Appcard";

const getApps = async () => {
  try {
    const res = await fetch("http://localhost:3000/data.json");

    if (!res.ok) {
      throw new Error("Failed to fetch apps");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Home = async () => {
  const apps = await getApps();

  return (
    <main>

      <section className="py-16">
  <div className="container mx-auto px-4">

    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold">
        All Apps
      </h2>

      <p className="mt-3 text-base-content/60">
        Enjoy Apps Where YOU Find Every Apps Free.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {apps.map((app) => (
        <Appcard key={app.id} app={app} />
      ))}
    </div>

  </div>
</section>
    </main>
  );
};

export default Home;