import {
  Button, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Topic } from '../../../models/topic';
import convertToDateTime from '../../../utils/datetime';
import Card from '../Card';

interface IProps {
  handleViewResponsesClick: () => void;
  handleViewMoreInfoClick: () => void;
  description: string,
  topic: Topic,
  createdDate: string,
}

const CardRow: React.FC<IProps> = ({
  description,
  topic,
  createdDate,
  handleViewResponsesClick,
  handleViewMoreInfoClick,
}) => (
  <Card.Main>
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
    <Card.Section style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 24px 24px  24px',
      alignItems: 'center',
      marginTop: '32px',
    }}
    >
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
        variant="contained"
        style={{ width: '155px' }}
      >
        Go To Responses
      </Button>
    </Card.Section>
  </Card.Main>
);

export default CardRow;
