'use client';

import BounceCards from '../BounceCards';
import {
  pictureGalleryImages,
  bounceCardsTransformStyles,
} from '../../constants/images';
import { useLanguage } from '../../context/LanguageContext';

export default function PictureGallerySection() {
  const { t } = useLanguage();

  return (
    <section
      id="bilder"
      className="hidden md:block px-6 py-12 scroll-mt-20"
      aria-label="Bildegalleri"
    >
      <div className="mx-auto max-w-3xl">
        <br />
        <p className="mt-4 text-[rgba(var(--text-rgb),0.85)]">
          {t(
            'pictureGallery.description',
            "For my Erasmus stay I'm studying at the University of Padova, but I've also had the opportunity to travel to many other cities! I have also developed a passion for taking photos. Enjoy some pictures from my Erasmus stay in Italy (as an excuse to make a picture gallery)."
          )}
        </p>

        <div className="mt-8 flex justify-center">
          <BounceCards
            className="custom-bounceCards"
            images={pictureGalleryImages}
            containerWidth={1000}
            containerHeight={500}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={bounceCardsTransformStyles}
            enableHover={true}
            triggerOnScroll={true}
          />
        </div>
      </div>
    </section>
  );
}
