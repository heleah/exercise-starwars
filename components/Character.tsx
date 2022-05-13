import { CharacterInt } from '../types';
import { styled } from '@stitches/react';

type CharacterProps = {
  character: CharacterInt;
};

export const Character = ({ character }: CharacterProps) => {
  return (
    <CharWrapper>
      <CharName>{character.name}</CharName>
    </CharWrapper>
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
    cursor: 'pointer'
  }
});

const CharName = styled('h3', {
  fontStyle: 'italic'
});
