"use client";
import "@/styles/blog.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const BlogSingle = () => {
  const router = useRouter();
  const { slug, locale } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug && locale) {
      // Fetch post data after the component mounts
      const fetchPost = async () => {
        const postData = await getPost(slug, locale);
        setPost(postData);
      };
      fetchPost();
    }
  }, [slug, locale]);

  if (!post) {
    return <div>Loading...</div>;
  }

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
