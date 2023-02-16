import React from 'react';
import { Link } from 'react-router-dom';
import { Form , FormGroup } from 'reactstrap';
import CustomInput from '../components/common/CustomInput';

export default function Login() {
  return (
    <div className='container box'>
       <div className='form-container'>
          <h1 className='header'>Log in</h1>
          <Form className='form'>
          <FormGroup floating>
             <CustomInput 
              name = "email"
              placeholder= "Email"
              label ="Email"
              type = "email"
              id = "exampleEmail"
             />
          </FormGroup>

          <FormGroup floating>
             <CustomInput 
              name = "password"
              placeholder= "********"
              label ="Password"
              type = "password"
              id = "examplePassword"
             />
            </FormGroup> 
          </Form>
          <h6>New to Bazaar ?</h6>
          <Link to="/register" className='secondary button' style={{ marginTop: "5%" }}> 
           Create a new Account
          </Link>
       </div>
    </div>
  )
}
