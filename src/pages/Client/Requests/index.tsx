import { useQuery } from '@apollo/client';
import { Button, Typography } from 'helpmycase-storybook/dist/components/External';
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

const Requests: React.FC = () => {
  const [request, setRequest] = useState<Request>();
  const { data, loading, error } = useQuery<{ requests: Request[] }>(GET_REQUESTS);
  return (
    <>
      <div>
        <Summary
          breadcrumbs={BreadCrumbs}
          title="My Requests"
          subtitle="A detailed list of all of your requests which have been made"
          rightElement={(
            <Button
              variant="contained"
              disabled={!data?.requests}
              style={{
                width: '250px',
                height: '50px',
              }}
              onClick={() => {
                if (data?.requests) history.push(`/client/requests/${data.requests[0].id}`);
              }}
            >
              View Your Latest Request
            </Button>
          )}
        />
      </div>
      <div style={{
        padding: '32px 24px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
      }}
      >
        {
          data?.requests.map((r) => (
            <CardRow
              key={r.id}
              {...r}
              handleViewMoreInfoClick={() => setRequest(r)}
              handleViewResponsesClick={() => history.push(`/client/requests/${r.id}`)}
            />
          ))
        }
      </div>
      <BackdropLoader open={loading} />
      <Drawer open={Boolean(request)} onBackdropClick={() => setRequest(undefined)}>
        {
          request
          && (
            <RequestDrawer
              {...request}
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
