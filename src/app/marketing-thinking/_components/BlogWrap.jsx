"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogWrap = () => {
  return (
    <section className="blog-wrap">
      <div className="_container">
        <div className="blog-wrap__body">
          <div className="post">
            <Link
              href="/marketing-thinking/optimising-google-ads-for-high-performance-campaigns-expert-strategies"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article1.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>
                  Optimising Google Ads for High-Performance Campaigns: Expert
                  Strategies
                </h2>
                <p>
                  Explore expert strategies for boosting Google Ads performance,
                  including advanced keyword techniques, ad copy optimization,
                  and effective bid management. With our data-driven approach,
                  enhance your campaigns and achieve exceptional ROI.
                </p>
              </div>
              <Link
                href="/marketing-thinking/optimising-google-ads-for-high-performance-campaigns-expert-strategies"
                className="orange-button"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="post">
            <Link
              href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article2.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>
                  Avoiding Pitfalls in Advertising Analytics: Advanced Insights
                </h2>
                <p>
                  Learn how to avoid common analytics mistakes and improve data
                  accuracy.
                </p>
              </div>
              <Link
                href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
                className="orange-button"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="post">
            <Link
              href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article3.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>
                  Advanced Tools for Comprehensive Target Audience Analysis
                </h2>
                <p>
                  Uncover the best tools and techniques for in-depth target
                  audience analysis.
                </p>
              </div>
              <Link
                href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
                className="orange-button"
              >
                Read
              </Link>
            </div>
          </div>
          <div className="post">
            <Link
              href="/marketing-thinking/maximising-roi-with-data-driven-email-marketing-strategies"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article4.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>
                  Maximising ROI with Data-Driven Email Marketing Strategies
                </h2>
                <p>
                  Boost your email marketing effectiveness with data-driven
                  strategies.
                </p>
              </div>
              <Link
                href="/marketing-thinking/maximising-roi-with-data-driven-email-marketing-strategies"
                className="orange-button"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogWrap;
