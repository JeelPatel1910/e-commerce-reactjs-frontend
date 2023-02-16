import React from "react";
import { FormGroup } from "reactstrap";
import CustomInput from "../../components/common/CustomInput";

const Step3 = (props) => {
  const { account, setAccount } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount(
      Array.isArray(e)
        ? { ...account, [name]: e.map((x) => x.value) }
        : { ...account, [name]: value }
    );
  };

  return (
    <div>
      <FormGroup>
        <CustomInput
          type="email"
          label="Email"
          id="email"
          name="email"
          placeholder="Email"
          handleChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="text"
          label="UserName"
          id="userName"
          name="userName"
          placeholder="UserName"
          handleChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="password"
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
          handleChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="password"
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirmPassword"
          handleChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="checkbox"
          label="Accept terms & conditions"
          id="confirm"
          name="confirm"
          placeholder="confirmPassword"
          handleChange={handleChange}
        />
      </FormGroup>
    </div>
  );
};

export default Step3;
