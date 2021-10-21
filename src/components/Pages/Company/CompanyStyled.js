import styled from "styled-components";

export const Flex = styled.section` 
  padding-top: 40px;
  margin: auto;
  width: 1800px;
  display: flex;           
  flex-direction: row;  
  justify-content: flex-start; 
  align-items: center;     
  flex-wrap: wrap;
`;

export const Img = styled.img`
  padding: 10px;
  width: 300px;
  filter: grayscale(1);
  transition: all 0.4s ease;
  &:hover {
    filter: grayscale(0);
  }
`;

export const Section = styled.section`
  padding:40px;
  background: #e3e3e3;
  display: flex;
  flex-flow: column;
`;