import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import MainHeader from "../../components/mainheader";
import Head from "next/head";
import content from '../blogposts.json'; 
// import generateRSS from "../../lib/generateRssFeed";
import getRSSFeed from "../../lib/gRssFeed"; 
 
export default function BlogPosts() {

 
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
        <title>Insightful Blog Posts | Source for Thought-Provoking Content</title>
        <meta name="title" content="Insightful Blog Posts | Source for Thought-Provoking Content" />
        <meta name="description" content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered." />
        <meta itemProp="image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Insightful Blog Posts | Source for Thought-Provoking Content" />
        <meta name="twitter:description" content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered." />
        <meta name="twitter:image:src" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta property="og:title" content="Insightful Blog Posts | Source for Thought-Provoking Content" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <meta property="og:description" content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered." />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75" />
        <link rel="canonical" href="https://baytour.net/blog"/>
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>



      <MainHeader
        pageHeading="Insightful Blog Posts"
        pageImg="hdr-4.jpg"
      />

      <section className="main-sec container mx-auto pb-10">
		    <h2 className="text-gray-400 hover:text-gray-500 pb-10">Source for Thought-Provoking Content</h2>
        <h3 className="text-red-500 text-4xl">{content.title}</h3>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 text-center">

        {content.posts.map(post =>
          
          <div className="bx-item-bb items-start  h-auto" key={post.slug}>
          <div className="flex flex-col">
            <Image
              src={post.featured_img}
              alt={post.title}
              title={post.title}
              className="rounded-lg w-full h-56"
              width={400}
              height={300}
            />

            <Link href={"/blog/"+post.slug} title={post.title}><h2 className="hover:text-blue-500" >{post.title}</h2></Link>
			
			
            <p>{post.shortdescription}</p>
          </div>
        </div>
  
           )}
 
  
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {  
   
 // await generateRSS();
    await getRSSFeed();
  return {
    props: {
     
    },
  }
 
}