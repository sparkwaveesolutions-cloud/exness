const PartnershipsContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[312px] mx-auto md:max-w-[680px]">
      <p className="text-gray-100/60 text-xs box-border caret-transparent tracking-[0.6px] leading-[18px] uppercase mb-6 md:text-sm md:leading-5 md:mb-8">
        Global partnerships
      </p>
      <h2 className="text-2xl font-medium box-border caret-transparent leading-8 mb-6 font-poppins md:text-[32px] md:leading-[44px] md:mb-8">
        Building alliances with shared values
      </h2>
      <div className="box-border caret-transparent">
        <p className="text-gray-100/60 text-base box-border caret-transparent leading-[22px] md:text-lg md:leading-6">
          Our recent partnerships with LALIGA and Real Madrid showcase our global presence and
          commitment to engaging with communities and partnering with brands that share our values.
          These alliances reflected Exness’s dedication to integrity, performance, and community
          impact, reinforcing our position as a trusted leader with a global footprint.
        </p>
      </div>
      <div className="box-border caret-transparent mt-6 md:mt-8">
        <a
          title="Exness Media Room | Latest News & Press Releases"
          href="/"
          className="relative font-semibold items-center backdrop-blur-[10px] bg-slate-500/20 box-border caret-transparent inline-flex justify-center tracking-[0.3px] min-h-12 min-w-[100px] align-middle border px-6 py-[7px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent hover:bg-slate-500/20 hover:border-slate-400"
        >
          Explore partnerships
        </a>
      </div>
    </div>
  );
};

const PartnershipsSection = () => {
  return (
    <section className="relative text-gray-100 bg-slate-950 bg-cover box-border caret-transparent bg-center px-6 py-16 md:px-[84px] md:py-32">
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1032px]">
        <div className="box-border caret-transparent text-center">
          <PartnershipsContent />
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
