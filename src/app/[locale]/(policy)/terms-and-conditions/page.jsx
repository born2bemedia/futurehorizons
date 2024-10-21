import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";
import { useLocale } from "next-intl";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];


  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return slugs;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("terms-and-conditions", locale);

  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "https://nextwavead.com/images/meta.png",
    },
  };
}

const TermsAndConditions = async ({ params: { locale } }) => {
  
  const page = await getPage("terms-and-conditions", locale);
  return (
    <>
      <div className="policy-head"></div>
      <section className="policy-wrap">
        <div className="_container">
          <div className="policy-wrap__body">
            <h1>{page.title}</h1>
            {page.date && <div className="date">Last updated: {page.date}</div>}
            <div className="date"></div>
            <article dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
