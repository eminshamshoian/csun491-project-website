// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../styles/globals.css";
import * as Icon from "react-bootstrap-icons";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
