import { LockOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';
import {
  Button, CircularProgress, InputLabel, TextField, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import FormTitle from '../../../components/molecules/auth/FormTitle';
import useAuth from '../useAuth';

const initialValues = {
  email: '',
  phoneNumber: '',
};

const formValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field'),
  phoneNumber: Yup.string()
    .matches(new RegExp('^[0-9]*$'), 'Phone number should be only numbers')
    .min(10, 'Phone number should be 10 digits')
    .max(10, 'Phone number should be 10 digits')
    .required('Phone number is a required field'),
});

const Login: React.FC = () => {
  const { loading, signIn } = useAuth();
  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    onSubmit: (values) => signIn(values.email),
    validationSchema: formValidationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormTitle
        title="Log in"
        subtitle="To view your enquiries please provide our email and phone number"
      />
      <Typography sx={{ marginTop: '16px' }}>
        Your email address is the same email which you used to submit your enquiry.
      </Typography>
      <div className="fullWidth marginTop">
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall">Email</InputLabel>
        <TextField
          id="input-with-icon-adornment"
          name="email"
          fullWidth
          color="primary"
          helperText={formik.touched.email && formik.errors.email}
          error={Boolean(formik.touched.email && formik.errors.email)}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>
      <div className="fullWidth marginTop">
        <InputLabel htmlFor="input-with-icon-adornment" className="marginBottomSmall">Phone Number</InputLabel>
        <div style={{ position: 'relative' }}>
          <TextField
            id="input-with-icon-adornment"
            name="phoneNumber"
            fullWidth
            color="primary"
            type="text"
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            InputProps={{
              startAdornment: (
                <Typography className="marginRightSmall grey">+44</Typography>
              ),
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className="marginTop fullWidth"
          type="submit"
          disabled={Boolean(!formik.isValid || loading)}
          startIcon={loading ? <CircularProgress color="secondary" size="12px" />
            : <LockOutlined />}
        >
          Login
        </Button>
        <div className="marginTopMedium fullWidth textAlignLeft">
          <Typography variant="subtitle1">
            Have not submitted an enquiry yet?
            {' '}
            <a className="underline red" href="https://helpmycase.co.uk/submit-request/" target="_blank" rel="noreferrer">Submit enquiry</a>
          </Typography>
        </div>
      </div>
    </form>
  );
};

export default Login;
