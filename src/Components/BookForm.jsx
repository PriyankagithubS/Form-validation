import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Paper, Typography } from '@mui/material';

const BookSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
});

const BookForm = ({ initialValues, onSubmit }) => (
    <Paper style={{ padding: 16, borderColor: 'white', borderStyle: 'solid', marginBottom: 16 }}>
        <Typography variant="h6" style={{ color: 'white' }}>Book Details</Typography>
        <Formik
            initialValues={initialValues}
            validationSchema={BookSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        name="title"
                        label="Title"
                        as={TextField}
                        error={errors.title && touched.title}
                        helperText={errors.title && touched.title ? errors.title : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        style={{ backgroundColor: 'white' }}
                    />
                    <Field
                        name="author"
                        label="Author"
                        as={TextField}
                        error={errors.author && touched.author}
                        helperText={errors.author && touched.author ? errors.author : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        style={{ backgroundColor: 'white' }}
                    />
                    <Field
                        name="isbn"
                        label="ISBN"
                        as={TextField}
                        error={errors.isbn && touched.isbn}
                        helperText={errors.isbn && touched.isbn ? errors.isbn : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        style={{ backgroundColor: 'white' }}
                    />
                    <Field
                        name="publicationDate"
                        label="Publication Date"
                        as={TextField}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={errors.publicationDate && touched.publicationDate}
                        helperText={errors.publicationDate && touched.publicationDate ? errors.publicationDate : ''}
                        fullWidth
                        margin="normal"
                        variant="outlined"
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

export default BookForm;
