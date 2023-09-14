import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

import { openGraphImage } from './shared-metadata'
 
export const metadata = {
  openGraph: {
    ...openGraphImage,
    title: 'More in details',
  },
}





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

// export function genrateMetadata({params}){
//   return {
//     title:"Arpit Portfolio",
//     description:"A portfolio for Arpit Pathak"
//   }
// }
