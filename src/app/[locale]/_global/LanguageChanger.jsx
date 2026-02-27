"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

export default function LanguageChanger() {
  const [switcherOpened, setSwitcherOpened] = useState(false);
  const [activeFlag, setActiveFlag] = useState("/images/bg.svg");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitcher = () => {
    setSwitcherOpened(!switcherOpened);
  };

  const handleChange = (lang, flag) => {
    setActiveFlag(flag);
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="lang-switcher">

      <button className="active-flag" onClick={() => handleSwitcher()}>
        {locale == "en" && (<img src="/images/en.svg" />)}
        {locale == "de" && (<img src="/images/de.svg" />)}
        {locale == "it" && (<img src="/images/it.svg" />)}
        {locale == "bg" && (<img src="/images/bg.svg" />)}
      </button>

      <div className={`switcher-popup ${switcherOpened ? 'opened' : ''}`}>
        <button
          onClick={() => handleChange("en", "/images/en.svg")}
          className={locale === "en" ? "active" : ""}
        >
          <img src="/images/en.svg" />
          <span>English</span>
        </button>
        <button
          onClick={() => handleChange("de", "/images/de.svg")}
          className={locale === "de" ? "active" : ""}
        >
          <img src="/images/de.svg" />
          <span>German</span>
        </button>
        <button
          onClick={() => handleChange("it", "/images/it.svg")}
          className={locale === "it" ? "active" : ""}
        >
          <img src="/images/it.svg" />
          <span>Italian</span>
        </button>
        <button
          onClick={() => handleChange("bg", "/images/bg.svg")}
          className={locale === "bg" ? "active" : ""}
        >
          <img src="/images/bg.svg" />
          <span>Bulgarian</span>
        </button>
      </div>

      <style jsx>{`
        button {
          margin-right: 10px;
          padding: 0;
          border: none;
          cursor: pointer;
          background-color: transparent;
          border-radius: 0;
          color: #c5c5c5;
          font-size: 12px;
        }
        button.active {
          color: #eb6418;
        }
      `}</style>
    </div>
  );
}
