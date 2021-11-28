import HomeContactSection from "./sections/HomeContactSection";
import HomeExperienceSection from "./sections/HomeExperienceSection";
import HomeHeroSection from "./sections/HomeHeroSection";
import HomeProjectsSection from "./sections/HomeProjectsSection";

const HomePage = () => {
  return (
    <div className="">
      <HomeHeroSection />
      <HomeProjectsSection />
      <HomeExperienceSection />
      <HomeContactSection />
    </div>
  );
};

export default HomePage;
