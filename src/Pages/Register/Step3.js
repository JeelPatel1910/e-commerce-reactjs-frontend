import React from "react";
import { FormGroup } from "reactstrap";
import CustomInput from "../../components/common/CustomInput";

const Step3 = (props) => {
  const { account, setAccount, errors, setErrors } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirm") {
      console.log(e.target.checked);
      setAccount({ ...account, [name]: e.target.checked });
    }
    console.log(account);
    setAccount({ ...account, [name]: value });
  };

  const validationHandler = (name, errorMessage) => {
    setErrors({ ...errors, [name]: errorMessage });
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
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.email}
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
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.password}
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
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.confirmPassword}
          account={account}
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="checkbox"
          label="Accept terms & conditions"
          id="confirm"
          name="confirm"
          placeholder="termsAndConditions"
          handleChange={handleChange}
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.confirm}
        />
      </FormGroup>
    </div>
  );
};

export default Step3;
