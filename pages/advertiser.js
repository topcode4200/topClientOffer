import Image from "next/image";
import React from "react";
import NewsLetter from "../components/common/NewsLetter";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as Star } from "@fortawesome/free-regular-svg-icons";

const advertiser = () => {
  const powers = [
    { h: "300+", t: "clients on board" },
    { h: "103K+", t: "active publishers" },
    { h: "24/7", t: "support" },
    { h: "100%", t: "transparency" },
  ];
  const testimonials = [
    {
      img: "/slider1.png",
      name: "James Pattinson",
      rating: 4,
      text: "Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.",
    },
    {
      img: "/slider2.png",
      name: "Greg Stuart",
      rating: 5,
      text: "Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultrices.",
    },
    {
      img: "/slider3.png",
      name: "Trevor Mitchell",
      rating: 4.5,
      text: "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.",
    },
  ];

  return (
    <div className="advertiser-container">
      <div className="header bg-image-wrapper">
        <h2>Advertiser</h2>
      </div>
      <div className="flex justify-between items-center px-32 gap-10 mt-8">
        <div>
          <Image width={800} height={800} src="/banner.png" alt="" />
        </div>
        <p className="text-justify">
          ClickDealer has a portfolio of successful campaigns in all major
          verticals, especially E-commerce, Mobile Entertainment, Electronic
          Giveaways, and Social Networking. The range of promotion channels
          utilized by our publisher base allows engaging audiences in ways most
          suitable for your enterprise. Abundance in publishers and flexibility
          in formats combined with custom ROI-centered solutions by our experts
          makes working with ClickDealer a guarantee of online campaign
          profitability.
        </p>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-5xl font-bold font-balloVai">
          There is power in numbers
        </h3>
        <p>
          We base our decisions on hard data, so here are some stats to help you
          make yours
        </p>
        <div className="grid grid-cols-4 gap-5 w-3/4 mt-10 mx-auto">
          {powers.map((item, i) => (
            <div className="bg-gray-200 rounded px-5 py-10" key={i}>
              <h4 className="font-bold text-3xl">{item.h} </h4>
              <p>{item.t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-32">
        <h3 className="text-5xl font-bold font-balloVai">Traffic types</h3>
        <Image
          className="object-contain"
          width={600}
          height={600}
          src="/Group 18745.png"
          alt=""
        />
        <Image
          className="object-contain"
          width={600}
          height={600}
          src="/Group 18746.png"
          alt=""
        />
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold font-balloVai mb-5">
          Partner testimonials
        </h3>
        <div className="grid grid-cols-3 px-20 gap-7">
          {testimonials.map((item, i) => (
            <div
              className="border rounded-md hover:shadow-lg px-5 py-7"
              key={i}
            >
              <Image width={200} height={200} src={item.img} alt="" />
              <h3 className="font-semibold text-xl my-2">{item.name}</h3>
              <Rating
                className="text-orange-400"
                readonly
                initialRating={item.rating}
                emptySymbol={<FontAwesomeIcon icon={Star} />}
                placeholderSymbol={<FontAwesomeIcon icon={faStarHalf} />}
                fullSymbol={<FontAwesomeIcon icon={faStar} />}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default advertiser;
