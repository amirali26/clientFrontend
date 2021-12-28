import { useQuery } from '@apollo/client';
import { Button, Typography } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import BackdropLoader from '../../../components/molecules/backdropLoader';
import CardRow from '../../../components/molecules/CardRow';
import { Summary } from '../../../components/templates/Client';
import { Request } from '../../../models/request';
import GET_REQUESTS from '../../../queries/requests';

const BreadCrumbs = ([
  <Typography key="Requests" color="text.primary">Requests</Typography>,
]);

const Requests: React.FC = () => {
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
              style={{
                width: '250px',
                height: '50px',
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
              enquiriesCount={r.enquiries.length}
              handleClick={() => console.log('2')}
            />
          ))
        }
      </div>
      <BackdropLoader open={loading} />
    </>
  );
};

export default Requests;
