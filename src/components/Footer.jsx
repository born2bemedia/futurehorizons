import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import X from "@/icons/social/X";

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
                  <img src="/images/foot-logo.svg" alt="foot-logo" />
                </Link>
                <p></p>
              </div>
              <ul>
                <li>
                  <b>Office address:</b> 46 Alabin street, 4th floor, 1000 Sofia
                  Center, Sofia, Bulgaria
                  <br />
                  <b>Registered address:</b> Studentski District, 91B Metodi
                  Andonov str., entr. A, ap. 14, Sofia 1797, Bulgaria
                </li>
                <li>
                  <Link href="mailto:info@nextwavead.com">
                    info@nextwavead.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+35924373071">+35924373071</Link>
                </li>
              </ul>
              <div className="soc">
                <Link href="#" target="_blank">
                  <Facebook />
                </Link>
                <Link href="#" target="_blank">
                  <Instagram />
                </Link>
                <Link href="#" target="_blank">
                  <X />
                </Link>
              </div>
            </div>
            <div className="right">
              <ul>
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/all-services">All services</Link>
                </li>
                <li>
                  <Link href="/get-a-proposal">Get a proposal</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/experts">Experts</Link>
                </li>
                <li>
                  <Link href="/how-we-work">How we work</Link>
                </li>
                <li>
                  <Link href="/marketing-thinking">Marketing thinking</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/terms-and-conditions">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
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
