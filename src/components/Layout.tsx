import React from "react";
import styled from "styled-components";

import Header from "./Header";

import { rhythm } from "../utils/typography";
import { device } from "../styles/constants";

interface LayoutProps {
  location?: any;
  title?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </Root>
  );
};

const Root = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(42)};
  height: 100vh;
  padding: ${rhythm(3 / 4)};

  @media ${device.tablet} {
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(42)};
  height: calc(100% - 30px - ${rhythm(1.5)});
`;

export default Layout;
