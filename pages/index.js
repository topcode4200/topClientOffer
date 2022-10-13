import JoinUs from "../components/common/JoinUs";
import NewsLetter from "../components/common/NewsLetter";
import AboutWork from "../components/home/AboutWork";
import Banner from "../components/home/Banner";
import BodyExtraMenu from "../components/home/BodyExtraMenu";
import Partners from "../components/home/Partners";
import WhatMakeUsDifferent from "../components/home/WhatMakeUsDifferent";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutWork />
      <WhatMakeUsDifferent />
      <BodyExtraMenu />
      <Partners />
      <JoinUs />
      <NewsLetter />
    </div>
  );
};

export default Home;
