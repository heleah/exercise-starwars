import { styled } from '@stitches/react';

export default function Header() {
  return <Heading>Luke & Friends</Heading>;
}

const Heading = styled('h1', {
  display: 'grid',
  placeItems: 'center',
  fontFamily: 'monospace',
  color: 'WhiteSmoke',
  fontSize: '3rem'
});
