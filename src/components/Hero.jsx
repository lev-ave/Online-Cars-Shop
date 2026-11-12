function Hero () {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-white md:px-12 md:py-24">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-black/40 blur-[90px]"></div>
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-black/40 blur-[90px]"></div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="z-10">
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-7xl"> Find your <p className="text-red-500"> perfect drive. </p></h1>
          <p className="mt-6 max-w-lg text-base text-gray-400 sm:text-lg"> Discover premium cars, compare your favorite models, and drive home with confidence. Your dream car is closer than you think. </p>
          <div className="mt-10 flex flex-wrap lg:gap-x-8 gap-x-4 gap-y-4 ">
            <div className="flex items-center justify-center flex-col">
              <p className="text-xl font-bold"> 1200+ </p>
              <p className="mt-1 text-sm text-gray-500"> Cars available </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-xl font-bold"> 500+ </p>
              <p className="mt-1 text-sm text-gray-500"> Happy customers </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-xl font-bold"> 100% </p>
              <p className="mt-1 text-sm text-gray-500"> Trusted service </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-600/10 blur-3xl" />
          <img src="images/herocars.png" className="relative z-10 w-full rounded-2xl object-cover shadow-2xl md:rotate-2"/>
          <div className="absolute -bottom-5 left-3 z-20 rounded-2xl border border-white/10 bg-[#1b1c20] p-4 shadow-xl sm:left-0 sm:p-5">
            <p className="text-xs text-gray-400"> Find your next favorite </p>
            <p className="mt-1 text-lg font-bold"> Premium Collection </p>
            <p className="mt-1 text-sm text-red-400"> Quality meets performance. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;