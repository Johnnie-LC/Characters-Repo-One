import { styled } from "styled-components";

export const Character = styled.section`
  width: 200px;
  display:flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;

  > div:first-child {
    width: 100%;
    height: 200px;
    background-color: gray;
    > img {
    width: 100%;
    }
  }
  > div:nth-child(2){
    width:100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: darkseagreen;
    border-top: 1px solid black;
    > a {
      text-decoration: auto;
    }
  }
`