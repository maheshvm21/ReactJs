import React from "react";
import {
    Card,
    Form,
    FormControl,
    Row,
    Col
} from "react-bootstrap";
import NavBar from "../Navbar";
import Buton from "../../Button/Buton";
// import { Dropdown } from "bootstrap";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
        .matches(/^\+?[0-9]{10,12}$/, "Invalid phone number")
        .required("Phone number is required"),
    dob: Yup.date()
        .max(new Date(), "Date of birth cannot be in the future")
        .required("Date of birth is required")
});

const InlineForm = () => {
    return (
        <div>
            <NavBar />
            <Card className="text-center mx-auto " style={{ width: "90%" }}>
                <Card.Body>
                    <Card.Title>Edit Profile</Card.Title>

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone:'',
                            dob:''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={6} md={4}>
                                        <FormControl
                                            type="text"
                                            placeholder="Frist Name"
                                            className="mr-2 mt-4"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.firstName && !!errors.firstName}
                                        />
                                        <FormControl.Feedback type="invalid">{errors.firstName}</FormControl.Feedback>
                                    </Col>
                                    <Col xs={12} sm={6} md={4}>
                                        <FormControl
                                            type="text"
                                            placeholder="Last Name"
                                            className="mr-2 mt-4"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.lastName && !!errors.lastName}
                                        />
                                        <FormControl.Feedback type="invalid">{errors.lastName}</FormControl.Feedback>
                                    </Col>
                                    <Col xs={12} sm={6} md={4}>
                                        <FormControl
                                            type="Email"
                                            placeholder="Email"
                                            className="mr-2 mt-4"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.email && !!errors.email}
                                        />
                                        <FormControl.Feedback type="invalid">{errors.email}</FormControl.Feedback>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center ">
                                    <Col xs={12} sm={6} md={4}>
                                        <FormControl
                                            type="text"
                                            placeholder="Phone number"
                                            className="mr-2 mt-4"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.phone && !!errors.phone}
                                        />
                                        <FormControl.Feedback type="invalid">{errors.phone}</FormControl.Feedback>
                                    </Col>
                                    <Col xs={12} sm={6} md={4}>
                                        <FormControl type="date" placeholder="Dob" className="mr-2 mt-4" 
                                        name="dob"
                                        value={values.dob}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.dob && !!errors.dob}
                                    />
                                    <FormControl.Feedback type="invalid">{errors.dob}</FormControl.Feedback>
                                    </Col>
                                    
                                </Row>
                            
                                <Buton />
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InlineForm;
