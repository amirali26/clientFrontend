import { Divider as HL } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties
}

const CardStyled = styled.div({
  width: '400px',
  marginBottom: '32px',
  marginRight: '32px',
  backgroundColor: 'rgb(247, 247, 247)',
  boxSizing: 'border-box',
  borderRadius: '5px',
  '@media (max-width: 460px)': {
    width: '100%',
    margin: 0,
    marginBottom: '32px',
  },
});

const Main: React.FC<Props> = ({ children, style }) => (
  <CardStyled
    className="boxShadow"
    style={{ ...style }}
  >
    {children}
  </CardStyled>
);

const Section: React.FC<Props> = ({ children, style }) => (
  <div style={{
    padding: '24px 24px 0  24px',
    ...style,
  }}
  >
    {children}
  </div>
);

const Divider: React.FC = () => (
  <div style={{ margin: '16px 0' }}>
    <HL />
  </div>
);

const Card = {
  Main,
  Section,
  Divider,
};

export default Card;
