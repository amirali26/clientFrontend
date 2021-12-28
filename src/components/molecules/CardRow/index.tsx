import { Button, Divider, Typography } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Topic } from '../../../models/topic';
import convertToDateTime from '../../../utils/datetime';

interface IProps {
  handleClick: () => void;
  description: string,
  topic: Topic,
  createdDate: string,
  enquiriesCount: number,
}

const CardRow: React.FC<IProps> = ({
  description,
  topic,
  createdDate,
  enquiriesCount,
  handleClick,
}) => (
  <div style={{
    width: '425px',
    marginBottom: '16px',
    marginRight: '32px',
    backgroundColor: 'rgb(247, 247, 247)',
    boxSizing: 'border-box',
    borderRadius: '5px',
  }}
  >
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '24px 24px 0  24px',
    }}
    >
      <Typography style={{ fontWeight: 'bolder', fontSize: '16px' }}>{topic.name}</Typography>
      <Typography style={{ fontSize: '16px' }}>{convertToDateTime(createdDate)}</Typography>
    </div>
    <div style={{ margin: '16px 0' }}>
      <Divider />
    </div>
    <div style={{
      padding: '0 24px 24px  24px',
    }}
    >
      <Typography style={{ fontSize: '16px' }}>{description}</Typography>
    </div>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 24px 24px  24px',
      alignItems: 'center',
    }}
    >
      <Typography style={{ fontWeight: 'bolder', fontSize: '16px' }}>
        {enquiriesCount ? `${enquiriesCount} responses` : 'No responses'}
        {' '}
        responses
      </Typography>
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        style={{ width: '155px' }}
      >
        View Request
      </Button>
    </div>
  </div>
);

export default CardRow;
