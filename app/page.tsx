import Aboutus from "@/Components/AboutUs/About";
import Brand from "@/Components/Brands/Brand";
import OurMenu from "@/Components/BrowseMenuSec1/OurMenu";
import Contact from "@/Components/Contact/Contact";
import Hero from "@/Components/Hero/Hero";
import Instagram from "@/Components/Insagram/Instagram";
import InspireSec from "@/Components/InspireSec/InspireSec";
import Artical from "@/Components/OUraRtical/Artical";
import TiltleClient from "@/Components/OurClients/TiltleClient";

export default function Home() {
  return (    
      <div>
        <Hero />
        <Brand />
        <OurMenu />
        <Aboutus />
        <InspireSec />
        <TiltleClient />
        <Artical />
        <Contact />
        <Instagram />
      </div>
  );
}
