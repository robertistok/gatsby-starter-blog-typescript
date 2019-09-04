import React from "react";
import styled from "styled-components";

import { rhythm, scale } from "../../utils/typography";
import { MarkdownRemark } from "../../types/graphql-types";

interface PostProps {
  post: MarkdownRemark;
}

const Post: React.FunctionComponent<PostProps> = ({
  post,
}): React.ReactElement => {
  return (
    <Root>
      <Title>{post.frontmatter.title}</Title>
      <Info>
        {post.frontmatter.date} · {post.timeToRead} min read
      </Info>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Root>
  );
};

const Root = styled.section`
  margin: auto;
  max-width: ${rhythm(28)};
  ${scale(0.1)}
`;

const Title = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`;

const Info = styled.p`
  font-size: ${rhythm(0.6)};
  font-style: italic;
  display: block;
  margin-bottom: ${rhythm(1)};
`;

const Content = styled.div`
  .separator {
    margin: 20px 0px;
    border: none;
    text-align: center;
    font-size: ${rhythm(1)};
    font-weight: 300;

    &:before {
      line-height: 1.4;
      text-indent: 0.6em;
      letter-spacing: 0.6em;
      content: "···";
    }
  }

  .md-figure-caption,
  .gatsby-resp-image-figcaption {
    text-align: center;
    ${scale(-0.2)};
    font-style: italic;
  }

  .gatsby-resp-image-background-image {
    margin-bottom: ${rhythm(0.1)};
  }

  .md-figure-img {
    margin-bottom: ${rhythm(0.1)};
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .video_container {
    iframe {
      width: 100%;
      height: ${rhythm(20)};
      margin-bottom: 0;
    }
  }
`;

export default Post;
