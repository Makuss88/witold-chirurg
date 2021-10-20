import React from 'react';

import img1 from '../../../../assets/image/firm1.jpg';
import img2 from '../../../../assets/image/firm2.jpg';
import img3 from '../../../../assets/image/firm3.jpg';

import {
  Wrapper,
  Buisness,
  BuisnessLeft,
  Img,
  ClientInfo,
  ClientText,
  Client
} from './ReferencjeStyled';

const Company = () => {
  return (
    <Wrapper>
      <Buisness>
        <BuisnessLeft>
          <Img src={img1} alt='firma1' />
        </BuisnessLeft>
        <Client>
          <ClientInfo>
            <h3>Marek Andrzejski,</h3> pracownik Medicine
          </ClientInfo>
          <ClientText>
            Integer efficitur erat at libero dapibus, congue egestas leo consequat.
            Fusce placerat hendrerit mauris sit amet accumsan.
            Ut leo nisi, efficitur vitae magna et, imperdiet venenatis nisl.
            In hac habitasse platea dictumst. Nulla cursus tellus quis nunc lobortis finibus.
            Fusce commodo volutpat arcu, eu mollis lacus accumsan at.
            Vestibulum ac dui dictum, tempor diam non, interdum diam.
            Curabitur vel sodales libero. Integer nec aliquam quam.
          </ClientText>
        </Client>
      </Buisness>
      <Buisness>
        <BuisnessLeft>
          <Img src={img2} alt='firma2' />
        </BuisnessLeft>
        <Client>
          <ClientInfo>
            <h3>Jolnta Kramarczyk, </h3>prezes Krzyżyczka
          </ClientInfo>
          <ClientText>
            Duis ornare sem ut facilisis pretium.
            Nam elit tellus, bibendum vitae ullamcorper at, elementum sit amet dui.
            Ut ultricies eget eros in auctor. Mauris ultrices neque tempor mi porta luctus ac quis ex.
            Sed facilisis non dui et cursus. Nullam finibus ornare consectetur.
            Maecenas sit amet nisl vulputate, efficitur turpis vitae, ultricies diam.
            Ut nisl tortor, sollicitudin ut vestibulum in, blandit id ipsum.
            Nam suscipit porta tellus eget efficitur.
          </ClientText>
        </Client>
      </Buisness>
      <Buisness>
        <BuisnessLeft>
          <Img src={img3} alt='firma3' />
        </BuisnessLeft>
        <Client>
          <ClientInfo>
            <h3>Grzgorz Maciborek, </h3>twórca plastrów
          </ClientInfo>
          <ClientText>
            Sed bibendum sodales sapien ac dignissim.
            Sed ultricies massa lorem, non ultrices dui bibendum sodales.
            Quisque volutpat arcu quam, a elementum tortor gravida aliquam.
            Morbi facilisis, felis ac consectetur efficitur, nisi ligula scelerisque lectus, vel auctor felis nunc in magna.
            Ut sagittis ligula ut augue semper lacinia. Etiam quis tincidunt dui.
            Nam luctus tortor vel quam elementum, ut hendrerit urna euismod.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </ClientText>
        </Client>
      </Buisness>
    </Wrapper>
  )
}

export default Company;
