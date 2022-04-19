import styled from "styled-components";

const MainHome = (props: any) => {
  return (
    <Container>
      <SharePost>
        Share
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
export default MainHome;
