import { useQuery } from '@apollo/client';
import { Button, Link, Typography } from 'helpmycase-storybook/dist/components/External';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackdropLoader from '../../../components/molecules/backdropLoader';
import Drawer from '../../../components/molecules/Drawer';
import { Request as RequestDrawer } from '../../../components/organisms/Requests';
import { Summary } from '../../../components/templates/Client';
import { Request as RequestDto } from '../../../models/request';
import { GET_REQUEST } from '../../../queries/requests';

const BreadCrumbs = (requestId: string) => ([
  <Link key="/client" underline="hover" color="inherit" href="/client">
    Requests
  </Link>,
  <Typography key="Requests" color="text.primary">{requestId}</Typography>,
]);

const Request: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(false);
  const { data, loading, error } = useQuery<{ request: RequestDto[] }>(GET_REQUEST, {
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
            <Button
              variant="contained"
              style={{
                width: '250px',
                height: '50px',
              }}
              onClick={() => setOpen(true)}
            >
              View Info
            </Button>
          )}
        />
      </div>
      <Drawer open={open} onBackdropClick={() => setOpen(false)}>
        <RequestDrawer {...data.request[0]} topic={data.request[0].topic.name} />
      </Drawer>
    </>
  );
};
export default Request;
