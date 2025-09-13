import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import StatsSection from "./StatsSection";
import TechSection from "./TechSection";
import RiskSection from "./RiskSection";
import PartnershipsSection from "./PartnershipsSection";
import CSRSection from "./CSRSection";
import CareersSection from "./CareerSection"; 

const HomePage = () => {
  return (
    <main role="main" className="box-border caret-transparent">
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <TechSection />
      <RiskSection />
      <PartnershipsSection />
      <CSRSection />
      <CareersSection />
    </main>
  );
};
export default HomePage;
