import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/slack.css";

export default function Carousel({ data, sideArrows = false }) {
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  var settings = {
    // centerPadding: "60px",
    // infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    swipe: true,
    touchMove: false,
    centerMode: true,
    centerPadding: "12%",
    slidesToShow: 3,
    slidesToScroll: 2,
    lazyLoad: "progressive",
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  if (sideArrows) {
    settings = {
      ...settings,
      dots: false,
      arrows: true,
      nextArrow: <GalleryNextArrow />,
      prevArrow: <GalleryPrevArrow />,
    };
  }

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="h-80 xs:w-[20rem]">
            <img
              src={item.image}
              alt={item.alt}
              className="object-cover h-full w-full rounded-lg"
            />
            {sideArrows && (
              <div className="show-center-data">
                <h1 className="text-black md:text-lg xs:text-sm font-fira-sans capitalize font-bold">
                  {item.name}
                </h1>
                <p className="text-red-550 font-fira-sans text-lg font-bold">
                  RS.{item.price}
                </p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
