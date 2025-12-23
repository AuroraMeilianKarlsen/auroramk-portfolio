import BounceCards from '../BounceCards';
import {
  pictureGalleryImages,
  bounceCardsTransformStyles,
} from '../../constants/images';

export default function PictureGallerySection() {
  return (
    <section
      id="bilder"
      className="px-6 py-12 scroll-mt-20"
      aria-label="Bildegalleri"
    >
      <div className="mx-auto max-w-3xl">
        <br />
        <p className="mt-4 text-gray-300">
          I am currently on exchange in Italy. During my Erasmus stay I am
          studying at the University of Padova, but I have also had the
          opportunity to travel to many other cities! Here I have also developed
          a love for taking photos, here are some of my most recent snaps from
          Italy:
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
