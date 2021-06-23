import React from "react";

import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListWrap,
  Search,
  SearchIcon,
} from "./Header.styles.jsx";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home logo to" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="home logo to" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a>
                <img src="/images/nav-home.svg" alt="" />
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
