import { useRouter } from 'next/router';
import Link from 'next/link';
import { styled } from '@stitches/react';

import { CharacterInt } from '../types';

type CharacterProps = {
  character: CharacterInt;
};

export const Character = ({ character }: CharacterProps) => {
  const router = useRouter();
  const { id } = router.query;

  function convertName(name: string) {
      return name.replace(/ |-/g,'');
  }

  //console.log('charrrr', character);
  
  return character && (    
    <Link 
      href={{
        pathname: '/character/[id]',
        query: { 
          url: character.url
        }
      }}
      as={`/character/${convertName(character.name)}`}
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
    cursor: 'pointer'
  }
});

const CharName = styled('h3', {
  fontStyle: 'italic'
});
