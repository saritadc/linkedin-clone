import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftSideBar = (props) => {
  return (
    <Container>
      <Card>
        <UserInfo>
          <CardBackground />
          <Link to=' '>
            <Photo />
            <Message>Welcome, there!</Message>
          </Link>
          <Link to=' '>
            <AddPhotoText>Add a photo</AddPhotoText>
          </Link>
        </UserInfo>
        <Widget>
          <Link to=''>
            <div>
              <span>Connections</span>
              <span>Grow your Network</span>
            </div>
            <img src="./images/widget-icon.svg" alt="widget" />
          </Link>
        </Widget>
        <Item>
          <span>
            <img src="./images/item-icon.svg" alt="item icon" />
            My Items
          </span>
        </Item>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const Card = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 80ms;
  position: relative;
  border: 1px solid rgb(0 0 0 / 15%);
  margin-bottom: 8px;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgb(0 0 0 / 15%);
  padding: 12px 12px 16px;
`;

const CardBackground = styled.div`
  background: url("./images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background: #fff url("./images/photo.svg") no-repeat center;
  width: 52px;
  height: 52px;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 50%;
  background-size: 60%;
  background-clip: content-box;
  margin: -38px auto 12px;
`;

const Message = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    & :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span{
      display: flex;
      align-items: centers;
      color: rgba(0, 0, 0, 1);
  }

  &:hover{
      background-color: rgba(0, 0, 0, 0.08);
  }
`;

export default LeftSideBar;
