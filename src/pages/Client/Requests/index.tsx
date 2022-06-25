import { useQuery } from '@apollo/client';
import { Button, styled, Typography } from 'helpmycase-storybook/dist/components/External';
import React, { useState } from 'react';
import BackdropLoader from '../../../components/molecules/backdropLoader';
import CardRow from '../../../components/molecules/CardRow';
import Drawer from '../../../components/molecules/Drawer';
import { Request as RequestDrawer } from '../../../components/organisms/Request';
import { Summary } from '../../../components/templates/Client';
import { Request } from '../../../models/request';
import { GET_REQUESTS } from '../../../queries/requests';
import history from '../../../utils/routes/history';

const BreadCrumbs = ([
  <Typography key="Requests" color="text.primary">Requests</Typography>,
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

const WrapperStyled = styled('div')({
  padding: '32px 24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  '@media (max-width: 460px)': {
    paddingTop: '16px',
  },
});

const Requests: React.FC = () => {
  const [request, setRequest] = useState<Request>();
  const { data, loading } = useQuery<{ requests: Request[] }>(GET_REQUESTS);

  return (
    <>
      <div>
        <Summary
          breadcrumbs={BreadCrumbs}
          title="My Requests"
          subtitle="A detailed list of all of your requests which have been made"
          rightElement={(
            <ButtonStyled
              variant="contained"
              disabled={!data?.requests}
              onClick={() => {
                if (data?.requests) history.push(`/client/requests/${data.requests[0].id}`);
              }}
            >
              View Your Latest Request
            </ButtonStyled>
          )}
        />
      </div>
      <WrapperStyled>
        {
          data?.requests.map((r) => (
            <CardRow
              key={r.id}
              {...r}
              responseCount={r.enquiries.length}
              handleViewMoreInfoClick={() => setRequest(r)}
              handleViewResponsesClick={() => history.push(`/client/requests/${r.id}`)}
            />
          ))
        }
      </WrapperStyled>
      <BackdropLoader open={loading} />
      <Drawer open={Boolean(request)} onBackdropClick={() => setRequest(undefined)}>
        {
          request
          && (
            <RequestDrawer
              {...request}
              responseCount={request.enquiries.length}
              description={request.description}
              topic={request?.topic.name}
              handleViewResponsesClick={() => history.push(`/client/requests/${request?.id}`)}
            />
          )
        }
      </Drawer>
    </>
  );
};

export default Requests;
