import React from 'react';

import Form from './Form';

import {
  Container,
  Information,
  Info,
  Circle,
  MapsLogo,
  PhoneLogo,
  EmailLogo,
  Flex,
} from './AddressStyled';

const Address = () => {
  return (
    <Container>
      <Information>
        <Info>
          <Circle>
            <MapsLogo />
          </Circle>
          <Flex>
            <h4>Adres</h4>
            <div>Gabinet USG</div>
            <div>ul. Cicha 1</div>
            <div>11-111 Grzdów Zdrój</div>
          </Flex>
        </Info>
        <Info>
          <Circle>
            <PhoneLogo />
          </Circle>
          <Flex>
            <h4>Numer telefonu</h4>
            <div>+48 121 212 121 </div>
          </Flex>
        </Info>
        <Info>
          <Circle>
            <EmailLogo />
          </Circle>
          <Flex>
            <h4>E-mail</h4>
            <div>usg@usg.pl</div>
          </Flex>
        </Info>
      </Information>
      <Form />
    </Container>
  )
}

export default Address
