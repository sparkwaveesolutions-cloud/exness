const StatItem = (props) => {
  return (
    <div className="box-border caret-transparent gap-x-2 flex flex-col opacity-0 gap-y-2 md:gap-x-4 md:opacity-100 md:gap-y-4">
      <p className="text-transparent text-5xl font-medium bg-clip-text bg-[linear-gradient(rgb(71,102,123)_0%,rgb(7,14,32)_100%)] box-border tracking-[-2.4px] leading-[48px] font-poppins md:text-7xl md:tracking-[-3.6px] md:leading-[72px]">
        {props.value}
      </p>
      <p className="text-gray-900/60 text-sm box-border caret-transparent leading-5 md:text-base md:leading-[22px]">
        {props.description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative bg-stone-50 bg-cover box-border caret-transparent bg-center px-6 py-16 md:px-[84px] md:py-32">
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1032px]">
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(6,1fr)] gap-y-6 md:gap-x-6 md:grid-cols-[repeat(12,1fr)] md:gap-y-8">
          <div className="box-border caret-transparent gap-x-12 flex flex-col col-end-auto col-start-[span_6] gap-y-12 text-center md:gap-x-24 md:col-end-[span_6] md:col-start-4 md:gap-y-24">
            <StatItem value="16 years" description="industry expertise" />
            <StatItem value="1+ million" description="active clients" />
            <StatItem value="13 offices" description="around the world" />
            <StatItem value="2,000+" description="employees" />
            <StatItem value="90+" description="nationalities" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
