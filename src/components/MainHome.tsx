import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHome = (props: any) => {
  return (
    <Container>
      <SharePost>
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photos-icon.svg" alt="photos" />
            <span>Photos</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="photos" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="photos" />
            <span>Events</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="photos" />
            <span>Write article</span>
          </button>
        </div>
      </SharePost>
      <div>
        <Article>
          <SharedActor>
            <Link to=" ">
              <img src="images/user.svg" alt="user" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Time</span>
              </div>
            </Link>
            <button>
              <img src="images/more-action.svg" />
            </button>
          </SharedActor>
          <Description>Desccription</Description>
          <SharedImg>
            <Link to=" ">
              <img src="images/shared-image.jpeg" alt="shared post" />
            </Link>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="images/like.svg" alt="like" />
                <img src="images/love.svg" alt="love" />
                <img src="images/clap.svg" alt="clap" />
                <span>20</span>
              </button>
            </li>
            <li>
              <Link to=" ">10 comments</Link>
              <Link to=" ">10 shares</Link>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="images/react-icon.svg" alt="react" />
              <span>Like</span>
            </button>
            <button>
              <img src="images/comment-icon.svg" alt="comment" />
              <span>Comment</span>
            </button>
            <button>
              <img src="images/share-icon.svg" alt="share" />
              <span>Share</span>
            </button>
            <button>
              <img src="images/send-icon.svg" alt="send" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
`;

const SharePost = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  background: white;
  color: rgba(0, 0, 0, 0.6);
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      background: transparent;
      border: none;
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        flex-grow: 1;
        padding-left: 16px;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
`;

const SharedActor = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  a {
    margin-right: 12px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    overflow: hidden;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  text-align: left;
  overflow: hidden;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  img {
    object-fit: content;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-buttom: 1px solid #e9e5df;
  list-style: none;
  li {
    font-size: 12px;
    margin-right: 5px;
    button {
      outline: none;
      border: none;
      background: transparent;
      display: flex;
    }
    a {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      padding-left: 4px;
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    border: none;
    background: transparent;
    outline: none; 
  }
`;
export default MainHome;
