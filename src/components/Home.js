import styled from "styled-components";
import LeftSideBar from "./LeftSideBar";
import MainHome from "./MainHome";
import RightSideBar from "./RightSidBar";

const Home = (props) => {
  return (
    <Container>
      <Layout>
        <LeftSideBar />
        <MainHome />
        <RightSideBar />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(380px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;
