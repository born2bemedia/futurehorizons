"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const getLastSegment = (pathname) => {
    const segments = pathname.split("/");
    const lastSegment = segments.pop();

    if (lastSegment === "" || lastSegment === "it" || lastSegment === "de") {
      return segments.join("/").replace("/it", "").replace("/de", "") || "/";
    }

    return (
      segments.join("/").replace("/it", "").replace("/de", "") +
      "/" +
      lastSegment
    );
  };

  const lastSegment = getLastSegment(pathname);

  useEffect(() => {
    setSelectedLocale(locale);
  }, []);

  console.log("pathname", pathname);

  return (
    <div className="lang-switcher">
      <Link
        locale="en"
        href={`/en${lastSegment}`}
        className={selectedLocale === "en" ? "active" : ""}
      >
        EN
      </Link>
      <Link
        locale="de"
        href={`/de${lastSegment}`}
        className={selectedLocale === "de" ? "active" : ""}
      >
        DE
      </Link>
      <Link
        locale="it"
        href={`/it${lastSegment}`}
        className={selectedLocale === "it" ? "active" : ""}
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
