import Head from "next/head";
import Script from "next/script";
import Landing from "../Components/EventPage/Landing";

function Event() {
  return (
    <>
      <Head>
        <title>NSCC PCCOE Event</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}

export default Event;