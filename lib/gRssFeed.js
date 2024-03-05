//import { writeFileSync } from "fs";

import fs from 'fs';
import content from "../pages/blogposts.json";
import { Feed } from "feed";
//import RSS from "rss"; 
export default async function getRSSFeed() {
    
  const siteURL = "https://baytour.net";
  const allBlogs = await content.posts; 

  const feed = new Feed({
    title: "San Francisco Limo - SFO City Limousine Services & Rentals",
    description: "Travel in style with San Francisco Limo. Experience luxury city transportation services & rentals. Book now for a memorable trip - 510-890-8393 SFO City.",
    id: siteURL,
    link: siteURL,
    language: "en-us",
    image: `${siteURL}/baytours.net-logo.png`, 
    favicon:`${siteURL}/favicon.ico`,  
    copyright:  `All rights reserved ${new Date().getFullYear()}, Baytour.net`,
    feedLinks: {
         rss2: `${siteURL}/feed.xml`,
         json: `${siteURL}/rss.json`,
         atom: `${siteURL}/atom.xml`,
    },
    generator: 'Getsol Inc.',
    updated: new Date(),
   
  });
  
  // function makedate(dated){   
    
  //     var year  = dated.year;    var day  = (dated.dayOfMonth < 10 ? '0':'') + dated.dayOfMonth;    
  //     var month  = ((dated.month+1) < 10 ? '0':'') + (dated.month+1);      
  //      var dt =  year+"-"+month+"-"+day;
  //     return dt; 
  // }  
  allBlogs.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `${siteURL}/blog/${post.slug}`,
      link:`${siteURL}/blog/${post.slug}`,
      description: post.shortdescription,
      content: post.article,
      date: new Date(post.lastmod), 
      author: [
        {
          name: post.author,
          email: "hi@najam.me",
          link: "https://baytour.net"
        },
         
      ],      
     // date: post.date,
       image: `${siteURL}${post.featured_img}`, 
    });
  });
   
    fs.writeFileSync('./public/feed.xml', feed.rss2());
    fs.writeFileSync('./public/rss.json', feed.json1());
    fs.writeFileSync('./public/atom.xml', feed.atom1());
 

}