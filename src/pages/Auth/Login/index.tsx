import { LockOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';
import {
  Button, CircularProgress, InputLabel, TextField, Typography,
} from 'helpmycase-storybook/dist/components/External';
import React from 'react';
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
  phoneNumber: Yup.string().required('Phone number is a required field'),
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
      </div>
    </form>
  );
};

export default Login;
