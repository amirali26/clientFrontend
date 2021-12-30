import { Divider as HL } from 'helpmycase-storybook/dist/components/External';
import React from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties
}

const Main: React.FC<Props> = ({ children, style }) => (
  <div
    className="boxShadow"
    style={{
      width: '450px',
      marginBottom: '16px',
      marginRight: '32px',
      backgroundColor: 'rgb(247, 247, 247)',
      boxSizing: 'border-box',
      borderRadius: '5px',
      ...style,
    }}
  >
    {children}
  </div>
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
