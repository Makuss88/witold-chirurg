import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
`;

export const Buisness = styled.div`
  width: 400px;
  justify-content: space-evenly;
  margin-left: 20px;
`;

export const BuisnessLeft = styled.div`
  display:flex;
  justify-content: flex-start;
`;

export const BuisnesTriangle = styled.div`
  position: relative;
  left: 200px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 26px 15px;
  border-color: transparent transparent red transparent;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border: 6px solid #bababa;
  justify-content: flex-start;
  border-radius: 25%;
`;

export const Client = styled.div`
  background: #bababa;
  border-radius: 10px;
  display: block;
  left: 0;
  margin-top: 10px;
  overflow: hidden;
  padding: 23px 30px 25px 28px;
  position: relative;
  top: 0;
  width: 100%;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  
  &:hover{
    background: #be1e2d;
    color: white;
  }
`;

export const ClientInfo = styled.div`
text-align:left;
font-size: 22px;
`;

export const ClientText = styled.div`
  text-align:left;
`;