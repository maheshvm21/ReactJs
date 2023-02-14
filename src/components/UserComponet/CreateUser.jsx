import React from "react";
import {
  Card,
  Form,
  FormControl,
  Row,
  Col,
  FormLabel,
  FormGroup,
  FormCheck,
  FloatingLabel,
  FormSelect,
} from "react-bootstrap";
import NavBar from "../Navbar";
import Buton from "../../Button/Buton";
// import { Dropdown } from "bootstrap";

const InlineForm = () => {
  return (
    <div>
      <NavBar />
      <Card className="text-center mx-auto " style={{ width: "90%" }}>
        <Card.Body>
          <Card.Title>Registartion Form</Card.Title>
          <Form>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4}>
                <FormControl
                  type="text"
                  placeholder="Frist Name"
                  className="mr-2 mt-4"
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <FormControl
                  type="text"
                  placeholder="Last Name"
                  className="mr-2 mt-4"
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <FormControl
                  type="Email"
                  placeholder="Email"
                  className="mr-2 mt-4"
                />
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={12} sm={6} md={4}>
                <FormControl
                  type="text"
                  placeholder="Phone number"
                  className="mr-2 mt-4"
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <FormControl type="text" placeholder="Dob" className="mr-2 mt-4" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Form.Group>
                  <FormControl  as="select" placeholder="Gender" className="mr-2 mt-4">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </FormControl>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={12} sm={6} md={4}>
                <FormControl
                  type="text"
                  placeholder="Password"
                  className="mr-2 mt-4"
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <FormControl type="text" placeholder="Confirm Password" className="mr-2 mt-4" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Form.Group>
                  <FormControl as="select" placeholder="Role" className="mr-2 mt-4">
                    <option>Select Role</option>
                    <option>Admin</option>
                    <option>User</option>
                  </FormControl>
                </Form.Group>
              </Col>
            </Row>
            <Buton />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InlineForm;
