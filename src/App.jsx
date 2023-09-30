import React from "react";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Card from "./components/Card";
import MediaQuery from 'react-responsive'


const App = () => {

  const playlist = [
    {
      image: "https://1.bp.blogspot.com/-FxbrmlT71uw/X06GSCTuOvI/AAAAAAAABoc/Ma2NGqGyDL0tWGUj6-HBiNQDF8g7WI_AgCLcBGAsYHQ/s1600/Taarak%2BMehta%2BKa%2BOoltah%2BChashmah%2B1st%2BSeptember%2B2020%2BTmkoc%2BNew%2BFull%2BEpisode%2B2983.jpg",
      icon: "http://vignette3.wikia.nocookie.net/logopedia/images/6/62/Sony_pal.png/revision/latest?cb=20160410100634",
      title: "Taarak Mehta Ka Oolta Chasma",
      channel: "Sony Liv",
      views: "9.2M",
      uploadTime: "2 months ago"
    },

    {
      image:"https://images-na.ssl-images-amazon.com/images/I/71rVjwXc7LL._RI_.jpg",
      icon : "https://i.pinimg.com/originals/f8/6c/f6/f86cf684bf89e4dc1bbcece283a3e741.jpg",
      title: "Shin Chan Ep-1",
      channel: "Hungama",
      views: "11.2M",
      uploadTime: "6 months ago"
    },
    {
      image: "http://wallpapercave.com/wp/VSx6fFa.jpg",
      icon: "https://tse1.mm.bing.net/th?id=OIP.gHxQWbxUzkWdEtfp6DgzhgHaFr&pid=Api&P=0&h=180",
      title: "Friends",
      channel: "Central Comedy",
      views: "15 M",
      uploadTime: "2 years ago"
    },
    {
      image: "https://image.winudf.com/v2/image/Y3JpY2tldHdvcmxkLmNvbS5saXZlY3JpY2tldF9zY3JlZW5fNF9xMDJyN2NyYw/screen-4.jpg?fakeurl=1&type=.jpg",
      icon: "http://vignette3.wikia.nocookie.net/logopedia/images/6/62/Sony_pal.png/revision/latest?cb=20160410100634",
      title: "India vs Pakistan match",
      channel: "",
      views: "2.6M",
      uploadTime: "9 months ago"
    },
    {
      image: "https://d229kpbsb5jevy.cloudfront.net/epgcatchup/images/Aaj_Tak_Sau_Shahar_Sau_Khabar_229633.jpg",
      icon: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Aaj_tak-770x433.jpeg?_V54p..xs5KOQtkIbASHh7BFdZqUsQ1f",
      title: "Aaj Tak News",
      channel: "Aaj Tak",
      views: "15 M watching",
      uploadTime: "LIVE"
    },
    {
      image: "https://i.ytimg.com/vi/MhVsIp7W0dQ/maxresdefault.jpg",
      icon: "https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png",
      title: "Lofi Songs 30 Minutes",
      channel: "saregama",
      views: "13k",
      uploadTime: "10 days ago"
    },
    {
      image: "https://i.ytimg.com/vi/ktP8QsPzKfs/maxresdefault.jpg",
      icon: "https://media-exp1.licdn.com/dms/image/C4E0BAQHD0TZGPKh9RA/company-logo_200_200/0/1621929425964?e=2147483647&v=beta&t=H_laTw0I1CrvQE8CJ11J_-YbNVYas0e71J5jnc4h69c",
      title: "Operating Systems in 30 mins.",
      channel: "Apna College",
      views: "15k",
      uploadTime: "1 year ago"
    },
    {
      image: "https://i.ytimg.com/vi/_E_6EcA6Kr4/maxresdefault.jpg",
      icon: "https://i0.wp.com/www.foxtechzone.com/wp-content/uploads/2022/07/physics-wallah-app-for-pc.png?resize=288%2C300&ssl=1",
      title: "Magnetism and Matter",
      channel: "Physics wallah",
      views: "15M",
      uploadTime: "7 months ago"
    },
    {
      image: "http://mrunal.org/wp-content/uploads/2018/05/promo-UAP-FB-24518-FB.jpg",
      icon: "https://yt3.ggpht.com/a/AGF-l7-_awKbkYwiTVvl9myVWvz-Dr0n83YhFntjOw=s900-c-k-c0xffffffff-no-rj-mo",
      title: "UPSC Classes",
      channel: "Unacademy",
      views: "20k",
      uploadTime: "3 months ago"
    },
    {
      image: "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/7/22/original/7_PTI_chandrayaan_pic.jpg",
      icon: "https://static.businessworld.in/article/article_extra_large_image/1608101890_DKz9K0_new_abp_logo.jpg",
      title: "India Makes It To The Moon.",
      channel: "ABP News",
      views: "9.2M",
      uploadTime: "10 months ago"
    },


  ]
  return (
    <>
    <MediaQuery minWidth={1224}>
      <main className="">
      <Search />
      <Hero />
      
      <section className="flex flex-wrap p-4">

      {
        playlist.map((p) => {
          return <Card
                       image = {p.image} 
                       icon = {p.icon} 
                       title = {p.title} 
                       channel = {p.channel} 
                       views = {p.views} 
                       uploadTime = {p.uploadTime}
                       
                  />
        })
      }
        
      </section>
    </main>

    </MediaQuery>
    <MediaQuery maxWidth={1224}>
    <main className="">
      <Search className="hidden"/>
      <Hero  />
      
      <section className="block">

      {
        playlist.map((p) => {
          return <Card
                       image = {p.image} 
                       icon = {p.icon} 
                       title = {p.title} 
                       channel = {p.channel} 
                       views = {p.views} 
                       uploadTime = {p.uploadTime}
                       
                  />
        })
      }
        
      </section>
    </main>
    </MediaQuery>
    </>
  );
};

export default App;


<MediaQuery minWidth={1224}>
<p>You are a desktop or laptop</p>
<MediaQuery minWidth={1824}>
  <p>You also have a huge screen</p>
</MediaQuery>
</MediaQuery>