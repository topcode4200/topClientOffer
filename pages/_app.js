import "../styles/globals.css";
import "../styles/home.css";
import "../styles/common.css";
import "../styles/aboutus.css";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header bgColor={"bg-white shadow"} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
