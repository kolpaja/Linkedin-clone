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
  padding: 60px 0;
  margin: auto;
  align-content: start;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

export const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 1;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  :hover {
    background-color: rgb(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.9);
  }
`;
