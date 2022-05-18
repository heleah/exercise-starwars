import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { styled } from '@stitches/react';

import http from '../../utils/http';

import { CharacterInt } from '../../types';

/* type CharDetailsProps = {
  character: CharacterInt;
}; */

function fetchSWChar(url: string) {
  return http<CharacterInt>(url);
}

const CharDetails = () => {
  const router = useRouter();
  const { id, url }: any = router.query;
  
  const [char, setChar]: any = useState(router.query);
  const { isLoading, error } = useQuery('singleCharacter', () => fetchSWChar(url), { onSuccess: (data) => setChar(data) });

  function convertHeight(height: string) {
    return height.substring(0, height.length - 2) + '.' + height.substring(height.length - 2, height.length)
  }

  if (isLoading || error) { return null };

  /* useEffect(() => {
      data && setChar(data)
  }, [data]) */
  console.log('hellooo', char)
  return char && (
    <CharWrapper>
      <BackButton>
        <Link href='/'>Home</Link>
      </BackButton>
      <CharName style={{color: 'white'}}>{char.name}</CharName>
      <p>
        <CharProp>Films:</CharProp>{' '}
        {char.films.length}
      </p>
      <p>
        <CharProp>Birth Year:</CharProp>{' '}
        {char.birth_year}
      </p>
      <p>
        <CharProp>Gender:</CharProp>{' '}
        {char.gender}
      </p>
      <p>
        <CharProp>Height:</CharProp>{' '}
        {convertHeight(char.height)} m
      </p>
      <p>
        <CharProp>Skin Color:</CharProp>{' '}
        {char.skin_color}
      </p>
      <p>
        <CharProp>Hair Color:</CharProp>{' '}
        {char.hair_color}
      </p>
      <p>
        <CharProp>Eye Color:</CharProp>{' '}
        {char.eye_color}
      </p>
    </CharWrapper>
  )
};

/* CharDetails.getInitialProps = ({ query }: any) => {
  return {
    charName: query.name
  }
} */

/* export async function getServerSideProps(context: any) {
  console.log(context.query);
  
  return {
    props: {
      name: context.query.name || null
    }
  }
} */

const BackButton = styled('button', {
  alignSelf: 'flex-end',
  border: 'none',
  borderRadius: '5px',
  padding: '.3rem',
  fontStyle: 'italic',

  '&:hover': {
    backgroundColor: 'white'
  }
})

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

/* const Characteristic = styled('p', {
  display: 'flex',
}) */

const CharProp = styled('span', {
  textDecoration: 'underline',
  fontWeight: 'bold'
})

export default CharDetails;
