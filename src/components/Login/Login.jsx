import React from "react";
import {
  Container,
  Join,
  Nav,
  Section,
  Hero,
  SignIn,
  Form,
  Google,
} from "./Login.styles";

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
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img
            src="/images/login-hero.svg"
            alt="login linkedin photo to the community"
          />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="sign in with google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

export default Login;
