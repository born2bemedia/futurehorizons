import "@/styles/blog.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import { unstable_setRequestLocale } from 'next-intl/server';

// Generate static params for SSG
export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ["en", "it", "de"];

  const params = slugs.flatMap((slug) =>
    locales.map((locale) => ({ slug, locale }))
  );

  return params;
}

// Generate metadata based on the post's SEO settings
export async function generateMetadata({ params: { slug, locale } }) {
  unstable_setRequestLocale(locale); // Ensure locale is statically set
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title || "Default Title",  // Fallback if post data is missing
    description: post.seo_description || "Default description",
    openGraph: {
      title: post.seo_title || "Default OpenGraph Title",
      description: post.seo_description || "Default OpenGraph description",
      images: "https://nextwavead.com/images/meta.png",
    },
  };
}

// Main component to display blog post
const BlogSingle = async ({ params: { slug, locale } }) => {
  // Fetch post data for the given slug and locale
  const post = await getPost(slug, locale);

  // If post data doesn't exist, you can handle 404 or other error handling here

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
          {/* Render the post body safely using dangerouslySetInnerHTML */}
          <article dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
