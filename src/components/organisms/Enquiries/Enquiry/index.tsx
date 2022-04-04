import {
  Checkbox, Chip, Divider, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, TextField,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Enquiry as EnquiryType } from '../../../../models/enquiry';
import convertToDateTime from '../../../../utils/datetime';
import Title from '../../../molecules/Title';

type Props = EnquiryType

export const Enquiry: React.FC<Props> = ({
  officeAppointment,
  videoCallAppointment,
  phoneAppointment,
  message,
  initialConsultationFee,
  estimatedPrice,
  user,
  account,
}) => {
  const title = "Solicitor's Message";
  const subtitle = 'Detailed view of a response made by a solicitor regarding your case';

  return (
    <form className="flex spaceBetween column" style={{ height: '100%' }}>
      <Title
        title={title}
        subtitle={subtitle}
        hideDivider
      />
      <div className="fullWidth marginBottom marginTop">
        <Divider sx={{ '&::before, ::after': { position: 'static' } }}>
          <Chip label="Solicitor" color="primary" />
        </Divider>
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Name</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={user.name}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Email</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={user.email}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Phone Number</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={user.phoneNumber}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
      </div>
      <div className="fullWidth marginBottom">
        <Divider sx={{ '&::before, ::after': { position: 'static' } }}>
          <Chip label="Firm" color="primary" />
        </Divider>
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Name</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={account.name}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Phone Number</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={`+44${account.phoneNumber}`}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Website</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={account.website}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Registered Date</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          value={convertToDateTime(account.registeredDate)}
          name="message"
          fullWidth
          color="primary"
          disabled
        />
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Areas of Practice</InputLabel>
        <div style={{
          border: '1px solid #5e5e5e44',
          borderRadius: '5px',
        }}
        >
          {
            account.areasOfPractice.map((aop: string) => (
              <FormControlLabel
                key={aop}
                checked
                disabled
                className="marginTopMedium"
                control={
                  <Checkbox checked />
                }
                label={aop}
                sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
              />
            ))
          }
        </div>
      </div>
      <div className="fullWidth">
        <Divider sx={{ '&::before, ::after': { position: 'static' } }}>
          <Chip label="Solicitor's Message" color="primary" />
        </Divider>
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
