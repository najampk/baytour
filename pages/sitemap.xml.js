import content from "./blogposts.json";
import contentfleet from "./fleet.json";
function generateSiteMap(posts,fleet) {
  

  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/images/main-sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
    <loc>https://baytour.net</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
   <url>
    <loc>https://baytour.net/about</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
     <url>
    <loc>https://baytour.net/airport-limo</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
     <url>
    <loc>https://baytour.net/family-tours</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
   <url>
   <loc>https://baytour.net/corporate-transfer</loc>
   <lastmod>2023-02-01</lastmod>
  </url> 
  <url>
  <loc>https://baytour.net/meet-greet-services</loc>
  <lastmod>2023-02-01</lastmod>
 </url> 
 <url>
 <loc>https://baytour.net/napa-vally-limo-tour</loc>
 <lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://baytour.net/san-francisco-city-tour</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://baytour.net/special-services</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://baytour.net/tourist-attractions</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://baytour.net/contact-us</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://baytour.net/reservation</loc>
<lastmod>2023-02-01</lastmod>
</url>
<url>
<loc>https://baytour.net/privacy-policy</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://baytour.net/disclaimer</loc>
<lastmod>2023-02-01</lastmod>
</url> 

     ${posts
       .map(({ slug,lastmod }) => {
         return `
       <url>
       <loc>${`https://baytour.net/blog/${slug}`}</loc>
       <lastmod>${`${lastmod}`}</lastmod>
       </url> 
     `;
       })
       .join("")}

       ${fleet
        .map(({ slug,lastmod }) => {
          return `
        <url>
        <loc>${`https://baytour.net/fleet/${slug}`}</loc>
        <lastmod>${`${lastmod}`}</lastmod>
        </url> 
      `;
        })
        .join("")}
   </urlset>

 `;
}
function SiteMap() {}
export async function getServerSideProps({ res }) {
  const posts = content.posts; 
  const fleet = contentfleet.fleet;   
  const sitemap = generateSiteMap(posts,fleet);  
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;
