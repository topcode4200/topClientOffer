import "../styles/globals.css";
import "../styles/home.css";
import "../styles/common.css";
import "../styles/aboutus.css";
import Footer from "../components/common/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
