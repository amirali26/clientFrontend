import {
  Button, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import styled from 'styled-components';
import { Topic } from '../../../models/topic';
import convertToDateTime from '../../../utils/datetime';
import Card from '../Card';

interface IProps {
  handleViewResponsesClick: () => void;
  handleViewMoreInfoClick: () => void;
  description: string,
  topic: Topic,
  createdDate: string,
  responseCount: number,
}

const ButtonWrapper = styled.div({
  ' > div': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 24px 24px 24px !important',
    alignItems: 'center',
    marginTop: '32px',
  },
  '@media (max-width: 420px)': {
    ' > div': {
      padding: '24px !important',
      flexDirection: 'column',
      button: {
        width: '100% !important',
      },
      '> button:first-of-type': {
        marginBottom: '16px',
      },
    },
  },
});

const CardRow: React.FC<IProps> = ({
  description,
  topic,
  createdDate,
  responseCount,
  handleViewResponsesClick,
  handleViewMoreInfoClick,
}) => (
  <Card.Main>
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',
    }}
    >
      <div>
        <Card.Section style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >
          <Typography style={{ fontWeight: 'bolder', fontSize: '16px' }}>{topic.name}</Typography>
          <Typography style={{ fontSize: '16px' }}>{convertToDateTime(createdDate)}</Typography>
        </Card.Section>
        <Card.Divider />
        <Card.Section style={{ paddingTop: '8px' }}>
          <Typography style={{ fontSize: '16px', color: '#999999f7 !important' }}>
            {description.length >= 250 ? `${description.slice(0, 247)}...` : description}
          </Typography>
        </Card.Section>
      </div>
      <ButtonWrapper>
        <Card.Section>
          <Button
            onClick={handleViewMoreInfoClick}
            fullWidth
            variant="outlined"
            style={{ width: '155px' }}
          >
            More Info
          </Button>
          <Button
            onClick={handleViewResponsesClick}
            fullWidth
            disabled={responseCount === 0}
            variant="contained"
            style={{ width: '155px' }}
          >
            {`Responses (${responseCount})`}
          </Button>
        </Card.Section>
      </ButtonWrapper>
    </div>
  </Card.Main>
);

export default CardRow;
