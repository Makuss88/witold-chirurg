import styled from "styled-components";

export const Styles = styled.div`
  padding: 20px;

  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 900px;
    padding: 30px 50px;
  }
 
  input {
    border: 2px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;  
    display: block;
    font-size: 14px;
  }
 
  label {
    padding-top: 20px;
    text-align: left;
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  p {
    color: red;
    font-size: 18px;
  }
 
  .submitButton {
    background-color: #6976d9;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
  }
`;

export const Icon = styled.div`
  display:flex;
  flex-direction:row;    
  color: red;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  div:nth-child(4n+1){
    padding-right: 10px;
    width: 30%;
  }

  div:nth-child(4n+2){
    padding-left: 10px;
    width: 70%;
  }
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
