import "@/styles/blog.scss";
import React from "react";
import BlogHero from "./_components/BlogHero";
import BlogWrap from "./_components/BlogWrap";

export const metadata = {
  title: "Marketing Insights and Strategies",
  description:
    "Explore our blog for expert marketing insights, strategies, and the latest trends. Stay informed with articles on optimising campaigns, audience analysis, and more from Next Wave Ad.",
  openGraph: {
    title: "Marketing Insights and Strategies",
    description:
      "Explore our blog for expert marketing insights, strategies, and the latest trends. Stay informed with articles on optimising campaigns, audience analysis, and more from Next Wave Ad.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

const MarketingThinking = () => {
  return (
    <>
      <BlogHero />
      <BlogWrap />
    </>
  );
};

export default MarketingThinking;
