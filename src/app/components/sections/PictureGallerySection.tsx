'use client';

import BounceCards from '../BounceCards';
import {
  pictureGalleryImages,
  bounceCardsTransformStyles,
} from '../../constants/images';

export default function PictureGallerySection() {
  return (
    <section
      id="bilder"
      className="hidden md:block px-6 py-12 scroll-mt-20"
      aria-label="Bildegalleri"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center">
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
