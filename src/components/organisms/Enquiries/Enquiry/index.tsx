import {
  Checkbox, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, TextField,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Enquiry as EnquiryType } from '../../../../models/enquiry';
import Title from '../../../molecules/Title';

type Props = EnquiryType

export const Enquiry: React.FC<Props> = ({
  officeAppointment,
  videoCallAppointment,
  phoneAppointment,
  message,
  initialConsultationFee,
  estimatedPrice,
}) => {
  const title = 'Request Response';
  const subtitle = 'Detailed view of a response made by a solicitor regarding your case';

  return (
    <form className="flex spaceBetween column" style={{ height: '100%' }}>
      <Title
        title={title}
        subtitle={subtitle}
      />
      <div className="fullWidth">
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Message</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={message}
          name="message"
          fullWidth
          color="primary"
          multiline
          rows={8}
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Initial Consulation Fee</InputLabel>
        <OutlinedInput
          id="input-with-icon-adornment"
          name="initialConsultationFee"
          value={initialConsultationFee}
          fullWidth
          color="primary"
          startAdornment={<InputAdornment position="start">£</InputAdornment>}
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Estimated Fee</InputLabel>
        <OutlinedInput
          id="input-with-icon-adornment"
          name="estimatedPrice"
          value={estimatedPrice}
          fullWidth
          color="primary"
          startAdornment={<InputAdornment position="start">£</InputAdornment>}
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Availablity</InputLabel>
        <FormControlLabel
          checked={Boolean(officeAppointment)}
          className="marginTopMedium"
          control={
            <Checkbox checked={Boolean(officeAppointment)} />
          }
          label="Office Appointments"
          sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
          disabled
        />
        <br />
        <FormControlLabel
          checked={Boolean(videoCallAppointment)}
          className="marginTopMedium"
          control={
            <Checkbox checked={Boolean(videoCallAppointment)} />
          }
          label="Video Call Appointments"
          sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
          disabled
        />
        <FormControlLabel
          checked={Boolean(phoneAppointment)}
          className="marginTopMedium"
          control={
            <Checkbox checked={Boolean(phoneAppointment)} />
          }
          label="Phone Appointments"
          sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
          disabled
        />
      </div>
    </form>
  );
};

export default Enquiry;
