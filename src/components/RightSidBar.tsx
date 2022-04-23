import { Link } from "react-router-dom";
import styled from "styled-components";

const RightSidBar = (props:any) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="images/feed-icon.svg" alt="feed icon" />
        </Title>
        <FeedList>
          <li>
            <Link to=" ">
              <Avatar />
            </Link>
            <div>
              <h6>name</h6>
              <span>HR | tech | follow</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <Link to=" ">
              <Avatar />
            </Link>
            <div>
              <h6>name</h6>
              <span>HR | tech | follow</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="right-icon" />
        </Recommendation>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  padding: 14px 25px;
  width: fit-content;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.7);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 600;
      padding: 16px;
      align-items: center;
      border: 1px solid black;
      border-radius: 15px;
      outline: none;
      text-align: center;
      max-width: 480px;
      max-height: 32px;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      margin: 5px 0;
    }
  }
`;

const Avatar = styled.div`
  /* background-image: url(); */
  background-color: rgba(0, 0, 0, 0.8);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  font-size: 14px;
  & > img {
    color: rgba(0, 0, 0, 0.6);
  }
`;
export default RightSidBar;
