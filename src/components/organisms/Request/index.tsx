import { Button, InputLabel, TextField } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import convertToDateTime from '../../../utils/datetime';
import Title from '../../molecules/Title';

type IProps = {
  topic: string,
  createdDate: string,
  description: string,
  responseCount: number,
  handleViewResponsesClick?: () => void;
}

export const Request: React.FC<IProps> = ({
  topic, description, createdDate, responseCount, handleViewResponsesClick,
}) => (
  <div
    className="fullWidth"
    style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',
    }}
  >
    <Title
      title="Request Information"
      subtitle="Detailed description of your request"
    />
    <div>
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall">Topic</InputLabel>
      <TextField
        id="input-with-icon-adornment"
        name="name"
        fullWidth
        color="primary"
        value={topic}
        inputProps={{
          disabled: true,
        }}
      />
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopSmall">Description</InputLabel>
      <TextField
        id="input-with-icon-adornment"
        name="name"
        fullWidth
        color="primary"
        value={description}
        multiline
        rows={20}
        inputProps={{
          disabled: true,
        }}
        className="marginBottomSmall"
      />
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall">Created Date</InputLabel>
      <TextField
        id="input-with-icon-adornment"
        name="name"
        fullWidth
        color="primary"
        value={convertToDateTime(createdDate)}
        inputProps={{
          disabled: true,
        }}
        className="marginBottomSmall"
      />
    </div>
    {
      handleViewResponsesClick
      && (
        <Button
          sx={{ height: '48px' }}
          className="marginTop"
          disabled={responseCount === 0}
          fullWidth
          variant="contained"
          onClick={handleViewResponsesClick}
        >
          {`View Solicitor Responses (${responseCount})`}
        </Button>
      )
    }
  </div>
);
export default Request;
