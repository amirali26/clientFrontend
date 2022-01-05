import { Button, InputLabel, TextField } from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import convertToDateTime from '../../../utils/datetime';
import Title from '../../molecules/Title';

type IProps = {
  topic: string,
  createdDate: string,
  description: string,
  handleViewResponsesClick?: () => void;
}

export const Request: React.FC<IProps> = ({
  topic, description, createdDate, handleViewResponsesClick,
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
        disabled
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
        disabled
        className="marginBottomSmall"
      />
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall">Created Date</InputLabel>
      <TextField
        id="input-with-icon-adornment"
        name="name"
        fullWidth
        color="primary"
        value={convertToDateTime(createdDate)}
        disabled
        className="marginBottomSmall"
      />
    </div>
    {
      handleViewResponsesClick
      && (
        <Button
          sx={{ height: '48px' }}
          className="marginTop"
          fullWidth
          variant="contained"
          onClick={handleViewResponsesClick}
        >
          View Solicitor Responses
        </Button>
      )
    }
  </div>
);
export default Request;
