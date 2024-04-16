import React from "react";
import styled from "styled-components";
import Music from "./Music";

export default function MusicList({data}) {
  return (
    <MusicListContainer>
        {data.map((song) => (
            <Music key={song.no} {...song} />
        ))}
    </MusicListContainer>
  );
}

const MusicListContainer = styled.div`
  /* border: 1px solid black; */
  border-radius: 5px;
  width: 400px;
  padding: 0 10px;
`;

