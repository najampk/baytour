import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import content from './blogposts.json'; 
export default function Attractions() {

 
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
        <title>Discover the Best Tourist Attractions | Baytours</title>
        <meta name="title" content="Discover the Best Tourist Attractions | Baytours" />
        <meta name="description" content="Plan your next adventure with our comprehensive guide to the top tourist attractions around the world. Explore new cultures and stunning landscapes." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta itemProp="image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Discover the Best Tourist Attractions | Baytours" />
        <meta name="twitter:description" content="Plan your next adventure with our comprehensive guide to the top tourist attractions around the world. Explore new cultures and stunning landscapes." />
        <meta name="twitter:image:src" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta property="og:title" content="Discover the Best Tourist Attractions | Baytours" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta property="og:description" content="Plan your next adventure with our comprehensive guide to the top tourist attractions around the world. Explore new cultures and stunning landscapes." />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <link rel="canonical" href="https://baytour.net/tourist-attractions" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Best Tourist Attractions in San Francisco"
        pageImg="hdr-4.jpg"
      />

      <section className="main-sec container mx-auto pb-10">

        <span className="text-red-500 text-4xl">{content.title}</span>


        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 text-center">

        {content.posts.map(post => {
          if (post.category == "attractions") {
            return (
          <div className="bx-item-bb h-auto" key={post.id}>
          <div className="flex flex-col">
            <Image
              src={post.featured_img}
              alt={post.title}
              title={post.title}
              className="rounded-lg mt-3"
              width={400}
              height={300}
            />

            <Link href={"/blog/"+post.slug} title={post.title}><h2 className="hover:text-blue-500" >{post.title}</h2></Link>
            <p>{post.shortdescription}</p>
          </div>
        </div>
           ) }
           })}
 
  
        </div>
      </section>
    </>
  );
}
