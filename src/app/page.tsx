import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import PictureGallerySection from './components/sections/PictureGallerySection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <HomeSection />
      <ContactSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <PictureGallerySection />
    </main>
  );
}
