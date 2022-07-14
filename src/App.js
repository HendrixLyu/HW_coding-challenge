import "./App.css";
import styled from "styled-components";
import MainTable from "./components/MainTable";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to top right, #69c0ff 10%, #b7eb8f 85%); ;
`;

const Container = styled.div`
  margin: 20px;
  padding: 10px;
  box-shadow: 5px 10px 35px rgb(0 0 0 / 0.3);
  background-color: #303030;
  color: #fff;
  overflow: hidden;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    overflow: visible;
    border-radius: 2px;
    box-shadow: 8px 2px 30px rgb(0 0 0 / 0.3);
  }
`;

function App() {
  return (
    <Wrapper>
      <Container>
        {/* <>Hendrix Proj_honeywell</> */}
        <MainTable />
      </Container>
    </Wrapper>
  );
}

export default App;
