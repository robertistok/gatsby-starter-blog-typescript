/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import Social from "./Social";

import { rhythm, scale } from "../utils/typography";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { device } from "../styles/constants";

interface IntroProps {}

const Intro: React.FunctionComponent<IntroProps> = (): React.ReactElement => {
  const { author } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query Intro {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Root>
      <HeadingContainer>
        <StyledImage
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
        />
        <PitchContainer>
          <Greeting>Hi, I'm Robert 👋</Greeting>
          <SubTitle>Javascript Engineer</SubTitle>
          <Description>
            A web developer fascinated by automation, having a product mindset
            and a neverending hunger to grow.
          </Description>
        </PitchContainer>
      </HeadingContainer>
      <Social />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    align-items: inherit;
  }
`;

const HeadingContainer = styled.section`
  display: grid;
  grid-template-rows: 150px auto;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: none;
    margin-top: ${rhythm(1.25)};
  }
`;

const PitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    display: block;
    grid-row: 1;
  }
`;

const Greeting = styled.h1`
  margin: ${rhythm(1 / 4)} 0;
  margin-bottom: 0;

  ${scale(0.25)}

  @media ${device.tablet} {
    ${scale(1)}
  }
`;

const SubTitle = styled.h4`
  ${scale(-0.15)};
  margin-top: 0;

  @media ${device.tablet} {
    margin-top: ${rhythm(1 / 4)};
    ${scale(0.25)};

    &:after {
      margin: 30px 0;
      content: "";
      width: 50px;
      border-bottom: 1px solid #ccc;
      display: block;
    }
  }
`;

const Description = styled.p`
  ${scale(-0.3)};
  text-align: center;

  @media ${device.tablet} {
    ${scale(0)};
    text-align: inherit;
  }
`;

const StyledImage = styled(Image)`
  margin-bottom: 0;
  justify-self: center;
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;

  @media ${device.tablet} {
    grid-row: auto;
    justify-self: flex-end;
  }
`;

export default Intro;
