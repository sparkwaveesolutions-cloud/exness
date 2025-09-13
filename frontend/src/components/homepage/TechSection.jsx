const TechContent = () => {
  return (
    <div className="box-border caret-transparent col-start-[span_6] px-6 py-16 md:px-[84px] md:py-32">
      <div className="box-border caret-transparent max-w-[312px] text-center mx-auto md:max-w-none md:text-left">
        <div className="box-border caret-transparent text-center mx-auto md:text-left">
          <p className="text-gray-900/60 text-xs box-border caret-transparent tracking-[0.6px] leading-[18px] text-center uppercase mb-6 md:text-sm md:leading-5 md:text-left md:mb-8">
            Technology &amp; innovation
          </p>
          <h2 className="text-2xl font-medium box-border caret-transparent leading-8 text-center mb-6 font-poppins md:text-[32px] md:leading-[44px] md:text-left md:mb-8">
            Innovative solutions powered by advanced technology
          </h2>
          <div className="box-border caret-transparent text-center md:text-left">
            <p className="text-gray-900/60 text-base box-border caret-transparent leading-[22px] text-center md:text-lg md:leading-6 md:text-left">
              Our proprietary algorithms drive intelligent decision-making, enabling us to deliver
              top-tier trading, market-making, and liquidity solutions for our clients. Paired with
              our secure, low-latency infrastructure, we ensure seamless and efficient market access
              globally. For us, innovation isn’t just a feature; it’s a fundamental commitment to
              shaping the future of finance.
            </p>
          </div>
          <div className="box-border caret-transparent text-center mt-6 md:text-left md:mt-8">
            <a
              title="Exness | Innovative Technology Powering the Future of Finance"
              href="/technology/"
              className="relative font-semibold items-center backdrop-blur-[10px] bg-slate-500/10 box-border caret-transparent inline-flex justify-center tracking-[0.3px] min-h-12 min-w-[100px] text-center align-middle border px-6 py-[7px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent hover:bg-slate-500/10 hover:border-slate-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const TechVideo = () => {
  return (
    <div
      id="tech"
      className="aspect-square box-border caret-transparent col-start-[span_6] h-full max-w-full order-1 md:aspect-[1.33333_/_1] md:order-none"
    >
      {/* <video
        autoPlay
        loop=""
        playsinline=""
        src="/ts.mp4"
        className="box-border caret-transparent h-full object-cover w-full"
      ></video> */}
      <video
        className="box-border caret-transparent h-full object-cover w-full"
        autoPlay
        playsInline
        muted
        loop
        src="/ts.mp4"
      />
    </div>
  );
};

const TechSection = () => {
  return (
    <section className="relative bg-cover box-border caret-transparent bg-center">
      <div className="items-center box-border caret-transparent gap-x-0 grid grid-cols-[repeat(6,1fr)] gap-y-0 md:grid-cols-[repeat(12,1fr)]">
        <TechContent />
        <TechVideo />
      </div>
    </section>
  );
};
export default TechSection;
