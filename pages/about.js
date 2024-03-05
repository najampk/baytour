import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>About Us | San Francisco Luxury Limo Service Provider</title>
        <meta name="title" content="About Us | San Francisco Luxury Limo Service Provider" />
        <meta name="description" content="Discover Bay Limousine, a premier San Francisco luxury transportation provider. Get professionals provides the best limo services and rentals for all occasions." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta itemProp="image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us | San Francisco Luxury Limo Service Provider" />
        <meta name="twitter:description" content="Discover Bay Limousine, a premier San Francisco luxury transportation provider. Get professionals provides the best limo services and rentals for all occasions." />
        <meta name="twitter:image:src" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta property="og:title" content="About Us | San Francisco Luxury Limo Service Provider" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta property="og:description" content="Discover Bay Limousine, a premier San Francisco luxury transportation provider. Get professionals provides the best limo services and rentals for all occasions." />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <link rel="canonical" href="https://baytour.net/about" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="ABOUT US - Luxury Limo Service" pageImg="hdr-2.jpg" />

      <section className="main-sec">
        <div className="content-bx space-y-4">
          <Image
            src="/images/baytours-about.jpg"
            alt="Baytours"
            className="w-full mx-auto"
            width={1500}
            height={298}
          />
		
          <p>
            Are you looking for a luxurious and affordable luxury limo service solution in San Francisco? Look no further than Baytours, the premier limousine service in the <strong>Bay Area</strong>. Our huge fleet of limousines, party buses, corporate sedans, SUV Limos, tour coaches, and antique automobiles are sure to exceed your expectations and provide you with an unforgettable travel experience.
          </p>

          <h2 className="text-3xl text-amber-500 italic font-bold text-center py-5">
            "Discover the Ultimate Luxury Limo Service Experience with Baytours"
          </h2>

          <p>
            We are dedicated to providing our clients with the highest level of service and comfort. Our knowledgeable staff, including reservation specialists and professional chauffeurs, has years of experience in anticipating and fulfilling the needs and desires of our clients. Whether you're planning a special event, corporate travel, or airport limo services, our team is dedicated to ensuring your journey is seamless and stress-free.
          </p>

          <p>
            At Baytours, we understand that the safety of our clients is our top priority. That's why all of our vehicles are meticulously maintained and our chauffeurs are fully licensed and DOT certified, including drug and alcohol testing.
          </p>
		  <p>
			So why wait? Treat yourself to the ultimate luxury transportation experience with Baytours. Call us today at 510-890-8393 and let us customize a travel package that meets your specific needs and budget. Our reservation specialists are available 24/7 to answer your questions and help you plan the perfect travel experience.
		  </p>
			<h2 className="text-3xl text-amber-500 italic font-bold text-center py-5">
            "Travel in Style with Baytours - Luxury Limo Service Provider."
          </h2>
		 

        </div>
      </section>
    </>
  );
}
