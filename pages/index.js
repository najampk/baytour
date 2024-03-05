import Head from "next/head";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import content from "./blogposts.json";
import "swiper/css";
const faqs = [
  {
    question: "What is a limo service in the Bay Area?",
    answer:
      "A limo service in the Bay Area is a professional transportation service that provides a luxurious and comfortable way to travel around the region. It offers a wide range of services, including airport transfers, corporate events, weddings, and sightseeing tours.",
  },
  {
    question: "What are the benefits of using a limo service in the Bay Area?",
    answer:
      "The benefits of using a limo service in the Bay Area are numerous. With a professional and experienced chauffeur behind the wheel, passengers can enjoy a comfortable and spacious vehicle while taking in the beautiful views of the Bay Area. Additionally, passengers won't have to worry about traffic or parking, as the driver will take care of all of that.",
  },

  {
    question:
      "What type of events can a limo service in the Bay Area be used for?",
    answer:
      "A limo service in the Bay Area can be used for a variety of events, including airport transfers, corporate events, weddings, and sightseeing tours.",
  },
];

const faqsb = [
  {
    question:
      "What sets Baytours from other San Francisco limo rental services?",
    answer:
      "Baytours Limousine Service offers a wide selection of customizable tour packages, along with superb service and flexible prices that make them the preferred choice for thousands of satisfied clients. With 24/7 availability of their reservation specialists, you can easily call them at 1-510-890-8393 or complete their reservation form to plan a wonderful time. They also offer affordable luxury limousine transportation, making them the best in Bay Area SFO City Limousine Services & Rentals.",
  },
  {
    question:
      "What kind of special events can Baytours provide transportation for?",
    answer:
      "Bayarea Limousine Service & Car Rentals is the go-to provider for luxury ground transportation for all types of special events, including weddings, sporting events, proms, airport shuttle service, employee shuttle services, and any other occasion that you want to make extra special. Contact the specialists at Baytours for the best in limousine services.",
  },

  {
    question:
      "What makes Baytours the premier choice for luxury transportation in San Francisco?",
    answer:
      "Baytours Limousine Service is the premier choice for luxury transportation in San Francisco because they offer impeccable service, the best selection of luxury limos in the Bay Area, and the most flexible rates in the industry. They also have a wide range of services, including wedding limousines, sporting event transportation, prom limos, airport shuttle service, and employee shuttle services, and their limo amenities are designed to impress and delight their clients.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const categoryPosts = content.posts.filter(
    (post) => post.category != "attractions"
  );

  const attractionsPosts = content.posts.filter(
    (post) => post.category === "attractions"
  );

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>Bay Area Limousine Service & Car Rentals - Baytours</title>
        <meta
          name="title"
          content="Bay Area Limousine Service & Car Rentals - Baytours"
        />
        <meta
          name="description"
          content="Travel in style with Bay Area Limousine. Experience luxury Bay transportation Services & Car Rentals. Book now for a memorable trip - 510-890-8393 Bay City."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />

        <meta
          name="twitter:title"
          content="Bay Area Limousine Service & Car Rentals - Baytours"
        />
        <meta
          name="twitter:description"
          content="Travel in style with Bay Area Limousine. Experience luxury Bay transportation Services & Car Rentals. Book now for a memorable trip - 510-890-8393 Bay City."
        />
        <meta
          name="twitter:image:src"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Bay Area Limousine Service & Car Rentals - Baytours"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Travel in style with Bay Area Limousine. Experience luxury Bay transportation Services & Car Rentals. Book now for a memorable trip - 510-890-8393 Bay City."
        />
        <meta property="og:locale" content="en-us" />
        <meta
          itemProp="image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />

        <link rel="canonical" href="https://baytour.net" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <header className="homeHeader bg-slate-800">
        <div className="homehdrtxt bg-gradient-radial from-black via-transparent sm:bg-none z-40">
          <div>
            {/* style={{textShadow:"0px 0px 20px black"}} */}
            <h1>
              Bay Area Limousine{" "}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-white"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-br from-[#c79540] via-[#f0de97] to-[#cfa249] ">
                  Service
                </span>
              </span>
            </h1>
            <h2>Luxury Limousine & Car Rental Services in Bay Area</h2>

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="/contact-us"
                className="border-2 border-slate-100 text-slate-100  rounded-full px-5 py-2 hover:bg-[#f0de97] hover:border-[#f0de97]   hover:text-black text-lg transition duration-300 font-medium"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <Swiper
          className="mySwiper h-full w-full"
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src="/images/slides/slide-2.jpg"
              alt="BAYTOURS"
              title="BAYTOURS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/slide-3.jpg"
              alt="BAYTOURS"
              title="BAYTOURS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/slide-4.jpg"
              alt="BAYTOURS"
              title="BAYTOURS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/slide-5.jpg"
              alt="BAYTOURS"
              title="BAYTOURS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/slide-6.jpg"
              alt="BAYTOURS"
              title="BAYTOURS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slides/slide-1.jpg"
              alt="BAYTOURS"
              title="BAYTOURS"
              fill="true"
              className="bg-cover"
            ></Image>
          </SwiperSlide>
        </Swiper>

        <div className="w-full h-full bg-gradient-to-b from-black via-transparent z-20  absolute"></div>
      </header>

      <section className="h-auto py-10">
        <div className="container mx-auto h-full max-w-5xl px-4 flex justify-center items-center text-center relative">
          <div>
            <h2
              className="md:text-5xl text-3xl font-bold text-slate-800"
              title="Standard Quality is Our Foremost Priority"
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,.2)" }}
            >
              Bay Area Car Service
            </h2>
            <p className="md:text-lg  text-slate-700 mt-3">
              Book your next corporate, luxury, or special event transportation
              with BayTours - the leading Limousine Service & Car Rentals
              provider in the Bay Area. With over a decade of experience serving
              all 9 counties, we offer a diverse fleet of late-model vehicles to
              ensure you arrive in style. Discover the Bay Area, Napa Valley,
              San Jose, and Monterey with us as your personal guide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="sec-heading">
          <h2>Limo Service Bay Area</h2>
          <p>Town Car Services | Car Service San Francisco</p>
        </div>
        <div className="container mx-auto px-4 ">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <Image
                  className="w-36 h-36 flex-shrink-0 mx-auto rounded-full"
                  width={144}
                  height={144}
                  src="/images/baytour.net-service.jpg"
                  alt="Car Service"
                />
                <h2 className="mt-5 text-gray-900 text-lg sm:text-xl font-bold">
                  Car Service
                </h2>
                <p className="text-gray-500 text-sm">We take you places</p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <Image
                  className="w-36 h-36 flex-shrink-0 mx-auto rounded-full"
                  width={144}
                  height={144}
                  src="/images/baytour.net-service-air-port.jpg"
                  alt="Airport Service"
                />
                <h2 className="mt-5 text-gray-900 text-lg sm:text-xl font-bold">
                  Airport Service
                </h2>
                <p className="text-gray-500 text-sm">
                  Your journey begins with us
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <Image
                  className="w-36 h-36 flex-shrink-0 mx-auto rounded-full"
                  width={144}
                  height={144}
                  src="/images/baytour.net-service-wine-tours.jpg"
                  alt="Wine Tours"
                />
                <h2 className="mt-5 text-gray-900 text-lg sm:text-xl font-bold">
                  {" "}
                  Wine Tours
                </h2>
                <p className="text-gray-500 text-sm">Uncork the fun with us</p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <Image
                  className="w-36 h-36 flex-shrink-0 mx-auto rounded-full"
                  width={144}
                  height={144}
                  src="/images/baytour.net-service-limo.jpg"
                  alt="Limo Services"
                />
                <h2 className="mt-5 text-gray-900 text-lg sm:text-xl font-bold">
                  {" "}
                  Limo Services
                </h2>
                <p className="text-gray-500 text-sm">
                  Unmatched elegance on the road
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <Image
                  className="w-36 h-36 flex-shrink-0 mx-auto rounded-full"
                  width={144}
                  height={144}
                  src="/images/baytour.net-service-corporate.jpg"
                  alt="Corporate Services"
                />
                <h2 className="mt-5 text-gray-900 text-lg sm:text-xl font-bold">
                  {" "}
                  Corporate Services
                </h2>
                <p className="text-gray-500 text-sm">
                  Corporate travel made easy
                </p>
              </div>
            </li>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <Image
                  className="w-36 h-36 flex-shrink-0 mx-auto rounded-full"
                  width={144}
                  height={144}
                  src="/images/baytour.net-service-lesure.jpg"
                  alt="Leisure Services"
                />
                <h2 className="mt-5 text-gray-900 text-lg sm:text-xl font-bold">
                  {" "}
                  Leisure Services
                </h2>
                <p className="text-gray-500 text-sm">
                  Your leisure time, our top priority
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10 ">
        <div className="sec-heading">
          <h2>OUR FLEET</h2>
          <p>
            Ride in Style with Our Luxurious Fleet: Experience Elegance on the
            Go
          </p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link
              href="/fleet"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#e6cc7f] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/baytour.net-logo.png"
                  alt="Baytours"
                  className="w-16 mx-auto"
                  width={64}
                  height={64}
                />

                <h2>Coach Bus</h2>
                <p>
                  Travel in Comfort with Our Bus Coach: A Journey Beyond
                  Ordinary
                </p>

                <Image
                  src="/images/motor-coach-bus-52-56-pax.jpg"
                  alt="BAYTOURS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="/fleet"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#e6cc7f] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/baytour.net-logo.png"
                  alt="Baytours"
                  className="w-16 mx-auto"
                  width={64}
                  height={64}
                />
                <h2>Luxury Sedans</h2>
                <p>
                  Indulge in Luxury with Our Fleet of High-End Sedans: A Ride to
                  Remember
                </p>
                <Image
                  src="/images/BMW-750i.jpg"
                  alt="BAYTOURS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="/fleet"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#e6cc7f] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/baytour.net-logo.png"
                  alt="Baytours"
                  className="w-16 mx-auto"
                  width={64}
                  height={64}
                />
                <h2>Luxury SUV</h2>
                <p>
                  Elevate Your Adventure with Our Fleet of Luxury SUVs: Comfort
                  Meets Capability
                </p>
                <Image
                  src="/images/Cadillac-Escalade.jpg"
                  alt="BAYTOURS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="/fleet"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#e6cc7f] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/baytour.net-logo.png"
                  alt="Baytours"
                  className="w-16 mx-auto"
                  width={64}
                  height={64}
                />
                <h2 className="font-medium">Sprinter Van</h2>
                <p>
                  Travel in Style and Comfort with Our Sprinter Van Fleet:
                  Space, Style, Serenity
                </p>
                <Image
                  src="/images/MBZ-Coach-Style-Sprinter.jpg"
                  alt="BAYTOURS"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-10 bg-no-repeat bg-center bg-cover bg-fixed "
        style={{
          backgroundImage: "url('./images/golden-bridge-san-francisco.jpg')",
        }}
      >
        <div className="sec-heading">
          <h2 style={{ color: "white" }}>
            Tourist Attractions in San Francisco
          </h2>
          <p style={{ color: "white" }}>
            Discover the Magic of San Francisco: A Destination for Endless
            Adventures
          </p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 text-center">
            
               {attractionsPosts.slice(0, 8).map((post, index) => {
                
                return (
                  <div className="bx-item-bb items-start h-auto" key={post.slug}>
                    <div className="flex flex-col">
                      <Image
                        src={post.featured_img}
                        alt={post.title}
                        title={post.title}
                        className="rounded-lg"
                        width={400}
                        height={300}
                      />

                      <Link title={post.title} href={"/blog/" + post.slug}>
                        <h2 className="hover:text-blue-500">{post.title}</h2>
                      </Link>
                    </div>
                  </div>
                );              
            })}
          </div>

          <div className=" flex justify-center items-center mt-10">
            <Link
              href="/tourist-attractions"
              className="border rounded-full px-5 text-white py-2 hover:bg-[#f0de97] hover:border-[#f0de97]   hover:text-black transition duration-300 font-medium"
            >
              View all Attractions in San Francisco
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="sec-heading">
          <h2>Blog & Updates</h2>
          <p>Blog and updates </p>
        </div>
        <div className="container mx-auto px-4 ">
          <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {categoryPosts.slice(0, 4).map((post, index) => {
              return (
                <div
                  key={post.slug + "_" + index}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      width={400}
                      height={300}
                      src={post.featured_img}
                      alt="Najam Awan Image"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600 capitalize">
                        {post.category}
                      </p>
                      <a href={"blog/" + post.slug} className="block mt-2">
                        <p className="text-base sm:text-xl font-semibold text-gray-900 hover:text-blue-600">
                          {post.title}
                        </p>
                      </a>
                      <p className="mt-3 text-sm sm:text-base text-gray-500">
                        {post.shortdescription}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={post.authorpic}
                          alt="Najam Awan Image"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" flex justify-center items-center mt-10">
            <Link
              href="/blog"
              className="border border-slate-600 text-slate-700  rounded-full px-5 py-2 hover:bg-[#f0de97] hover:border-[#f0de97]   hover:text-black transition duration-300 font-medium"
            >
              View all Blog & Updates
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-10 ">
        <div className="sec-heading">
          <h2>Frequently Asked Questions</h2>
          <p>Answers of frequently asked questions </p>
        </div>
        <div className="container mx-auto px-4 ">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8">
            <div className="bg-transparent w-full mx-auto">
              <dl>
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-3">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button
                            className="w-full sm:px-6 sm:py-3 px-3 py-2  border border-slate-300
      bg-gradient-to-br from-white via-slate-100 to-zinc-200 text-gray-700 rounded-lg text-sm sm:text-lg font-medium shadow-lg 
      text-left  flex justify-between items-start "
                          >
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                        >
                          <p className="text-base text-gray-800">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
            <div className="bg-transparent w-full mx-auto">
              <dl>
                {faqsb.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-3">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button
                            className="w-full sm:px-6 sm:py-3 px-3 py-2  border border-slate-300
      bg-gradient-to-br from-white via-slate-100 to-zinc-200 text-gray-700 rounded-lg text-sm sm:text-lg font-medium shadow-lg 
      text-left  flex justify-between items-start "
                          >
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                        >
                          <p className="text-base text-gray-800">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
