import { FunctionComponent } from "react";
import Head from "next/head";

const Seo: FunctionComponent = (): JSX.Element => {
  return (
    <Head>
      <title>BLIND</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.8, minimum-scale=1.0"
      />
      <meta name="Title" content="Blind" />
      <meta name="Keywords" content="블라인드,직장인" />
      <meta name="Description" content="직장인들의 사이트" />
      <meta name="Robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Blind" />
      <meta property="og:description" content="편리한 직장인들의 사이트" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="blind.co.kr" />
      <link rel="icon" href="/assets/icons/blind_web_favicon.png" />
      <link
        rel="apple-touch-icon"
        href="/assets/icons/pleasy_web_favicon.png"
      />
    </Head>
  );
};

export default Seo;
