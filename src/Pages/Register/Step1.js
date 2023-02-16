import React from "react";
import { FormGroup } from "reactstrap";
import CustomInput from "../../components/common/CustomInput";

const Step1 = (props) => {
  const { profile, setProfile } = props;

  const handleChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
    console.log(profile);
  };

  return (
    <div>
      <FormGroup floating>
        <CustomInput
          type="text"
          label="First Name"
          id="firstname"
          name="firstname"
          placeholder="Firstname"
          handleChange={handleChange}
        />
      </FormGroup>

      <FormGroup floating>
        <CustomInput
          type="text"
          label="Last Name"
          id="lastname"
          name="lastname"
          placeholder="Lastname"
          handleChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="number"
          label="Age"
          id="age"
          name="age"
          placeholder="age"
          handleChange={handleChange}
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
        />
      </FormGroup>

      <FormGroup>
        <p>Gender</p>
        <CustomInput
          type="radio"
          name="gender"
          id="gender"
          value="Male"
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
