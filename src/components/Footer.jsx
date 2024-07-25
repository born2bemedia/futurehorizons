import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import TikTok from "@/icons/social/TikTok";
import X from "@/icons/social/X";
import YouTube from "@/icons/social/YouTube";
import Linkedin from "@/icons/social/Linkedin";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-wrap">
        <div className="_container">
          <div className="footer-row">
            <div className="left">
              <div className="logo">
                <Link href="/">
                  <img src="/images/foot-logo.svg" />
                </Link>
                <p>Data-Driven Marketing for Businesses16</p>
              </div>
              <ul>
                <li>Address:</li>
                <li>Email:</li>
                <li>Phone:</li>
              </ul>
              <div className="soc">
                <Link href="#">
                  <Facebook />
                </Link>
                <Link href="#">
                  <Instagram />
                </Link>
                <Link href="#">
                  <TikTok />
                </Link>
                <Link href="#">
                  <X />
                </Link>
                <Link href="#">
                  <YouTube />
                </Link>
                <Link href="#">
                  <Linkedin />
                </Link>
              </div>
            </div>
            <div className="right">
              <ul>
                <li>
                  <Link href="#">Solutions</Link>
                </li>
                <li>
                  <Link href="#">All services</Link>
                </li>
                <li>
                  <Link href="#">Get a proposal</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#">Experts</Link>
                </li>
                <li>
                  <Link href="#">How we work</Link>
                </li>
                <li>
                  <Link href="#">Marketing thinking</Link>
                </li>
                <li>
                  <span className="account">
                    <Link href="#">Sign In</Link>
                    <span className="divider">|</span>
                    <Link href="#">Sign up</Link>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#">Terms of Use</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="#">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-copy">
        <div className="_container">
          © {currentYear} Future Horizons LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
