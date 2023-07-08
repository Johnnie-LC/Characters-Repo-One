import { styled } from "styled-components";

export const Character = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  background: darkseagreen;
  > div:first-child{
    width: 100%;
    height: auto;
    > img {
      width: 100%
    }
  }
  > div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
    
    table {
      width: 80%;
      padding: 0px 12px;
    }
    td:first-child{
      width: 25%;
    }
  }
` 