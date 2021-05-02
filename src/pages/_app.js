import "@src/common/globalStyles/main.css";

import Head from "next/head";
// import { Devtools } from "@ui-devtools/tailwind";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lakazenv2</title>
        <meta name="Description" content="Lakazen2 | Happy Kids" />
      </Head>

      {/*<Devtools>*/}
      <Component {...pageProps} />
      {/*</Devtools>*/}
    </>
  );
}

export default MyApp;
