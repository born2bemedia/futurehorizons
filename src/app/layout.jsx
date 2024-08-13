import { DM_Sans } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { PopupsProvider } from "@/context/PopupsContext";
import OrderPopup from "@/components/OrderPopup";
import RequestPopup from "@/components/RequestPopup";
import { GoogleAnalytics } from "@next/third-parties/google";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Leading B2B Marketing Solutions | Next Wave Ad",
    template: "%s | Next Wave Ad",
  },
  description:
    "Discover top-tier B2B marketing services to boost your brand's visibility, drive qualified leads, and optimise your digital marketing strategy. Partner with Next Wave Ad for data-driven results.",
  openGraph: {
    title: {
      default: "Leading B2B Marketing Solutions | Next Wave Ad",
      template: "%s | Next Wave Ad",
    },
    description:
      "Discover top-tier B2B marketing services to boost your brand's visibility, drive qualified leads, and optimise your digital marketing strategy. Partner with Next Wave Ad for data-driven results.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <GoogleAnalytics gaId="G-DT5VS5W0E0" />
        <PopupsProvider>
          <Preloader />
          <Header />
          <main className="site">{children}</main>
          <Footer />
          <OrderPopup />
          <RequestPopup />
        </PopupsProvider>
      </body>
    </html>
  );
}
