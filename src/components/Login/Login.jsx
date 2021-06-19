import React from "react";
import { Container, Join, Nav, Section, SignIn } from "./Login.styles";

function Login(props) {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>Section</Section>
    </Container>
  );
}

export default Login;
