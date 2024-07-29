import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Paper, Typography } from '@mui/material';

const AuthorSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
});

const AuthorForm = ({ initialValues, onSubmit }) => (
    <Paper style={{ padding: 16, borderColor: 'white', borderStyle: 'solid', marginBottom: 16 }}>
        <Typography variant="h6" style={{ color: 'white' }}>Author Details</Typography>
        <Formik
            initialValues={initialValues}
            validationSchema={AuthorSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        name="name"
                        label="Name"
                        as={TextField}
                        error={errors.name && touched.name}
                        helperText={errors.name && touched.name ? errors.name : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        style={{ backgroundColor: 'white' }}
                    />
                    <Field
                        name="birthDate"
                        label="Birth Date"
                        as={TextField}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={errors.birthDate && touched.birthDate}
                        helperText={errors.birthDate && touched.birthDate ? errors.birthDate : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        style={{ backgroundColor: 'white' }}
                    />
                    <Field
                        name="biography"
                        label="Biography"
                        as={TextField}
                        error={errors.biography && touched.biography}
                        helperText={errors.biography && touched.biography ? errors.biography : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                        style={{ backgroundColor: 'white' }}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    </Paper>
);

export default AuthorForm;
