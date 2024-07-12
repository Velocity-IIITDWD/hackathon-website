import CarouselMobileView from "@/components/carousel/CarouselMobileView";
import Carousel from "@/components/carousel/Carousel";

interface CarouselIndexProps {
  mobile: boolean;
}
const CarouselIndex = ({ mobile }: CarouselIndexProps) => {
  return <Carousel />;
};

export default CarouselIndex;
