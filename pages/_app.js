import "../styles/globals.css";
import "../styles/home.css";
import "../styles/common.css";
import "../styles/faq.css";
import "../styles/aboutus.css";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
