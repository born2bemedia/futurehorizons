import "@/styles/blog.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
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
