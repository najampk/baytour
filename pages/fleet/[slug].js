import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import MainHeader from "../../components/mainheader";
import MainHeaderBlog from "../../components/mainheaderblog";
import Head from "next/head";
import content from "../fleet";
export default function FleetPage({ item }) {  

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
        <title>{`BAYTOURS - ${item.title}`}</title>
        <meta name="title" content={item.title} />
        <meta name="description" content={item.shortdescription} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta itemProp="image" content="#" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={item.title} />
        <meta name="twitter:description" content={item.shortdescription}/>
        <meta name="twitter:image:src" content="#" />
        <meta property="og:title" content={item.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="#" />
        <meta property="og:description" content={item.shortdescription} />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="#" />
        <link rel="canonical" href={"https://baytour.net/fleet/"+item.slug} />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeaderBlog pageImg={"hdr-1.jpg"} />

      <section className="main-sec container  max-w-5xl  mx-auto pb-10">
        {/* <div className="content-bx space-y-4"> </div> */}

        <div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div>
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Link
                    href="/fleet"
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Fleet
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Link
                    href={item.slug}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {item.title}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex-1 text-center">
            <p className="text-sm font-medium text-indigo-600 capitalize">
              {item.category}
            </p>
            <div className="block mt-2">
              <h1
                className="text-3xl font-semibold text-gray-900"
                title={item.title}
              >
                {item.title}
              </h1>
              <p className="mt-3 text-base text-gray-500">
                {item.shortdescription}
              </p>
            </div>
          </div>
          
        </div>

        <div className="flex-shrink-0">
          <Image
            className="h-96 w-full object-cover mt-5"
            src={item.featured_img}
            alt={item.title}
            width={800}
            height={384}
          />
        </div>

        <div
          className="space-y-2  mx-auto mt-8"
          dangerouslySetInnerHTML={{ __html: item.article }}
        >
          
        </div>

            <div className="flex justify-center items-center py-10">
          <div  className="px-6 py-3 btn-action uppercase cursor-pointer">Reservation</div>

</div>
      </section>
    </>
  );
}
export async function getStaticPaths() {
  const paths = content.fleet.map((post) => {
    const slug = post.slug;
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params)
  const currentPath = `${params.slug}`
  const item = content.fleet.find((post) => post.slug === currentPath) || {
    notfound: true,
  };
  return { props: { item } };
}
