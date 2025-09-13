const CareersContent = () => {
  return (
    <div className="relative items-center bg-slate-950 box-border caret-transparent gap-x-8 flex flex-col justify-normal gap-y-8 text-center z-[1] p-6 rounded-lg md:gap-x-12 md:flex-row md:justify-between md:gap-y-12 md:text-start md:p-8">
      <div className="box-border caret-transparent text-center md:text-start">
        <h2 className="text-2xl font-medium box-border caret-transparent leading-8 text-center mb-2 font-poppins md:text-[32px] md:leading-[44px] md:text-start md:mb-4">
          Shape your future with Exness
        </h2>
        <p className="text-gray-100/60 text-base box-border caret-transparent leading-[22px] text-center md:text-lg md:leading-6 md:text-start">
          Start your journey toward a fulfilling career with us, where growth, innovation, and a
          supportive culture fuel every day. Join a global team dedicated to doing more, being more,
          and growing together—explore our career opportunities today.
        </p>
      </div>
      <div className="items-stretch box-border caret-transparent gap-x-4 flex flex-col shrink gap-y-4 text-center md:items-center md:flex-row md:shrink-0 md:text-start">
        <a
          href="/"
          className="relative font-semibold items-center backdrop-blur-[10px] bg-slate-500/20 box-border caret-transparent flex justify-center tracking-[0.3px] min-h-12 min-w-[100px] text-center align-middle border px-6 py-[7px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent hover:bg-slate-500/20 hover:border-slate-400"
        >
          View open positions
        </a>
      </div>
    </div>
  );
};

 const CareersSection = () => {
  return (
    <section
      id="careers"
      className="relative text-gray-100 bg-cover box-border caret-transparent bg-center pt-36 px-6 md:pt-48 md:px-[84px]"
    >
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1032px]">
        <div className="absolute box-border caret-transparent h-72 overflow-hidden top-0 inset-x-0">
          <div className="box-border caret-transparent pt-[80%] md:pt-[20%]"></div>
          <picture className="box-border caret-transparent">
            <img
              src="/Images/ctp.jpeg"
              sizes="100vw"
              alt="corp-cta-banner.jpg"
              className="absolute box-border caret-transparent h-full object-cover w-full inset-0"
            />
          </picture>
        </div>
        <CareersContent />
      </div>
    </section>
  );
};
export default CareersSection;