import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import FrontendShowcase from "@/components/sections/FrontendShowcase";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedProduct />
      <FrontendShowcase />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
