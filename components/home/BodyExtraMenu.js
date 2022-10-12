import React, { useState } from "react";

const BodyExtraMenu = () => {
  const [menu, setMenu] = useState(1);

  const menus = [
    { id: 1, text: "dating" },
    { id: 2, text: "sweepstakes" },
    { id: 3, text: "nutria" },
    { id: 4, text: "gaming" },
    { id: 5, text: "Mobile App" },
    { id: 6, text: "Finance" },
    { id: 7, text: "crypto" },
    { id: 8, text: "heath and beauty" },
  ];

  const pages = [
    {
      id: 1,
      text: "Dating is our most attractive vertical!! Nowadays dating makes top places in the affiliate market and We have the best converting offer and suitable opportunities in the global market. Because we work with the biggest global brands in the dating industry. We ensure our valued affiliates to make the highest target audience with a skilled technical and expert team to achieve a lot of users looking for love. At the same time our world class extensive experienced affiliate manager helps to generate the highest payment and massive benefits for your business in the long run. So, this is a great time to be building your affiliate portfolio and growing your revenues with us.",
    },
    {
      id: 2,
      text: "The sweepstakes vertical is one of the most well known and evergreen profitable verticals in the world. So we offer a wide range of GEOs, high beneficial conditions and aggressive daily rates. Indeed we have a direct concern of greatest popular brands, exclusive top performing offers and highest payouts in the leading industry. We think you have a good chance to join us and raise your ROI.",
    },
    {
      id: 3,
      text: "Nutria is an acronym for nutraceuticals which are not prescribed drugs or medicines, but rather health supplements and similar manufactured goods. Every day a lot of nutra products are launched and create huge revenue for all affiliates in this vertical. We work with hundreds of top scientific nutrition producers. At the same time we provide the highest conversion rate, dedicated account manager, super fast landing page optimization and leading top brands offer. So if you’re interested join our network and get never-ending satisfaction.",
    },
    {
      id: 4,
      text: "Gaming is the only one around $200 billion us dollar leading well paid industry in the world. All ambitious affiliates have great scope to earn unlimited profits and we have top performing gaming offers in the cpa marketplace. simultaneously our vertical prepared for generating high traffic, all GEOs and maximum payouts for every SOI/DOI registration for CPAs. So feel free to affiliate with us and meet your dream revenue.",
    },
    {
      id: 5,
      text: "Mobile App is one of the top verticals with a global market of over $200 billion and a CAGR rate of more than 13%. The transnational usage of Mobile Apps from Android, iOS or cross-platform is constantly expanding as the scope of this segment is rising worldwide. All the great variety of educational, lifestyle, social media, productivity, entertainment, and game apps are our scope of work. We have the best converting offers from leading brands and agencies, the industry's highest conversion rate, and excellent tracking technologies to secure our valued advertisers and affiliates. So join us today to ensure high-class earning revenue.",
    },
    {
      id: 6,
      text: "The finance vertical is one of the backbone indicators of performance marketing. Our financial vertical (credit cards, insurance, deposits, microloans etc) provides a large volume of offers , huge payouts, high conversion rates, exclusive quality traffic in addition to this vertical helps the affiliate to reach their unbelievable earnings. Now you should join us to become a leading marketer.",
    },
    {
      id: 7,
      text: "It can't be imagined that the crypto market now reached at $1600 billion US dollar in the virtual world.We provide a super fast react js tracking platform , direct lucrative offers from our trusted advertisers and top leading crypto brand for our valued affiliates . So your joining with us could find the best CPL/CPA offers and make endless opportunities to earn revenue.",
    },
    {
      id: 8,
      text: "Believe it or not, most people are convinced only of beauty and good health without considering any kind of skill or qualification. So the tendency and desire for beauty and health has played significant importance in our life. In point of fact we include all types of traffic and cover all GEOs, direct exclusive offers from top leading brands, well experienced affiliate managers and provide high traffic monetization for earnings and massive revenue. We are eagerly waiting for your affiliation.",
    },
  ];

  return (
    <div className="body-extra-menu-container container">
      <nav>
        {menus.map((item) => (
          <button
            className={menu === item.id && "bg-primary"}
            onClick={() => setMenu(item.id)}
            key={item.id}
          >
            {item.text}
          </button>
        ))}
      </nav>
      {pages.map((item) => (
        <p hidden={item.id !== menu} key={item.id}>
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default BodyExtraMenu;
