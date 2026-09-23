import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-base-100">

      {/* Hero */}
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Build
            <br />
            <span className="text-primary">Productive</span> Apps
          </h1>

          {/* Description */}
          <p className="max-w-xl lg:max-w-2xl mx-auto mt-4 sm:mt-5 text-sm sm:text-base text-base-content/60 leading-6">
            Powerful tools and apps designed to make your everyday work
            easier, faster, and more productive.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-5 sm:mt-6 text-sm">
            <span className="flex items-center gap-2">
              🚀 Powerful Apps
            </span>

            <span className="flex items-center gap-2">
              ⚡ Fast & Secure
            </span>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            <Image
              src="/hero.png"
              alt="Productive app preview"
              width={600}
              height={500}
              priority
              className="
                w-[240px]
                sm:w-[300px]
                md:w-[380px]
                lg:w-[480px]
                xl:w-[520px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary text-primary-content mt-0">
        <div className="w-[90%] max-w-5xl mx-auto py-8 sm:py-10 md:py-12">

          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center mt-6 sm:mt-8">

            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">
                20.6M
              </h3>
              <p className="text-xs sm:text-sm opacity-80 mt-1">
                Downloads
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">
                906K
              </h3>
              <p className="text-xs sm:text-sm opacity-80 mt-1">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">
                132+
              </h3>
              <p className="text-xs sm:text-sm opacity-80 mt-1">
                Apps
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;