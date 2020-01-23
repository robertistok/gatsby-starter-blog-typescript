import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { File } from "graphql-types";

import SEO from "../components/Seo";
import { Redirect } from "../components/common";
import { useSiteMetadata } from "../hooks";

const ResumePage: React.FunctionComponent = (): React.ReactElement => {
  // change the resume file  to yours
  const { file: resume }: { file: File } = useStaticQuery(graphql`
    {
      file(name: { eq: "robert_istok_resume" }) {
        publicURL
      }
    }
  `);

  const { author } = useSiteMetadata();

  return (
    <>
      <SEO
        title="Curriculum Vitae"
        description={`Check out ${author.name}'s resume and feel free to drop him a message 🙏`}
      />
      <Redirect to={resume.publicURL} type="application/pdf" />
    </>
  );
};

export default ResumePage;
