import "@/styles/blog.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";

export async function generateStaticParams() {
  const locales = ["en", "it", "de"]; // List of locales
  const params = [];

  for (const locale of locales) {
    const slugs = await getSlugs(locale); // Fetch slugs for the locale

    slugs.forEach((slug) => {
      params.push({ slug, locale }); // Create params for each slug and locale
    });
  }

  return params; // Return the params array with all slug-locale combinations
}


export async function generateMetadata({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: "https://nextwavead.com/images/meta.png",
    },
  };
}

const BlogSingle = async ({ params: { slug, locale } }) => {
  const post = await getPost(slug, locale);

  //console.log(post);

  return (
    <>
      <section
        className="single-hero"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      >
        <div className="_container">
          <h1>{post.title}</h1>
        </div>
      </section>
      <section className="single-content">
        <div className="_container">
          <article dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
