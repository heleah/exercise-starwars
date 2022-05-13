import { styled } from '@stitches/react';

type HeaderProps = {
  headerText: string
}

export const Header = ({ headerText }: HeaderProps) => {
  return <Heading>{headerText}</Heading>;
}

const Heading = styled('h1', {
  display: 'grid',
  placeItems: 'center',
  fontFamily: 'monospace',
  color: 'WhiteSmoke',
  fontSize: '3rem'
});
