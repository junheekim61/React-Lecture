import React from "react";
import styled from "styled-components";

export default function Music({ title, singer, no }) {
  return (
    <Box>
      <MusicText>
        <p>{title}</p>
        <p>{singer}</p>
      </MusicText>
      <MusicNum>
        <p>{no}</p>
      </MusicNum>
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #00000012;
  width: 100%;
  height: 60px;
  margin: 10px 0 15px 0;
  display: flex;
  justify-content: space-between;
`;

const MusicText = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  padding: 15px;

  p:nth-child(1) {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-size: 13px;
    color: gray;
  }
`;

const MusicNum = styled.div`
  /* border: 1px solid red; */
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;
