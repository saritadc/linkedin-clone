import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = (props:any) => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/images/login-logo.svg" alt="" />
        </Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Welcome>
          <h1>Welcome to our professional Community</h1>
          <img src="/images/login-hero.svg" alt="community"/>
        </Welcome>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="google logo"/>
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1120px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0px 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  /* box-shadow: inset 0 0 0 1px #0a66c2; */
  border: #0a66c2 1px solid;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  &:hover {
    background-color: #a2c5e8;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  align-items: center;
  min-height: 700px;
  padding: 40px 0px 140px 0px;
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 1138px;
  @media (max-width: 768) {
    margin: auto;
    min-height: 0px;
  }
`;

const Welcome = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 50px;
    color: #8f5849;
    font-weight: 100;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    z-index: -1;
    width: 700px;
    height: 660px;
    position: absolute;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  @media(max-width: 768px){
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 15px 100px;
  border: 1px solid #6f6f6f;
  border-radius: 30px;
  vertical-align: middle;
  transition-duration: 160ms;
  color: #858585;
  font-size: 20px;
  &:hover {
    background-color: #9f9f9f;
    cursor: pointer;
  }
`;

export default Login;
