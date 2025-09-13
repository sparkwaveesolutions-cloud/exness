const CSRContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[312px] mx-auto md:max-w-[680px]">
      <p className="text-gray-900/60 text-xs box-border caret-transparent tracking-[0.6px] leading-[18px] uppercase mb-6 md:text-sm md:leading-5 md:mb-8">
        Social responsibility
      </p>
      <h2 className="text-2xl font-medium box-border caret-transparent leading-8 mb-6 font-poppins md:text-[32px] md:leading-[44px] md:mb-8">
        Leading with purpose and care
      </h2>
      <div className="box-border caret-transparent">
        <p className="text-gray-900/60 text-base box-border caret-transparent leading-[22px] md:text-lg md:leading-6">
          Our Corporate Social Responsibility (CSR) initiatives reflect our commitment to
          sustainability, community development, and employee welfare. From providing scholarships
          and educational supplies to supporting disaster relief and environmental cleanups, our
          initiatives emphasize ethical responsibility.
        </p>
      </div>
      <div className="box-border caret-transparent mt-6 md:mt-8">
        <a
          title="Exness | Corporate Social Responsibility & Community Impact"
          href="/social-responsibility/"
          className="relative font-semibold items-center backdrop-blur-[10px] bg-slate-500/10 box-border caret-transparent inline-flex justify-center tracking-[0.3px] min-h-12 min-w-[100px] align-middle border px-6 py-[7px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent hover:bg-slate-500/10 hover:border-slate-400"
        >
          Learn more about CSR
        </a>
      </div>
    </div>
  );
};

const CSRStatItem = (props) => {
  const HeadingTag = props.headingLevel;

  return (
    <div className="items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 p-4 md:p-5">
      <HeadingTag className="text-2xl font-medium box-border caret-transparent leading-8 font-poppins md:text-[32px] md:leading-[44px]">
        {props.statValue}
      </HeadingTag>
      <div className="items-center box-border caret-transparent gap-x-2 flex justify-center gap-y-2">
        <p className="text-gray-900/60 text-sm box-border caret-transparent leading-5 text-center md:text-base md:leading-[22px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

const CSRStats = () => {
  return (
    <div className="box-border caret-transparent grid auto-rows-[1fr] grid-cols-[1fr] gap-y-[normal] md:grid-cols-[1px_1fr_1px_1fr_1px_1fr_1px_1fr_1px] md:gap-y-8">
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full min-h-0 min-w-0 border-gray-900/10 border-l-0 border-y-0 border-solid md:block md:min-h-[auto] md:min-w-[auto]" />
      <CSRStatItem statValue="100+" description="completed CSR activities" headingLevel="h4" />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full min-h-0 min-w-0 border-gray-900/10 border-l-0 border-y-0 border-solid md:block md:min-h-[auto] md:min-w-[auto]" />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full border-gray-900/10 border-l-0 border-y-0 border-solid" />
      <CSRStatItem
        statValue="1.1M €"
        description="donated for COVID-19 medical support by Exness"
        headingLevel="h2"
      />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full min-h-0 min-w-0 border-gray-900/10 border-l-0 border-y-0 border-solid md:block md:min-h-[auto] md:min-w-[auto]" />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full border-gray-900/10 border-l-0 border-y-0 border-solid" />
      <CSRStatItem
        statValue="61"
        description="scholarships awarded in 5 countries"
        headingLevel="h2"
      />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full min-h-0 min-w-0 border-gray-900/10 border-l-0 border-y-0 border-solid md:block md:min-h-[auto] md:min-w-[auto]" />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full border-gray-900/10 border-l-0 border-y-0 border-solid" />
      <CSRStatItem
        statValue="14,000"
        description="liters of free drinkable water provided"
        headingLevel="h2"
      />
      <hr className="text-gray-900/10 box-border caret-transparent hidden shrink-0 h-full min-h-0 min-w-0 border-gray-900/10 border-l-0 border-y-0 border-solid md:block md:min-h-[auto] md:min-w-[auto]" />
    </div>
  );
};

const CSRSection = () => {
  return (
    <section
      id="csr"
      className="relative bg-cover box-border caret-transparent bg-center mx-6 my-16 md:mx-[84px] md:my-32"
    >
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1032px]">
        <div className="box-border caret-transparent text-center mb-16 md:mb-32">
          <CSRContent />
        </div>
        <CSRStats />
      </div>
    </section>
  );
};

export default CSRSection;
