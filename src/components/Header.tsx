import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props:any) => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            <img src="/images/home-logo.svg" alt="home logo" />
          </Link>
        </Logo>
        <Search>
          <SearchIcon>
            <img src="/images/search-icon.png" alt="search icon" />
          </SearchIcon>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link to=' '>
                <img src="/images/nav-home.svg" alt="nav home" />
                <span>Home</span>
              </Link>
            </NavList>
            <NavList>
              <Link to=' '>
                <img src="./images/nav-network.svg" alt="nav network" />
                <span>My Network</span>
              </Link>
            </NavList>
            <NavList>
              <Link to=' '>
                <img src="./images/nav-jobs.svg" alt="nav jobs" />
                <span>Jobs</span>
              </Link>
            </NavList>
            <NavList>
              <Link to=' '>
                <img src="./images/nav-messaging.svg" alt="nav messaging" />
                <span>Messaging</span>
              </Link>
            </NavList>
            <NavList>
              <Link to=' '>
                <img
                  src="/images/nav-notifications.svg"
                  alt="nav notification"
                />
                <span>Notification</span>
              </Link>
            </NavList>
            <User>
              <Link to=' '>
                <img src="images/user.svg" alt="user" />
                <span>
                  Me <img src="images/down-icon.svg" alt="down icon" />
                </span>
              </Link>
            </User>
            <Work>
              <Link to=' '>
                <img src="/images/nav-work.svg" alt="nav work" />
                <span>
                  Home <img src="images/down-icon.svg" alt="down icon" />
                </span>
              </Link>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid #ebebeb;
  padding: 0px 24px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  /* flex-wrap: nowrap; */
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      outline: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 213px;
      padding: 0px 8px 0 40px;
      line-height: 2;
      font-size: 14px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  img {
    width: 20px;
    position: absolute;
    z-index: 200;
    top: 5px;
    left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Nav = styled.nav`
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

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
export default Header;
