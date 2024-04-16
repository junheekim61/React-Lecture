import MusicList from "./components/MusicList";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
// import data from "/Users/junhee/Desktop/2024_programming/react_lecture/test/src/dataset/data.json";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [data, setData] = useState([]);
  return (
    <Container>
      <SearchBar setData_1={setData}/>
      <MusicList data={data} />
    </Container>
  );
}
