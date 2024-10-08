import { useQuery } from '@apollo/client';
import { WarningAmberRounded } from '@mui/icons-material';
import {
  Button, styled, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackdropLoader from '../../../components/molecules/backdropLoader';
import BigMessage from '../../../components/molecules/bigMessage';
import Drawer from '../../../components/molecules/Drawer';
import CardRow from '../../../components/organisms/Enquiries/CardRow';
import { Enquiry as EnquiryForm } from '../../../components/organisms/Enquiries/Enquiry';
import { Request as RequestDrawer } from '../../../components/organisms/Request';
import { Summary } from '../../../components/templates/Client';
import { Enquiry } from '../../../models/enquiry';
import { Request as RequestDto } from '../../../models/request';
import { GET_REQUEST } from '../../../queries/requests';

const BreadCrumbs = (requestId: string) => ([
  <Link key="/client" to="/client" style={{ textDecoration: 'none' }}>
    Requests
  </Link>,
  <Typography key="Requests" color="text.primary">{requestId}</Typography>,
]);

const ButtonStyled = styled(Button)`
  width: 250px;
  height: 50px;
  @media (max-width: 768px) {
    margin-top: 16px;
    width: auto;
    height: auto;
  }
`;

const Request: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(false);
  const [enquiry, setEnquiry] = useState<Enquiry & { requestNumber: number }>();
  const { data, loading } = useQuery<{ request: RequestDto[] }>(GET_REQUEST, {
    variables: {
      id,
    },
  });
  if (!data?.request || loading) {
    return <BackdropLoader open />;
  }
  return (
    <>
      <div>
        <Summary
          breadcrumbs={BreadCrumbs(id)}
          title="My Requests"
          subtitle="A detailed list of all of your requests which have been made"
          rightElement={(
            <ButtonStyled
              variant="contained"
              onClick={() => setOpen(true)}
            >
              View Request Info
            </ButtonStyled>
          )}
        />
      </div>
      <Drawer open={open} onBackdropClick={() => setOpen(false)}>
        <RequestDrawer
          {...data.request[0]}
          responseCount={data.request[0].enquiries.length}
          topic={data.request[0].topic.name}
        />
      </Drawer>
      <div style={{
        padding: '32px 24px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
      }}
      >
        {
          data?.request[0].enquiries.map((e) => (
            <CardRow
              key={e.id}
              {...e}
              handleClick={() => setEnquiry({
                ...e,
                requestNumber:
                  data?.request[0].requestNumber,
              })}
            />
          ))
        }
        {
          !data?.request[0].enquiries.length && (
            <BigMessage
              style={{ top: '60%' }}
              icon={<WarningAmberRounded />}
              title="No Responses Yet"
              subtitle="You have not been contacted by any solicitors yet, please allow atleast 24 hours to get a response"
            />
          )
        }
      </div>
      <Drawer open={Boolean(enquiry)} onBackdropClick={() => setEnquiry(undefined)}>
        {
          enquiry
          && (
            <>
              <EnquiryForm {...enquiry} />
            </>
          )
        }
      </Drawer>
    </>
  );
};
export default Request;
