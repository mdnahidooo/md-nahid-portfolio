import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
;

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <TechStack></TechStack>
      <Skills></Skills>
      <FeaturedProjects></FeaturedProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
