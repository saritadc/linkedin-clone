import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon></SearchIcon>
        </Search>
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
    &>div{
        max-width: 280px;
        input{
            border: none;
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

const SearchIcon = styled.div``;
export default Header;
