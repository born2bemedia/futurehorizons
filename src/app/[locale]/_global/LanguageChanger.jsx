"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="lang-switcher">
      <button
        onClick={() => handleChange("en")}
        className={locale === "en" ? "active" : ""}
      >
        EN
      </button>
      <button
        onClick={() => handleChange("de")}
        className={locale === "de" ? "active" : ""}
      >
        DE
      </button>
      <button
        onClick={() => handleChange("it")}
        className={locale === "it" ? "active" : ""}
      >
        IT
      </button>
      <button
        onClick={() => handleChange("bg")}
        className={locale === "bg" ? "active" : ""}
      >
        BG
      </button>

      <style jsx>{`
        button {
          margin-right: 10px;
          padding: 0;
          border: none;
          cursor: pointer;
          background-color: transparent;
          border-radius: 0;
          color:#c5c5c5;
          font-size:12px;
        }
        button.active {
          color: #eb6418;
        }
      `}</style>
    </div>
  );
}
