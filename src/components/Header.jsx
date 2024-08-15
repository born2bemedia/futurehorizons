"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import X from "@/icons/social/X";

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

            <div className="header-right">
              <div className="contact-row">
                <Link href="mailto:info@nextwavead.com">
                  info@nextwavead.com
                </Link>
                <Link href="tel:+35924373071">+35924373071</Link>
                <div className="soc">
                  <Link href="https://www.facebook.com/nextwavead/" target="_blank">
                    <Facebook />
                  </Link>
                  <Link href="https://www.instagram.com/nextwavead/" target="_blank">
                    <Instagram />
                  </Link>
                  <Link href="https://x.com/nextwavead" target="_blank">
                    <X />
                  </Link>
                </div>
              </div>

              <nav>
                <Link href="/solutions">Solutions</Link>
                <Link href="/all-services">All services</Link>
                <Link href="/experts">Experts</Link>
                <Link href="/get-a-proposal">Get a proposal</Link>
                <Link href="/how-we-work">How we work</Link>
                <Link href="/marketing-thinking">Marketing thinking</Link>
                <Link href="/contact-us">Contact us</Link>
              </nav>
            </div>

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
            <Link href="/marketing-thinking">Marketing thinking</Link>
            <Link href="/contact-us">Contact us</Link>
          </nav>
          <div className="contact-row">
            <Link href="mailto:info@nextwavead.com">info@nextwavead.com</Link>
            <Link href="tel:+35924373071">+35924373071</Link>
            <div className="soc">
              <Link href="https://www.facebook.com/nextwavead/" target="_blank">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/nextwavead/" target="_blank">
                <Instagram />
              </Link>
              <Link href="https://x.com/nextwavead" target="_blank">
                <X />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
