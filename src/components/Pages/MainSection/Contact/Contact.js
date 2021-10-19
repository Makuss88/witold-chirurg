import React from 'react';

import {
  Wrapper,
  Text,
  H1,
  H2,
  NavLink,
} from './ContactStyled.js';

const Contact = () => {
  return (
    <Wrapper>
      <Text>
        <H1>
          SKONTAKTUJ SIĘ Z NAMI I POZNAJ SZCZEGÓŁY OFERTY!
        </H1>
        <H2>
          Pamiętaj, że im zdrowsi, bardziej zrelaksowani i zadowoleni z życia pracownicy –
          tym lepiej funkcjonuje Twoja firma i tym większe zyski jest w stanie osiągnąć.
          <br />
          Mało tego. Stanowimy też atrakcję na różnego typu wydarzeniach. Działamy na klientów jak magnes.
        </H2>
        <NavLink to='/contact' rel="nofollow noopener">
          {/* konsultacja z Dawidkiem  */}
          KONTAKT
        </NavLink>
      </Text>
    </Wrapper>
  )
}

export default Contact;
