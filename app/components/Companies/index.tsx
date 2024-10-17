"use client";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
  name: string;
  imgSrc: string;
}

const data: Data[] = [
  {
    name: "FruityTreats",
    imgSrc: "/images/Logo/FruityTreats.svg",
  },
  {
    name: "Shark'sGang",
    imgSrc: "/images/Logo/Shark'sGang.svg",
  },
  {
    name: "JaguarGuest",
    imgSrc: "/images/Logo/JaguarGuest.svg",
  },
  {
    name: "Zeus",
    imgSrc: "/images/Logo/Zeus.svg",
  },
  {
    name: "JaguarGuest",
    imgSrc: "/images/Logo/JaguarGuest.svg",
  },
  {
    name: "FruityTreats",

    imgSrc: "/images/Logo/FruityTreats.svg",
  },
  {
    name: "JaguarGuest",
    imgSrc: "/images/Logo/JaguarGuest.svg",
  },
  {
    name: "Shark'sGang",

    imgSrc: "/images/Logo/Shark'sGang.svg",
  },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="text-center bg-lightpink">
        {/* <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <Slider {...settings}>
              {data.map((item, i) => (
                <div
                  className="!flex gap-2 items-center justify-center"
                  key={i}
                >
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <span className="block text-white text-bold text-xl">
                    {item.name}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}
      </div>
    );
  }
}
