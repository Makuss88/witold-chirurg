import React from 'react';

import { TextMain } from "../../../../assets/helper/Styled";

import {
  DivColumn,
  DivRow,
  DivPhoto,
  DivBg,
  SmallContainer,
  Text,
  TextImg,
  Img,
  ImgKlient,
  P,
} from './MainTextStyled';

import img1 from '../../../../assets/image/research.png';
import img2 from '../../../../assets/image/design.png';
import img3 from '../../../../assets/image/developing.png';
import img4 from '../../../../assets/image/marketing.png';
import img5 from '../../../../assets/image/usgKlient.jpg';

const MainText = () => {
  return (
    <DivColumn>
      <TextMain>
        MASAŻ BIUROWY - DLACZEGO WARTO?
      </TextMain>
      <DivRow>
        <SmallContainer>
          <Img>
            <img src={img1} alt='moc' />
          </Img>
          <Text>
            <h1>
              Większa efektywność
            </h1>
            Efekt jaki daje masaż biurowy to odzyskanie dobrego samopoczucia, humoru, energii i chęci do działania.
          </Text>
        </SmallContainer>
        <SmallContainer>
          <Img>
            <img src={img2} alt='kubek' />
          </Img>
          <Text>
            <h1>
              Mniej zwolnień lekarskich
            </h1>
            Nasze zabiegi działają leczniczo i przeciwbólowo, co przekłada się na mniej urlopów zdrowotnych.
          </Text>
        </SmallContainer>
        <SmallContainer>
          <Img>
            <img src={img3} alt='trybko' />
          </Img>
          <Text>
            <h1>
              Błyskawiczne odstresowanie
            </h1>
            Rozluźnienie mięśni skutkuje psychicznym odprężeniem i osiągnięciem wewnętrznego spokoju.
          </Text>
        </SmallContainer>
        <SmallContainer>
          <Img>
            <img src={img4} alt='krzyk' />
          </Img>
          <Text>
            <h1>
              Zadowolenie pracowników
            </h1>
            Podczas badania USG człowiek "dostaje" dużo endorfimy oraz kreatyniny.
          </Text>
        </SmallContainer>
      </DivRow>
      <DivPhoto>
        <DivBg>
          <ImgKlient src={img5} alt="" />
          <TextImg>
            <h1>Zaproś nas na próbke działania naszej maszyny USG w firmie!</h1>

            <P>Trudno sobie wyobrazić, jak USG w pracy może wpływać na kondycję naszego ciała i umysłu, jedynie o nim czytając.
              Dlatego zaproś NAS - USG WITKA! do swojej firmy – przyjedziemy z&nbsp;maszynkami i wykonamy
              <strong> krótkie, bezpłatne i&nbsp;niezobowiązujące</strong> badanie USG dla kilku lub kilkunastu osób.
              Przekonasz się na własnych plecach, jakie cuda potrafi zdziałać nawet <strong>15 minut</strong> miejscowego zabiegu.
            </P>

          </TextImg>
        </DivBg>
      </DivPhoto>
    </DivColumn>
  )
}

export default MainText
