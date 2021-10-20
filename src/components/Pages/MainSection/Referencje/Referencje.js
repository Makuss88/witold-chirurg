import React from 'react';

import { Wrapper, TextMain, Text } from '../../../../assets/helper/Styled';

import Company from './Company'

const Referencje = () => {
  return (
    <Wrapper>
      <TextMain>
        REFERENCJE
      </TextMain>
      <Text>
        Bo ważniejsze od tego, jak siebie przedstawimy, jest to, co sądzą o nas nasi pacjenci:
      </Text>
      <Company />
    </Wrapper>
  )
}

export default Referencje;
