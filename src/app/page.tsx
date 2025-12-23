import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import PictureGallerySection from './components/sections/PictureGallerySection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <HomeSection />
      <ContactSection />
      <AboutSection />
      <EducationSection />
      <PictureGallerySection />
      <SkillsSection />
    </main>
  );
}
