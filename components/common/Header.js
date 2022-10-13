import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ bgColor }) => {
  const [showSub, setShowSub] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const menus = [
    { txt: "HOME", href: "/" },
    { txt: "ABOUT US", href: "about" },
    {
      txt: "Affiliate",
      href: "affiliate",
      subMenus: [
        { txt: "Affiliate", href: "affiliate" },
        { txt: "CPA Offers", href: "news" },
      ],
    },
    {
      txt: "Advertiser",
      href: "advertiser",
      subMenus: [
        { txt: "Advertiser", href: "advertiser" },
        { txt: "Agencies", href: "news" },
        { txt: "Product", href: "news" },
      ],
    },
    { txt: "HOW IT WOKS", href: "howitwork" },
    {
      txt: "NEWS FEED",
      href: "news",
      subMenus: [
        { txt: "Blog", href: "news" },
        { txt: "offers", href: "news" },
        { txt: "Affiliate Tips", href: "news" },
        { txt: "FAQ", href: "news" },
      ],
    },
  ];

  return (
    <header className={"header-container " + bgColor}>
      <Image
        className="object-contain"
        width={250}
        height={50}
        src="/logo.png"
        alt="logo"
      />

      {/* for window  */}
      <div className="menu-wrapper">
        {menus.map((menu, i) => (
          <div
            onMouseEnter={() => setShowSub(i)}
            onMouseLeave={() => setShowSub(null)}
            className="menu-item"
          >
            <Link href={menu.href} key={i}>
              {menu.txt}
            </Link>
            {menu.subMenus && menu.subMenus.length && (
              <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
            )}
            {menu.subMenus && menu.subMenus.length && (
              <div className={showSub === i ? "submenus-wrapper" : "hidden"}>
                {menu.subMenus.map((sub, i) => (
                  <Link href={sub.href} key={i}>
                    {sub.txt}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <a className="btn" href="https://affiliate.topclientoffer.com/auth">
          SING IN
        </a>
        <div className="relative">
          <a
            onMouseEnter={() => setShowSub(14)}
            className="btn border-primary bg-primary hover:bg-white hover:text-secondary text-white"
          >
            SING UP
            <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
          </a>

          <div
            onMouseLeave={() => setShowSub(null)}
            className={showSub === 14 ? "submenus-wrapper" : "hidden"}
          >
            <Link href="https://affiliate.topclientoffer.com/auth/affiliate">
              Affiliate
            </Link>
            <Link href="https://affiliate.topclientoffer.com/auth/affiliate">
              SmartLink
            </Link>
            <Link href="https://affiliate.topclientoffer.com/auth/advertiser">
              Advertiser
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowSideMenu(true)}
        className="text-3xl mr-5 xl:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* for mobile responsive */}
      <div className={showSideMenu ? "menu-responsive-wrapper" : "hidden"}>
        <button onClick={() => setShowSideMenu(false)} className="close-btn">
          <FontAwesomeIcon icon={faClose} />
        </button>
        {menus.map((menu, i) => (
          <div
            onMouseEnter={() => setShowSub(i)}
            onMouseLeave={() => setShowSub(null)}
            className="menu-item"
          >
            <Link href={menu.href} key={i}>
              {menu.txt}
            </Link>
            {menu.subMenus && menu.subMenus.length && (
              <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
            )}
            {menu.subMenus && menu.subMenus.length && (
              <div className={showSub === i ? "submenus-wrapper" : "hidden"}>
                {menu.subMenus.map((sub, i) => (
                  <Link href={sub.href} key={i}>
                    {sub.txt}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <a
          className="mt-5 block"
          href="https://affiliate.topclientoffer.com/auth"
        >
          SING IN
        </a>
        <div className="relative">
          <a onMouseEnter={() => setShowSub(14)}>SING UP</a>
          <FontAwesomeIcon className="ml-1" icon={faCaretDown} />

          <div
            onMouseLeave={() => setShowSub(null)}
            className={showSub === 14 ? "submenus-wrapper" : "hidden"}
          >
            <Link href="https://affiliate.topclientoffer.com/auth/affiliate">
              Affiliate
            </Link>
            <Link href="https://affiliate.topclientoffer.com/auth/affiliate">
              SmartLink
            </Link>
            <Link href="https://affiliate.topclientoffer.com/auth/advertiser">
              Advertiser
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
