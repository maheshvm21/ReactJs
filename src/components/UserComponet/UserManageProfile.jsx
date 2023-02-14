import React, { useState } from 'react';
import NavBar from '../Navbar'
import SearchForm from '../Forms/SearchForm';
import TableComp from '../TablesComponet/TableComp';
import { Card } from 'react-bootstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { BiEdit } from 'react-icons/bi';


const UserManageProfile = () => {
  const [query, setQuery] = useState({
    text: '',
    date: '',
    number: ''
  });
  const data = [
    {
      id: 1,
     fname:"Test",
     lname:"One",
     email:"test@gmailcom",
     phonenumber:"8686125543"
  },,
    {
      id: 2,
     fname:"Test ",
     lname:"Two",
     email:"testttwo@gmailcom",
     phonenumber:"8686125543"
  },
];

const tableHeaders = ["Id","First Name", "Last Name", "Email", "Phone Number","Action"];

const tableBodies = [
    `id`,
    `fname`,
    `lname`,
    `email`,
    `phonenumber`,

    {
        base: "/user-create",
        param: `id`,
        icon: < BiEdit/>
    }
];


  const handleChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(query);
  };

  return (

  <div>
    <NavBar/>
    <div className='mb-3'>
    <Card className="text-center mx-auto " style={{ width: "90%" }}> <p >Search Receving Data</p> </Card>
    <SearchForm query={query} setQuery={setQuery} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
    
   
   <div  className="mb-5">
   <IoMdAddCircleOutline  className='float-right mr-5' style={{width:"50px",height:"20px"}} />
   </div>
    <div className='mt-3'>
      <Card className="text-center mx-auto " style={{ width: "90%" }}> <p >Search Result</p> </Card>
    <TableComp  
     data={data}
     tableHeaders={tableHeaders}
     tableBodies={tableBodies}
     />
    </div>

  </div>
    
  );
};

export default UserManageProfile;
