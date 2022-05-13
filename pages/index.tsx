import type { NextPage } from 'next';
import { useQuery } from 'react-query';

import http from '../utils/http';
import Header from '../components/Header';
import { HeadDynamic } from '../components/HeadDynamic';
import { ContentCloud } from '../components/ContentCloud';
import { SWAPIResponse } from '../types/index';

function fetchSWAPI() {
  return http<SWAPIResponse>('https://swapi.dev/api/people/?format=json');
}

const Home: NextPage = () => {
  const { data, error } = useQuery('characters', fetchSWAPI);
  
  if (error) { return null };

  return (
    <>
      <HeadDynamic title={'Luke & Friends'} />
      <Header />
      <main>
        <ContentCloud characters={data?.results} />
      </main>
    </>
  );
};

export default Home;
