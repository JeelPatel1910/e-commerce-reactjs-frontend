import React, { useState } from "react";
import { FormGroup, FormText } from "reactstrap";
import CustomInput from "../../components/common/CustomInput";

const Step1 = (props) => {
  const { profile, setProfile, errors, setErrors } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const validationHandler = (name, errorMessage) => {
    setErrors({ ...errors, [name]: errorMessage });
  };

  return (
    <div>
      <FormGroup floating>
        <CustomInput
          type="text"
          label="First Name"
          id="firstName"
          name="firstName"
          placeholder="FirstName"
          handleChange={handleChange}
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.firstName}
          min={3}
          max={10}
        />
      </FormGroup>

      <FormGroup floating>
        <CustomInput
          type="text"
          label="Last Name"
          id="lastName"
          name="lastName"
          placeholder="LastName"
          handleChange={handleChange}
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.lastName}
          min={3}
          max={10}
        />
      </FormGroup>
      {errors.lastname && <FormText>Required</FormText>}

      <FormGroup>
        <CustomInput
          type="number"
          label="Age"
          id="age"
          name="age"
          placeholder="age"
          handleChange={handleChange}
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.age}
          max={100}
        />
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="number"
          label="Number"
          id="number"
          name="number"
          placeholder="Number"
          handleChange={handleChange}
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.number}
          max={10}
        />
      </FormGroup>

      <FormGroup>
        <p>Gender</p>
        <CustomInput
          type="radio"
          name="gender"
          id="gender"
          value="male"
          label="Male"
          handleChange={handleChange}
        />

        <CustomInput
          type="radio"
          name="gender"
          value="female"
          id="gender"
          label="Female"
          handleChange={handleChange}
        />

        <CustomInput
          type="radio"
          name="gender"
          id="gender"
          value="other"
          label="Other"
          handleChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="file"
          label="Upload your Image"
          id="file"
          name="profileImage"
          placeholder="file"
          handleChange={handleChange}
        />
      </FormGroup>
    </div>
  );
};

export default Step1;
