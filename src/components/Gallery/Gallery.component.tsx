import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import Image from "next/image";
import { styled } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { device } from "src/styles/theme";
import { rgba } from "polished";
import { ButtonLink } from "src/components/Typography";
import { useCallback } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GALLERY_SIZE = 600;

const ImageGalleryLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${rgba("#B8870F", 0.5)};
  opacity: 0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: ${GALLERY_SIZE}px;
  z-index: 1;
  transition: opacity 0.25s linear;

  & > * {
    margin: auto;
  }
`;

const ImageGallery = styled.div`
  background: var(--colors-white);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;

  .swiper {
    width: 100%;
    max-width: 100%;
    margin-bottom: -5px;
  }

  .swiper-slide {
    max-height: 75vh;
  }

  &:hover {
    ${ImageGalleryLink} {
      opacity: 1;
    }
  }
`;

const imageMap = Array.from({ length: 22 }).map((_, index) => ({
  id: index,
  file: `/gallery/${index}.jpg`,
}));

export const Gallery = () => {
  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptop);

  const slidesPerView = useCallback(() => {
    if (isLaptop) {
      return 3;
    }

    if (isTablet) {
      return 2;
    }

    return 1;
  }, [isLaptop, isTablet]);

  return (
    <ImageGallery>
      <Swiper
        modules={[Keyboard, Autoplay]}
        spaceBetween={0}
        slidesPerView={slidesPerView()}
        freeMode={true}
        autoHeight={true}
        keyboard
        autoplay
      >
        {imageMap.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.file}
              width="1000"
              height={GALLERY_SIZE}
              alt={`Jen and Wade Engagement Photo #${image.id}`}
              quality={80}
              loading="lazy"
              style={{
                objectFit: "cover",
                height: `${GALLERY_SIZE}px`,
                width: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageGalleryLink>
        <ButtonLink
          href="https://gallery.wildeyedphotography.com/-jenwade/gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all our engagement photos →
        </ButtonLink>
      </ImageGalleryLink>
    </ImageGallery>
  );
};
