import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { styled } from '@stitches/react';

import http from '../../utils/http';

import { CharacterInt } from '../../types';

function fetchSWChar(id: string) {
  return http<CharacterInt>(`https://swapi.dev/api/people/${id}/`);
}

const CharDetails = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const { data, isLoading, error } = useQuery(`singleCharacter/${id}`, () => fetchSWChar(id), { enabled: router.isReady });

  function convertHeight(height: string) {
    return height.substring(0, height.length - 2) + '.' + height.substring(height.length - 2, height.length)
  };

  if (isLoading || error) { return null };

  return data && (
    <CharWrapper>
      <BackButton>
        <Link href='/'>Home</Link>
      </BackButton>
      <CharName style={{color: 'white'}}>{data.name}</CharName>
      <p>
        <CharProp>Films:</CharProp>{' '}
        {data.films.length}
      </p>
      <p>
        <CharProp>Birth Year:</CharProp>{' '}
        {data.birth_year}
      </p>
      <p>
        <CharProp>Gender:</CharProp>{' '}
        {data.gender}
      </p>
      <p>
        <CharProp>Height:</CharProp>{' '}
        {convertHeight(data.height)} m
      </p>
      <p>
        <CharProp>Skin Color:</CharProp>{' '}
        {data.skin_color}
      </p>
      <p>
        <CharProp>Hair Color:</CharProp>{' '}
        {data.hair_color}
      </p>
      <p>
        <CharProp>Eye Color:</CharProp>{' '}
        {data.eye_color}
      </p>
    </CharWrapper>
  )
};

const BackButton = styled('button', {
  alignSelf: 'flex-end',
  border: 'none',
  borderRadius: '5px',
  padding: '.3rem',
  fontStyle: 'italic',

  '&:hover': {
    backgroundColor: 'white'
  }
});

const CharWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '90vw',
  minHeight: '90vh',
  margin: '1.5rem auto',
  borderRadius: '20px',
  padding: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: 'whitesmoke',
});

const CharName = styled('h2', {
  fontStyle: 'italic'
});

const CharProp = styled('span', {
  textDecoration: 'underline',
  fontWeight: 'bold'
});

export default CharDetails;
