"use client";
import UninstallButton from "@/components/UninstallButton";
import React, { useContext } from "react";
import Link from "next/link";
import Appcard from "@/components/homepage/Appcard";
import { Appcontext } from "@/context/Appcontext";

const Installpage = () => {
  const { installapp } = useContext(Appcontext);

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-14">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Your Collection
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Your Installed Apps
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-base-content/60 sm:text-base">
            All the apps you have installed are collected here.
            Manage and explore your installed apps anytime.
          </p>
        </div>

        {/* Installed Apps */}
        {installapp && installapp.length > 0 ? (
          <>
            {/* Count */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold sm:text-xl">
                Installed Apps
              </h2>

              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {installapp.length}{" "}
                {installapp.length === 1 ? "App" : "Apps"}
              </span>
            </div>

            {/* Cards */}
            
             <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
  {installapp.map((app) => (
    <div key={app.id} className="flex flex-col">
      <Appcard app={app} />

      <div className="mt-3 flex justify-center">
        <UninstallButton app={app} />
      </div>
    </div>
  ))}
</div>
          </>
        ) : (
          /* Empty State */
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-base-100 p-8 text-center shadow-sm sm:p-10">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
                📱
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                No Installed Apps
              </h2>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                You haven't installed any apps yet. Explore our collection
                and install your favorite apps.
              </p>

              <Link
                href="/apps"
                className="btn btn-primary mt-6 rounded-full px-7"
              >
                Explore Apps
              </Link>

            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default Installpage;