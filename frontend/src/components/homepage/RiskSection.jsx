const RiskContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[312px] mx-auto md:max-w-[680px]">
      <p className="text-gray-900/60 text-xs box-border caret-transparent tracking-[0.6px] leading-[18px] uppercase mb-6 md:text-sm md:leading-5 md:mb-8">
        Risk &amp; governance
      </p>
      <h2 className="text-2xl font-medium box-border caret-transparent leading-8 mb-6 font-poppins md:text-[32px] md:leading-[44px] md:mb-8">
        Secure, transparent, and accountable financial environment
      </h2>
      <div className="box-border caret-transparent">
        <p className="text-gray-900/60 text-base box-border caret-transparent leading-[22px] md:text-lg md:leading-6">
          Our robust risk management and compliance with global regulatory standards ensure
          stability and integrity. With advanced security measures, including PCI DSS compliance and
          real-time monitoring, we offer a resilient and trustworthy ecosystem for our clients and
          partners.
        </p>
      </div>
    </div>
  );
};
 export  const RiskImage = () => {
  return (
    <div className="relative box-border caret-transparent w-[312px] overflow-hidden md:w-[400px]">
      <div className="box-border caret-transparent pt-[55.4608%]"></div>
      <picture className="box-border caret-transparent">
        <img
          src="https://c.animaapp.com/mfhttwk3ObI8ZY/assets/risk_and_governance_cards_6b8195e366.png"
          sizes="100vw"
          alt="risk-and-governance-cards.png"
          className="absolute box-border caret-transparent h-full object-cover w-full inset-0"
        />
      </picture>
    </div>
  );
};

const RiskSection = () => {
  return (
    <section className="relative bg-stone-50 bg-cover box-border caret-transparent bg-center pt-16 pb-8 px-6 md:pt-32 md:pb-12 md:px-[84px]">
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1032px]">
        <div className="box-border caret-transparent text-center mb-8 md:mb-12">
          <RiskContent />
        </div>
        <div className="items-center box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-12 md:gap-y-12">
          <RiskImage />
        </div>
      </div>
    </section>
  );
};
export default RiskSection;
