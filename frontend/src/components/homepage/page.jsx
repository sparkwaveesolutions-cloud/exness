import HeroSection from "./HeroSection.jsx";
import IntroSection from "./IntroSection.jsx";
import StatsSection from "./StatsSection.jsx";
import TechSection from "./TechSection.jsx";
import RiskSection from "./RiskSection.jsx";
import PartnershipsSection from "./PartnershipsSection.jsx";
import CSRSection from "./CSRSection.jsx";
import CareersSection from "./CareerSection.jsx"; 

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
