import { socialMosaic } from '~/assets/images';
import Slider from 'react-slick';

function Carousel() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 100000,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
    };

    return (
        <Slider {...settings}>
            <img src={socialMosaic} alt="mosaic" />
            <img src={socialMosaic} alt="mosaic" />
        </Slider>
    );
}

export default Carousel;
