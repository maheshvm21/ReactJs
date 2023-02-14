import React from 'react'
import { Card, Form, Col, Row, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';

export default function SearchForm({query,setQuery,handleChange, handleSubmit}) {
  return (
    <div><Card className=" mx-auto p-3" style={{ width: "90%" }}>
    <Form onSubmit={handleSubmit}>
      <Row>

        <Col xs={12} sm={4}>
          <FormGroup className="mb-3">
          <FormLabel>Frist Name</FormLabel>
            <FormControl
              placeholder="Search Frist Name"
              aria-label="Search text"
              aria-describedby="basic-addon1"
              name="fname"
              // value={query.text}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col xs={12} sm={4}>
          <FormGroup className="mb-3">
          <FormLabel>Last Name</FormLabel>
            <FormControl
              placeholder="Search Last Name"
              aria-label="Search number"
              aria-describedby="basic-addon1"
              name="Lname"
              // value={query.number}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col xs={12} sm={4}>
          <FormGroup className="mb-3">
          <FormLabel>Email</FormLabel>
            <FormControl
              placeholder="Search Email"
              aria-label="Search text"
              aria-describedby="basic-addon1"
              name="email"
              // value={query.text}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col xs={12} sm={4}>
          <FormGroup className="mb-3">
          <FormLabel>Phone Number</FormLabel>
            <FormControl
              placeholder="Search Phone Number"
              aria-label="Search text"
              aria-describedby="basic-addon1"
              name="Phone"
              value={query.text}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
       
        <Col xs={12} sm={4}>
          {/* <FormGroup className="mb-3"> */}
          
          <Button variant="light" type="submit" className='float-left pl-5 mt-4'>
         clear
      </Button>
      <Button variant="primary" type="submit" className='float-right pr-5  mt-4'>
         Search
      </Button>
          {/* </FormGroup> */}
        </Col>
      </Row>
    </Form>
  </Card></div>
  )
}
