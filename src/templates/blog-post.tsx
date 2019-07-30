import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { rhythm, scale } from "../utils/typography";

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;

  const { previous, next } = props.pageContext;
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
        }}
      >
        {post.frontmatter.title}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: "block",
          marginBottom: rhythm(1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={"blog" + previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={"blog" + next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
