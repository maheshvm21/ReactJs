import React, { useState } from "react";
import { Table, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import NavBar from '../Navbar';

const ExampleTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    };
  
    const data = [
      { id: 1, name: "John Doe", age: 32 },
      { id: 2, name: "Jane Doe", age: 28 },
      { id: 3, name: "Jim Smith", age: 40 },
      { id: 4, name: "Sarah Johnson", age: 35 }
    ];
  
    const filteredData = data.filter(d =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleEdit = (index) => {
        // Implement edit logic here
      };
    
      const handleDelete = (index) => {
        // Implement delete logic here
      };
    return (
      <>
      <NavBar/>

      <div style={{margin:"10px 20px 20px 20px"}}>
      <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            aria-describedby="basic-addon1"
          />
       
        </InputGroup>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d,index) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                {/* <td>
                  <Button  variant="primary" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>{' '}
                  <Button   variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
       
      </>
    );
};

export default ExampleTable;
