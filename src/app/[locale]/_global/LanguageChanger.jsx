"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LanguageChanger() {
  const locale = useLocale();
  const pathname = usePathname();
  const getLastSegment = (pathname) => {
    const segments = pathname.split("/");
    const lastSegment = segments.pop();

    // If the last segment is empty (which means the URL ends with '/blog'), pop another segment
    if (lastSegment === "" || lastSegment === "it" || lastSegment === "de") {
      return segments.join("/").replace("/it", "").replace("/de", "") || "/";
    }

    // Join the remaining segments excluding the language segment '/it' or '/de'
    return (
      segments.join("/").replace("/it", "").replace("/de", "") +
      "/" +
      lastSegment
    );
  };

  const lastSegment = getLastSegment(pathname);

  console.log("pathname", pathname);

  return (
    <div className="lang-switcher">
      <Link
        locale="en"
        href={`${lastSegment}`}
        className={locale === "en" ? "active" : ""}
      >
        EN
      </Link>
      <Link
        locale="de"
        href={`${lastSegment}`}
        className={locale === "de" ? "active" : ""}
      >
        DE
      </Link>
      <Link
        locale="it"
        href={`${lastSegment}`}
        className={locale === "it" ? "active" : ""}
      >
        IT
      </Link>
      {/*<Link
        locale="bg"
        href={`/bg${lastSegment}`}
        className={selectedLocale === "bg" ? "active" : ""}
      >
        BG
      </Link>*/}

      <style jsx>{`
        button {
          margin-right: 10px;
          padding: 8px 16px;
          border: none;
          cursor: pointer;
          background-color: #f0f0f0;
          border-radius: 4px;
        }
        button.active {
          background-color: #0070f3;
          color: white;
        }
      `}</style>
    </div>
  );
}
