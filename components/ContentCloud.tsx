import { FunctionComponent } from 'react';
import { styled } from '@stitches/react';

import { Character } from './Character';
import { CharacterInt } from '../types';

type ContentCloudProps = {
    characters: CharacterInt[]
}

export const ContentCloud: FunctionComponent<ContentCloudProps> = ({ characters }) => {
    return (
        <CloudWrapper>
            {characters && characters.map((character, i) =>
                <Character key={i} character={character} />    
            )}
        </CloudWrapper>
    )
}

const CloudWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '40rem',
})