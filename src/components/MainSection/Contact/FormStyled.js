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
    max-width: 500px;
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
  }
 
  .submitButton {
    background-color: #6976d9;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;