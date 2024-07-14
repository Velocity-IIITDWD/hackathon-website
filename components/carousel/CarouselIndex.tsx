import CarouselMobileView from "@/components/carousel/CarouselMobileView";
import Carousel from "@/components/carousel/Carousel";

interface CarouselIndexProps {
  isMobile: boolean;
}
const CarouselIndex = ({ isMobile }: CarouselIndexProps) => {
  return isMobile ? <CarouselMobileView /> : <Carousel />;
};

export default CarouselIndex;
