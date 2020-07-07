import React from 'react';
import { useFormik } from 'formik';
import {Container, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserSchema from '../validationSchemas/UserSchema';

const SignupFormComponent = () => {
    const useStyles = makeStyles(theme => ({
        margin: {
            margin: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: UserSchema,
        onSubmit: values => {
            console.log(values);
            formik.setSubmitting(true);
        },
    });

    return (
        <div className="form-window">
            <Container maxWidth="sm" className="form-container">
                <form onSubmit={formik.handleSubmit} className='form'>
                    <TextField
                        required
                        fullWidth
                        id="first_name"
                        label="First Name"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {(formik.touched.firstName && formik.errors.firstName) && <div>{formik.errors.firstName}</div>}

                    <TextField
                        required
                        fullWidth
                        id="last_name"
                        label="Last Name"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {(formik.touched.lastName && formik.errors.lastName) && <div>{formik.errors.lastName}</div>}


                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {(formik.touched.email && formik.errors.email) && <div>{formik.errors.email}</div>}

                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {(formik.touched.password && formik.errors.password) && <div>{formik.errors.password}</div>}

                    <TextField
                        required
                        fullWidth
                        id="confirm_password"
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    {(formik.touched.confirmPassword && formik.errors.confirmPassword) && <div>{formik.errors.confirmPassword}</div>}

                    <Button
                        variant="outlined"
                        type="submit"
                        disabled={formik.isSubmitting}
                        className={classes.margin}
                    >Submit</Button>
                </form>
            </Container>
        </div>
    );
};

export default SignupFormComponent;