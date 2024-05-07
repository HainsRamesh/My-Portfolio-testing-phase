import UseMobileView from "./UseMobileView";
import { cardLists, responsiveData } from "../Data";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselSection = () => {
  const { isMobile } = UseMobileView();

  const card = cardLists.map(
    ({ id, img, title, description, gitLink, liveSite }) => (
      <Cards
        id={id}
        img={img}
        title={title}
        description={description}
        gitLink={gitLink}
        liveSite={liveSite}
        key={id}
      />
    )
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: responsiveData,
    arrows: !isMobile,
  };

  return <Slider {...settings}>{card}</Slider>;
};
export default CarouselSection;
