import styled from 'styled-components';

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

export const SmallContainer = styled.div`
  width: 300px;
  height: 300px;
  padding-top: 80px;
`;

export const Text = styled.div`
  text-align: left;
  padding: 0px 10px;
`;

export const Img = styled.div`
  position: relative;
  left: -120px;
`;

export const DivPhoto = styled.div`
  margin: 150px auto 50px;
  background: #e3e3e3;
  width: 1200px;
  height: 400px;
  `;

export const DivBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImgKlient = styled.img`
  height: 400px;
`;

export const TextImg = styled.div`
  position:relative;
  font-family: 'PT Sans Caption', Helvetica, sans-serif !important;
  color: #303030;
  padding-right: 20px;
  padding-left: 40px;
  
  &:before {
    position:relative;
    content: "";
    border-bottom: 400px solid #e3e3e3;;
    border-left: 250px solid transparent;
    top: -20px;
    left: -435px;
  }
`;

export const P = styled.p`
  margin-top: 20px;
  text-align: justify;
  font-size: 18px;
`;