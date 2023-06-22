const SectionHome = () => {
  return (
    <section className="">
      <div className="flex justify-center">
        <div className="container absolute z-0 grid grid-cols-1 sm:grid-cols-1">
          <div className="hero min-h-screen pb-40">
            <div className="hero-content text-center">
              <div className="max-w-2xl">
                <div className="grid grid-cols-2 items-end">
                  <span className="pl-19 flex flex-nowrap text-8xl text-lime-400">
                    <div>
                      <div className="absolute z-10 font-custom">Hi</div>
                      <div className="z-0 pl-1 pt-1 font-custom text-amber-600">
                        Hi
                      </div>
                    </div>
                    <h1 className="flex">
                      {' '}
                      <span className="animate-waving-hand pl-1 pt-2 text-4xl">
                        👋🏻
                      </span>
                    </h1>
                    <span className="self-end font-custom text-2xl text-cyan-500">
                      I&apos;M
                    </span>
                  </span>
                  <div className="w-fit pt-2">
                    <div className="flex h-5 w-full items-center justify-start space-x-1.5 rounded-t-xl bg-slate-600 px-2 pt-1">
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    </div>
                    <div className="w-full rounded-b-xl border-t-0 bg-slate-600 px-2 pb-1 text-white">
                      <pre>
                        <code className="font-custom text-3xl">
                          kfir avraham;
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <h1 className="customclass py-6 text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  WEB DEVELOPER
                </h1>
                <button className="btn-primary btn animate-bounce">
                  Get Start ed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background */}
      <div className="z-0 flex h-screen bg-slate-900">
        <div className="flex flex-1 bg-slate-100">
          <div className="flex h-1/6 w-full flex-col self-end bg-amber-800"></div>
        </div>
        <div className="flex  w-17/24 bg-lime-300">
          <div className="flex h-1/6 w-full flex-col self-end bg-amber-600"></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-10 grid w-full grid-rows-1 content-end">
        <div className="flex h-40">
          <div className="flex-1 bg-pink-600 opacity-50"></div>
          <div className="w-2/3 bg-pink-600"></div>
        </div>
      </div>
      <div className="maskImg relative h-40 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black">
        <p className="bg-">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        </p>
      </div>
    </section>
  );
};

export default SectionHome;
