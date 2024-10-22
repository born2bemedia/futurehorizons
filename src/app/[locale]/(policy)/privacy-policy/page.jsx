import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";
import { useLocale } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de", "bg"];


  const params = [];

  slugs.forEach((slug) => {
    locales.forEach((locale) => {
      params.push({ slug, locale });
    });
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("privacy-policy", locale);

  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "https://nextwavead.com/images/meta.png",
    },
  };
}

const TermsAndConditions = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const page = await getPage("privacy-policy", locale);
  return (
    <>
      <div className="policy-head"></div>
      <section className="policy-wrap">
        <div className="_container">
          <div className="policy-wrap__body">
            <h1>{page.title}</h1>
            <article dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
