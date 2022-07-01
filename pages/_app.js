import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <hr className="hr"/>
  <Footer/>
  </>
}

export default MyApp;
