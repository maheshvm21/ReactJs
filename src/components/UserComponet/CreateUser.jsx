import React from "react";
import {
  Card,
  Form,
  FormControl,
  Row,
  Col,
  Button
} from "react-bootstrap";
import NavBar from "../Navbar";
// import Button from "../../Button/Buton";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

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
    .required("Date of birth is required"),
    gender: Yup.string().required('Select an option'),
    password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  role: Yup.string().required('Select an option'),
});


const InlineForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
                lastName: '',
                email: '',
                phone: '',
                dob: '',
                gender:'',
                password:'',
                confirmPassword:'',
                role:''
  });
  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    console.log(values)
  };

  const onclk= () => {
   console.log("hiiii")
  };
  
  
  return (
    <div>
      <NavBar />
      <Card className="text-center mx-auto " style={{ width: "90%" }}>
        <Card.Body>
          <Card.Title>Registartion Form</Card.Title>

          <Formik
            initialValues={formData}
            validationSchema={SignupSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log(values,"11")
              await onSubmit(values);
              resetForm();
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
                  <Col xs={12} sm={6} md={4}>
                    <Form.Group>
                      <FormControl as="select" placeholder="Gender" className="mr-2 mt-4" name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.gender && !!errors.gender}>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </FormControl>
                    <FormControl.Feedback type="invalid">{errors.gender}</FormControl.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-center ">
                  <Col xs={12} sm={6} md={4}>
                    <FormControl
                      type="text"
                      placeholder="Password"
                      className="mr-2 mt-4"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.password && !!errors.password}
                    />
                    <FormControl.Feedback type="invalid">{errors.password}</FormControl.Feedback>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <FormControl type="text" placeholder="Confirm Password" className="mr-2 mt-4" 
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                  />
                  <FormControl.Feedback type="invalid">{errors.confirmPassword}</FormControl.Feedback>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <Form.Group>
                      <FormControl as="select" placeholder="Role" className="mr-2 mt-4"
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.role && !!errors.role}>
                        <option>Select Role</option>
                        <option>Admin</option>
                        <option>User</option>
                      </FormControl>
                      <FormControl.Feedback type="invalid">{errors.role}</FormControl.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Button onClick={()=>onSubmit(values)}>
                  submit
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InlineForm;
