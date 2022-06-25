import { Breadcrumbs, Divider } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../molecules/Title';

type ISummaryProps = {
  breadcrumbs: JSX.Element[],
  title: string,
  subtitle: string,
  rightElement?: JSX.Element,
}

const SummaryHeader = styled.div`
  background-color: #F7F7F7;

  .contentHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    width: 100%:
  }
  @media (max-width: 768px) {
    .contentHolder {
      flex-direction:  column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;

export const Summary: React.FC<ISummaryProps> = ({
  breadcrumbs, title, subtitle, rightElement,
}) => (
  <SummaryHeader>
    <div
      className="wrapper paddingTop paddingBottom"
      style={{
        paddingLeft: '24px', paddingRight: '24px',
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link key="/client" to="/client" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        {breadcrumbs}
      </Breadcrumbs>
      <div className="contentHolder">
        <div>
          <Title
            title={title}
            subtitle={subtitle}
            hideDivider
          />
        </div>
        <div>
          {rightElement}
        </div>
      </div>
    </div>
    <Divider className="marginTopMedium marginBottomMedium" />
  </SummaryHeader>
);

export default {
  Summary,
};
