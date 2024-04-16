import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";

export default function SearchBar(props) {
  const inputRef = useRef();

  const handleBtnClick = () => {
    console.log("search");
    axios.get(
      `https://api.manana.kr/karaoke/song/${inputRef.current.value}.json`
    ).then((res)=> {
        props.setData_1(res.data);
    });
  };

  return (
    <Bar>
      <Input
        placeholder="노래 제목 / 가수 이름으로 검색하세요"
        ref={inputRef}
      />
      <SearchBtn onClick={handleBtnClick}>검색</SearchBtn>
    </Bar>
  );
}

const Bar = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 360px;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
`;

const Input = styled.input`
  border: 0px solid transparent;
  width: 100%;
  padding: 0 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const SearchBtn = styled.div`
  border-left: 1px solid black;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
