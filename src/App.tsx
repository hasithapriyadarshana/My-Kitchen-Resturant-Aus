import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BrandHeroSection } from './components/BrandHeroSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MenuSection } from './components/MenuSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ConstructionSiteCateringPage } from './components/ConstructionSiteCateringPage';

export default function App() {
  // Toggle this to show the Construction Site Catering page
  const showCateringPage = true;
  
  if (showCateringPage) {
    return (
      <div className="min-h-screen bg-[#1a1a1a]">
        <Header />
        <main>
          <ConstructionSiteCateringPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandHeroSection />
        <TestimonialsSection />
        <ProjectsSection />
        <MenuSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}