import {
  Button, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Enquiry } from '../../../../models/enquiry';
import convertToDateTime from '../../../../utils/datetime';
import Card from '../../../molecules/Card';

type Props = {
  handleClick: () => void;
} & Enquiry

const CardRow: React.FC<Props> = ({
  user,
  account,
  initialConsultationFee,
  estimatedPrice,
  createdAt,
  handleClick,
}) => (
  <Card.Main>
    <Card.Section style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
    >
      <div>
        <Typography style={{ fontWeight: 'bolder', fontSize: '16px' }}>
          {user.name}
        </Typography>
        <Typography style={{ fontWeight: 400, fontSize: '16px' }}>
          {account.name}
        </Typography>
      </div>
      <Typography style={{ fontSize: '16px' }}>{convertToDateTime(createdAt)}</Typography>
    </Card.Section>
    <Card.Divider />
    <Card.Section style={{ paddingTop: '8px' }}>
      <Typography style={{ fontSize: '16px' }}>
        <span style={{ width: '180px', display: 'inline-flex' }}>
          Consultation Fee:
        </span>
        {' '}
        {initialConsultationFee ? `£${initialConsultationFee.toFixed(2).toLocaleString()}` : 'Free'}
      </Typography>
      <Typography style={{ fontSize: '16px' }}>
        <span color="#999999f7" style={{ width: '180px', display: 'inline-flex' }}>
          Estimated Price:
        </span>
        {' '}
        {estimatedPrice ? `£${estimatedPrice.toFixed(2).toLocaleString()}` : 'Free'}
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
        onClick={handleClick}
        fullWidth
        variant="contained"
      >
        View Solicitor
      </Button>
    </Card.Section>
  </Card.Main>
);

export default CardRow;
