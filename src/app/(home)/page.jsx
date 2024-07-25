import Image from "next/image";
import HomeHero from "./_components/HomeHero";
import HomeSolutions from "./_components/HomeSolutions";
import HomeWhy from "./_components/HomeWhy";
import HomeWhatWeCanDo from "./_components/HomeWhatWeCanDo";
import HomeHowWeHack from "./_components/HomeHowWeHack";
import HomeTools from "./_components/HomeTools";
import HomeRecentAnalytics from "./_components/HomeRecentAnalytics";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeWhy />
      <HomeWhatWeCanDo />
      <HomeHowWeHack />
      <HomeTools />
      <HomeRecentAnalytics />
    </>
  );
}
