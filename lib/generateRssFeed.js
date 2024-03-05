import { writeFileSync } from "fs";
import content from "../pages/blogposts.json";

import RSS from "rss";
 
export default async function getRSS() {
    
  const siteURL = "https://baytour.net/";
  const allBlogs = await content.posts; 
  const feed = new RSS({
    title: "San Francisco Limo - SFO City Limousine Services & Rentals",
    description: "Travel in style with San Francisco Limo. Experience luxury city transportation services & rentals. Book now for a memorable trip - 510-890-8393 SFO City.",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en-us",
    image_url: 'https://baytour.net/baytours.net-logo.png',
	favicon: 'https://baytour.net/favicon.ico',
	generator: 'Getsol Inc.', // optional, default = 'Feed for Node.js'
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Baytour.net`,
  });
 
  // function makedate(dated){   
    
  //     var year  = dated.year;    var day  = (dated.dayOfMonth < 10 ? '0':'') + dated.dayOfMonth;    
  //     var month  = ((dated.month+1) < 10 ? '0':'') + (dated.month+1);      
  //      var dt =  year+"-"+month+"-"+day;
  //     return dt; 
  // } 
 
  
  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/${post.slug}`,
      date: post.lastmod,
      description: post.shortdescription, 
            
    });
  });

   
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}