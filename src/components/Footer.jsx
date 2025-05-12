import React from "react";
import "@/styles/footer.scss";
import { Link } from "@/navigation";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import X from "@/icons/social/X";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

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
                  <b>{t("officeAddress")}:</b> 46 Alabin street, 4th floor, 1000 Sofia
                  Center, Sofia, Bulgaria
                  <br />
                  <b>{t("registeredAddress")}:</b> Studentski District, 91B Metodi
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
                <Link href="https://www.facebook.com/nextwaveadfuturehorizons/" target="_blank">
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
            <div className="right">
              <ul>
                <li>
                  <Link href="/solutions">{t("solutions")}</Link>
                </li>
                <li>
                  <Link href="/all-services">{t("services")}</Link>
                </li>
                <li>
                  <Link href="/get-a-proposal">{t("proposal")}</Link>
                </li>
                <li>
                  <Link href="/contact-us">{t("contact")}</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/experts">{t("experts")}</Link>
                </li>
                <li>
                  <Link href="/how-we-work">{t("howWeWork")}</Link>
                </li>
                <li>
                  <Link href="/marketing-thinking">{t("marketing")}</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/terms-and-conditions">{t("terms")}</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">{t("privacy")}</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">{t("cookie")}</Link>
                </li>
                <li>
                  <Link href="/refund-policy">{t("refund")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-copy">
        <div className="_container">
          © {currentYear} Future Horizons LTD. {t("copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
