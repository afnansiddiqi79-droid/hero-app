import React from "react";
import Image from "next/image";
import Link from "next/link";
import Buttonin from "@/components/Button";

const getApps = async () => {
  try {
   const res = await fetch(
  "https://hero-app-steel.vercel.app/data.json"
);

    if (!res.ok) {
      throw new Error("Failed to fetch apps");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Detailpage = async ({ params }) => {
  const { id } = await params;

  const app = await getApps();

  const r = app.find((item) => item.id === Number(id));

  if (!r) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          App not found
        </h2>

        <Link href="/apps" className="btn btn-primary mt-6">
          Back to Apps
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 py-6 sm:py-10">
      <div className="container mx-auto px-4">

        {/* Back */}
        <Link
          href="/apps"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary sm:mb-7"
        >
          ← Back to Apps
        </Link>

        {/* Main Card */}
        <section className="rounded-2xl bg-base-100 p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">

          {/* App Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            {/* Image */}
            <Image
              src={r.image}
              alt={r.title}
              width={160}
              height={160}
              className="mx-auto h-28 w-28 rounded-2xl object-cover shadow-md sm:h-36 sm:w-36 md:mx-0 md:h-40 md:w-40 md:rounded-3xl"
            />

            {/* Info */}
            <div className="min-w-0 flex-1 text-center md:text-left">

              <p className="text-sm font-semibold text-primary">
                {r.companyName}
              </p>

              <h1 className="mt-1 text-2xl font-bold sm:text-3xl md:text-4xl">
                {r.title}
              </h1>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/60 sm:text-base">
                {r.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">

                <span className="rounded-full bg-warning/10 px-3 py-1.5 text-sm font-bold text-warning">
                  ⭐ {r.ratingAvg}
                </span>

                <span className="text-xs text-base-content/50 sm:text-sm">
                  {r.reviews} reviews
                </span>

              </div>

            </div>

            {/* Install Button */}
            <div className="shrink-0">
             <Buttonin r={r}></Buttonin>
            </div>

          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">

            <div className="rounded-xl bg-base-200 p-4 sm:rounded-2xl sm:p-5">
              <p className="text-xs text-base-content/50 sm:text-sm">
                Downloads
              </p>
              <h3 className="mt-1 text-lg font-bold sm:text-xl">
                {r.downloads}
              </h3>
            </div>

            <div className="rounded-xl bg-base-200 p-4 sm:rounded-2xl sm:p-5">
              <p className="text-xs text-base-content/50 sm:text-sm">
                Reviews
              </p>
              <h3 className="mt-1 text-lg font-bold sm:text-xl">
                {r.reviews}
              </h3>
            </div>

            <div className="rounded-xl bg-base-200 p-4 sm:rounded-2xl sm:p-5">
              <p className="text-xs text-base-content/50 sm:text-sm">
                App Size
              </p>
              <h3 className="mt-1 text-lg font-bold sm:text-xl">
                {r.size} MB
              </h3>
            </div>

            <div className="rounded-xl bg-base-200 p-4 sm:rounded-2xl sm:p-5">
              <p className="text-xs text-base-content/50 sm:text-sm">
                Rating
              </p>
              <h3 className="mt-1 text-lg font-bold sm:text-xl">
                ⭐ {r.ratingAvg}/5
              </h3>
            </div>

          </div>

          {/* About */}
          <div className="mt-8 sm:mt-10">

            <h2 className="text-xl font-bold sm:text-2xl">
              About {r.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-base-content/70 sm:mt-4 sm:text-base">
              {r.description}
            </p>

          </div>

          {/* Reviews Section */}
          <div className="mt-10 sm:mt-12">

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Ratings & Reviews
                </h2>

                <p className="mt-1 text-sm text-base-content/50">
                  See what users think about this app
                </p>
              </div>

              {/* Overall Rating */}
              <div className="flex items-center gap-3 rounded-2xl bg-base-200 px-4 py-3">

                <div className="text-center">
                  <p className="text-2xl font-bold">
                    {r.ratingAvg}
                  </p>

                  <div className="text-sm text-warning">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>

                <div className="text-xs text-base-content/50">
                  <p>Average</p>
                  <p>{r.reviews} reviews</p>
                </div>

              </div>

            </div>

            {/* Rating Bars */}
            <div className="rounded-2xl border border-base-300 bg-base-100 p-4 sm:p-6">

              <div className="space-y-5">

                {r.ratings.map((rating) => (
                  <div
                    key={rating.name}
                    className="flex items-center gap-2 sm:gap-4"
                  >

                    {/* Star */}
                    <span className="w-12 shrink-0 text-xs font-medium sm:w-16 sm:text-sm">
                      {rating.name}
                    </span>

                    {/* Progress */}
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-base-300">
                      <div
                        className="h-full rounded-full bg-warning transition-all"
                        style={{
                          width: `${Math.min(
                            (rating.count / 136000000) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>

                    {/* Count */}
                    <span className="w-16 shrink-0 text-right text-xs font-medium text-base-content/50 sm:w-24 sm:text-sm">
                      {rating.count.toLocaleString()}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col gap-3 border-t border-base-300 pt-6 sm:flex-row sm:items-center sm:justify-between sm:mt-10">

            <p className="text-sm text-base-content/50">
              Ready to try {r.title}?
            </p>

            <Link
              href="/apps"
              className="btn btn-primary rounded-full px-7"
            >
              ← Explore More Apps
            </Link>

          </div>

        </section>
      </div>
    </main>
  );
};

export default Detailpage;