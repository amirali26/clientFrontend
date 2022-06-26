import {
  AlternateEmail, Phone, ShareOutlined,
} from '@mui/icons-material';
import {
  Avatar, Box, Checkbox,
  Chip, Divider, FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { Enquiry as EnquiryType } from '../../../../models/enquiry';

type Props = EnquiryType & { requestNumber: number }

export const Enquiry: React.FC<Props> = ({
  officeAppointment,
  videoCallAppointment,
  phoneAppointment,
  message,
  initialConsultationFee,
  estimatedPrice,
  user,
  account,
  enquiryNumber, requestNumber,
}) => (
  <form className="flex spaceBetween column" style={{ height: '100%' }}>
    <div
      className="fullWidth marginBottom marginTop"
      style={{
        position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Avatar alt="Remy Sharp" src={user.imageUrl} sx={{ width: '100px', height: '100px', display: 'inline-block' }}>
          {!user.imageUrl && user.name[0]}
        </Avatar>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>{user.name}</Typography>
        <Typography variant="subtitle1">
          <AlternateEmail sx={{
            fontSize: '15px',
            position: 'relative',
            top: '2px',
            marginRight: '2px',
          }}
          />
          {user.email}
        </Typography>
        <Typography variant="subtitle1">
          <Phone sx={{
            fontSize: '15px',
            position: 'relative',
            top: '2px',
            marginRight: '2px',
          }}
          />
          {user.phoneNumber}
        </Typography>
      </div>
    </div>
    <a href={account.website} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#F7F7F7',
          borderRadius: '5px',
          transition: '0.2s ease-in-out',
          position: 'relative',
        }}
        sx={{
          '&:hover': {
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            cursor: 'pointer',
          },
        }}
      >
        <Avatar variant="rounded" src={account.imageUrl} style={{ width: '90px', height: '90px' }}>
          {!account.imageUrl && account.name[0]}
        </Avatar>
        <div style={{ margin: '8px 16px' }}>
          <Typography variant="subtitle1" style={{ lineHeight: '1.5', fontWeight: 'bold' }}>{account.name}</Typography>
          <Typography variant="body2" style={{ lineHeight: '1.2' }}>
            {account.email}
          </Typography>
          <Typography variant="body2" style={{ lineHeight: '1.2' }}>
            +44
            {' '}
            {account.phoneNumber}
          </Typography>
          <Typography variant="body2" style={{ lineHeight: '1.2' }}>
            {account.website}
          </Typography>
        </div>
        <ShareOutlined sx={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          fontSize: '30px',
          transform: 'translateY(-50%)',
        }}
        />
      </Box>
    </a>
    <div className="fullWidth  marginBottom marginTop">
      <Divider sx={{ '&::before, ::after': { position: 'static' } }}>
        <Chip label="Enquiry Details" color="primary" />
      </Divider>
      <div
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '8px',
        }}
        className="marginTop marginBottom"
      >
        <Typography>
          Enquiry Number:
          <b>
            {`  #EN${(`000000${enquiryNumber}`).slice(-4)}`}
          </b>
        </Typography>
        <Typography>
          Case Number:
          <b>
            {`  #CA${(`000000${requestNumber}`).slice(-4)}`}
          </b>
        </Typography>
      </div>

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
        inputProps={{
          disabled: true,
        }}
      />
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Initial Consulation Fee</InputLabel>
      <OutlinedInput
        id="input-with-icon-adornment"
        name="initialConsultationFee"
        value={initialConsultationFee ? initialConsultationFee.toFixed(2).toLocaleString() : 'Free'}
        fullWidth
        color="primary"
        startAdornment={<InputAdornment position="start">£</InputAdornment>}
        inputProps={{
          disabled: true,
        }}
      />
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Estimated Fee</InputLabel>
      <OutlinedInput
        id="input-with-icon-adornment"
        name="estimatedPrice"
        value={estimatedPrice ? estimatedPrice.toFixed(2).toLocaleString() : 'Free'}
        fullWidth
        color="primary"
        startAdornment={<InputAdornment position="start">£</InputAdornment>}
        inputProps={{
          disabled: true,
        }}
      />
      <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall marginTopMedium">Availablity</InputLabel>
      <FormControlLabel
        checked={Boolean(officeAppointment)}
        className="marginTopMedium"
        control={
          <Checkbox checked={Boolean(officeAppointment)} inputProps={{ disabled: true }} />
        }
        label="Office Appointments"
        sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
      />
      <br />
      <FormControlLabel
        checked={Boolean(videoCallAppointment)}
        className="marginTopMedium"
        control={
          <Checkbox checked={Boolean(videoCallAppointment)} inputProps={{ disabled: true }} />
        }
        label="Video Call Appointments"
        sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
      />
      <FormControlLabel
        checked={Boolean(phoneAppointment)}
        className="marginTopMedium"
        control={
          <Checkbox checked={Boolean(phoneAppointment)} inputProps={{ disabled: true }} />
        }
        label="Phone Appointments"
        sx={{ margin: 0, marginTop: '0 !important', width: '100%' }}
      />
    </div>
  </form>
);

export default Enquiry;
