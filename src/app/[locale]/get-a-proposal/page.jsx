import React from "react";
import "@/styles/proposal.scss";
import ProposalHero from "./_components/ProposalHero";

export const metadata = {
  title: "Request a Custom Marketing Proposal",
  description:
    "Get a tailored marketing proposal that addresses your specific needs and goals. Fill out our form to receive a customised plan from Next Wave Ad's expert team.",
  openGraph: {
    title: "Request a Custom Marketing Proposal",
    description:
      "Get a tailored marketing proposal that addresses your specific needs and goals. Fill out our form to receive a customised plan from Next Wave Ad's expert team.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

const Proposal = () => {
  return (
    <>
      <ProposalHero />
    </>
  );
};

export default Proposal;
