"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header>
        <div className="_container">
          <div className="header-row">
            <Link href="/" className="logo">
              <img src="/images/logo-main.svg" alt="logo" />
            </Link>

            <nav>
              <Link href="/solutions">Solutions</Link>
              <Link href="/all-services">All services</Link>
              <Link href="/experts">Experts</Link>
              <Link href="/get-a-proposal">Get a proposal</Link>
              <Link href="/how-we-work">How we work</Link>
              <Link href="#">Marketing thinking</Link>
              <Link href="#">Contact us</Link>
            </nav>

            <span onClick={() => menuOpen()} className="menu-btn">
              {!menuOpened ? (
                <img src="/images/menu-buger.svg" alt="menu-buger" />
              ) : (
                <img alt="logo" src="/images/burger-close.svg" />
              )}
            </span>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <Link href="/solutions">Solutions</Link>
            <Link href="/all-services">All services</Link>
            <Link href="/experts">Experts</Link>
            <Link href="/get-a-proposal">Get a proposal</Link>
            <Link href="/how-we-work">How we work</Link>
            <Link href="#">Marketing thinking</Link>
            <Link href="#">Contact us</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
