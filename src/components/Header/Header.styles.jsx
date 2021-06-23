import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.08);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0 24px;
  z-index: 3;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;
export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
  }
  input {
    border: none;
    box-shadow: none;
    border-radius: 2px;
    background-color: #eef3f8;
    line-height: 1.75;
    width: 218px;
    padding: 0 8px 0 40px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    height: 34px;
    vertical-align: top;
    border-color: #dce6f1;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 4px;
  z-index: 1;
  width: 40px;
  border-radius: 0 2px 2px 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const NavList = styled.li`
  /* ... */
`;
