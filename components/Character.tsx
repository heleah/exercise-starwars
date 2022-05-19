import Link from 'next/link';
import { styled } from '@stitches/react';

import { CharacterInt } from '../types';

type CharacterProps = {
  character: CharacterInt;
};

export const Character = ({ character }: CharacterProps) => {
  const getId = () => {
    /* const urlArr = character.url.split('/');
    return urlArr[5]; */
    const revArr = character.url.split('/').reverse();
    return revArr[1];
  };

  return character && (    
    <Link 
      href='/character/[id]'
      as={`/character/${getId()}`}
    >      
      <CharWrapper>
        <CharName>{character.name}</CharName>
      </CharWrapper>
    </Link>
  );
};

const CharWrapper = styled('div', {
  width: 'fit-content',
  margin: '.5rem',
  borderRadius: '20px',
  padding: '.5rem 1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: 'whitesmoke',

  '&:hover': {
    cursor: 'url("https://i.ibb.co/Wn0ppfz/emojis-slackmojis-com-lightsaber-2.png"), pointer',
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  }
});

const CharName = styled('h3', {
  fontStyle: 'italic'
});
