const IntroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[312px] mx-auto md:max-w-[680px]">
      <p className="text-gray-900/60 text-xs box-border caret-transparent tracking-[0.6px] leading-[18px] uppercase mb-6 md:text-sm md:leading-5 md:mb-8">
        We are Exness
      </p>
      <h2 className="text-2xl font-medium box-border caret-transparent leading-8 mb-6 font-poppins md:text-[32px] md:leading-[44px] md:mb-8">
        Redefining finance through transparency and innovation
      </h2>
      <div className="box-border caret-transparent">
        <p className="text-gray-900/60 text-base box-border caret-transparent leading-[22px] md:text-lg md:leading-6">
          Exness is a global financial services provider and market maker, offering secure access to
          capital markets with institutional-grade liquidity and proprietary technology. We deliver
          multi-asset solutions, tailored investment management, and a stable, innovative
          environment, setting new standards in global finance.
        </p>
      </div>
      <div className="box-border caret-transparent mt-6 md:mt-8">
        <a
          title="Exness | About Us – A Global Leader in Financial Services"
          href="/about/"
          className="relative font-semibold items-center backdrop-blur-[10px] bg-slate-500/10 box-border caret-transparent inline-flex justify-center tracking-[0.3px] min-h-12 min-w-[100px] align-middle border px-6 py-[7px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent hover:bg-slate-500/10 hover:border-slate-400"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="relative bg-cover box-border caret-transparent bg-center mx-6 my-16 md:mx-[84px] md:my-32">
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1032px]">
        <div className="box-border caret-transparent text-center">
          <IntroContent />
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
