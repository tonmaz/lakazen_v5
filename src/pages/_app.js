import "@src/common/globalStyles/main.css";
import "@src/common/globalStyles/chrome-bug.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lakazenv2</title>
        <meta name="Description" content="Lakazen2 | Happy Kids" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
