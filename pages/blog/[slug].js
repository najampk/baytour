import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import MainHeader from "../../components/mainheader";
import MainHeaderBlog from "../../components/mainheaderblog";
import Head from "next/head";
import content from "../blogposts";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { ArticleJsonLd,BreadcrumbJsonLd} from "next-seo";
export default function BlogPage({ post }) {
  //console.log(post);

  const dateStrings = post.date;
  const date = new Date(dateStrings);
  const formattedDates = date.toISOString();

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
        <title>{`${post.title}`}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.shortdescription} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta
          itemProp="image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.shortdescription} />
        <meta
          name="twitter:image:src"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta property="og:description" content={post.shortdescription} />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta name="author" content="Najam Awan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Najam Awan" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="4 minutes" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Baytours Feed"
          href="https://baytour.net/feed.xml"
        />
        <link rel="canonical" href={"https://baytour.net/blog/" + post.slug} />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <ArticleJsonLd
        type="BlogPosting"
        url={`https://baytour.net/blog/${post.slug}`}
        title={`${post.title}`}
        images={[`${"https://baytour.net" + post.featured_img}`]}
        datePublished={`${formattedDates}`}
        dateModified={`${formattedDates}`}
        authorName={`${post.author}`}
        description={`${post.shortdescription}`}
      />
      <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://baytour.net',
        },
        {
          position: 2,
          name: 'Blog & Updates',
          item: 'https://baytour.net/blog',
        },
        {
          position: 3,
          name: post.title,
          item: 'https://baytour.net/blog/'+post.slug,
        }        
      ]}
    />

      <MainHeaderBlog pageImg={"hdr-1.jpg"} />

      <section className="main-sec container  max-w-5xl  mx-auto pb-10">
        {/* <div className="content-bx space-y-4"> </div> */}

        <div>
          <nav aria-label="Breadcrumb">
            <ol role="list" className="md:flex hidden space-x-2">
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
                <div className="flex">
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
                    href="/blog"
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Blog & Updates
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex">
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
                    href={post.slug}
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {post.title}
                  </Link>
                </div>
              </li>
            </ol>
            <Link className="md:hidden" href="/blog">
              <ArrowLeftIcon className="w-5 h-5 text-slate-500 " />
            </Link>
          </nav>

          <div className="flex-1 mt-4">
            <div className="block sm:mt-8 mt-0">
              <h1
                className="text-2xl sm:text-3xl text-center font-semibold text-gray-900"
                title={post.title}
              >
                {post.title}
              </h1>
              <div className="block mt-8 relative">
                <div className="flex justify-center items-center -mb-6">
                  {" "}
                  <p className="text-base font-bold text-indigo-600 capitalize inline bg-[#e1c374] rounded-full px-4 py-1 border border-amber-500 mx-auto ">
                    {post.category}
                  </p>{" "}
                </div>
                <p className="mt-2 text-base text-gray-900 bg-slate-200   p-5 rounded-xl text-center pt-7">
                  {post.shortdescription}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author}</span>
              <Image
                className="h-10 w-10 rounded-full"
                src={post.authorpic}
                alt={post.author}
                width={40}
                height={40}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
                <span className="hidden sm:flex">
                  &middot; {post.readingTime} read
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            className="h-96 w-full object-cover mt-5"
            src={post.featured_img}
            alt={post.title}
            width={800}
            height={384}
          />
        </div>

        <div
          className="content space-y-2  mx-auto mt-8"
          dangerouslySetInnerHTML={{ __html: post.article }}
        ></div>
      </section>
    </>
  );
}
export async function getStaticPaths() {
  const paths = content.posts.map((post) => {
    const slug = post.slug;
    return { params: { slug } };
  });
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const currentPath = `${params.slug}`;
  console.log(currentPath);
  const post = content.posts.find((post) => post.slug === currentPath) || {
    notfound: true,
  };
  return { props: { post } };
}
