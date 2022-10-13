import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="menu-wrapper">
        <div className="col-span-2">
          <Image
            src="/dfdfd 2.png"
            width={250}
            height={90}
            className="object-contain"
            alt="hero"
          />
          <p className="text-justify pr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac a
            tempor a.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Risus ac a tempor a.
          </p>
        </div>

        <div className="item">
          <h2>NETWORK</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="">Smart Link</a>
            </li>
            <li>
              <a className="">CPA Offers</a>
            </li>
          </nav>
        </div>
        <div className="item">
          <h2>ADVERTISER</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="">Advertisers</a>
            </li>
            <li>
              <a className="">Agencies</a>
            </li>
            <li>
              <a className="">Product</a>
            </li>
          </nav>
        </div>
        <div className="item">
          <h2>PUBLISHERS</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="">Services</a>
            </li>
            <li>
              <a className="">Contest</a>
            </li>
            <li>
              <a className="">Leadgen</a>
            </li>
          </nav>
        </div>
        <div className="item">
          <h2>NEWSFEED</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="">Blog</a>
            </li>
            <li>
              <a className="">Offers</a>
            </li>
            <li>
              <a className="">Affiliate Tips</a>
            </li>
            <li>
              <a className="">FAQ</a>
            </li>
          </nav>
        </div>
        <div className="item">
          <h2>COMPANY</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="">About us</a>
            </li>
            <li>
              <a className="">Our partners</a>
            </li>
            <li>
              <a className="">Contact us</a>
            </li>
            <li>
              <a className="">Privacy Policy</a>
            </li>
          </nav>
        </div>
      </div>

      <div className="get-started-wrapper">
        <h2>GET CONNECTED</h2>
        <div className="space-x-6 text-xl">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTelegram} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>

      <hr className="my-4" />

      <div className="lg:flex justify-between text-center space-y-3 lg:space-y-0">
        <h2>©2022 www.topclientoffer.com. All rights reserved.</h2>
        <div className="space-x-4">
          <Link href="/">Terms and Conditions (Affiliates) </Link>
          <Link href="/">Advertiser Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
