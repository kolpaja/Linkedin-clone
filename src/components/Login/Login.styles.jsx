import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 12px 0 16px;
  max-width: 1128px;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
  text-decoration: none;
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  :hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 165ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-decoration: none;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  :hover {
    cursor: pointer;
    color: #0a66c2;
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

export const Section = styled.section`
  min-height: 700px;
  width: 100%;
  max-width: 1128px;
`;
