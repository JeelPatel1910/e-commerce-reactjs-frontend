import React, { useEffect, useState } from "react";
import { Form } from "reactstrap";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { v4 as uuid } from "uuid";
import {
  checkValidation,
  confirmPasswordValidation,
  confirmTermsAndConditions,
} from "../../components/Helpers/helpers";

const initialProfile = {
  firstName: "",
  lastName: "",
  age: 0,
  number: 0,
  gender: "",
  profileImage: "",
};

const initialDetail = {
  address: "",
  profession: "",
  hobbies: [],
  birthdate: "",
  birthTime: "",
  favoriteColor: "",
};

const initialAccount = {
  email: "",
  password: "",
  confirmPassword: "",
};

const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    profile: {},
    details: {},
    account: {},
  });
  const [profile, setProfile] = useState(initialProfile);
  const [details, setDetails] = useState(initialDetail);
  const [account, setAccount] = useState(initialAccount);
  const [errors, setErrors] = useState({});

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const handleChange = (e) => {};

  //next button function
  const handleNext = (e) => {
    e.preventDefault();
    switch (currentStep) {
      case 1:
        const { firstName, lastName, age } = profile;
        const validationProfileError = checkValidation(errors, {
          firstName,
          lastName,
          age,
        });
        if (Object.keys(validationProfileError).length !== 0) {
          setErrors(validationProfileError);
          return;
        } else {
          setFormData({
            ...formData,
            profile,
          });
        }
        break;
      case 2:
        const { address } = details;
        const validationDetailError = checkValidation(errors, {
          address,
        });
        if (Object.keys(validationDetailError).length !== 0) {
          setErrors(validationDetailError);
          return;
        } else {
          setFormData({
            ...formData,
            details,
          });
          console.log(details);
        }
        break;
      default:
        return;
    }
    setCurrentStep((prev) => (prev >= 2 ? 3 : prev + 1));
  };

  //previous button function
  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  //submit data function
  const addData = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, confirm } = account;
    const validationAccountError = checkValidation(errors, {
      email,
      password,
      confirmPassword,
      confirm,
    });
    const confirmPasswordvalidate = confirmPasswordValidation(
      password,
      confirmPassword
    );
    console.log(validationAccountError);

    if (Object.keys(validationAccountError).length !== 0) {
      setErrors(validationAccountError);
      console.log(errors);
      return;
    } else if (Object.keys(confirmPasswordvalidate).length !== 0) {
      setErrors(confirmPasswordvalidate);
      return;
    } else {
      console.log("3rd");
      setFormData((formData) => ({
        ...formData,
        account,
        id: small_id,
      }));
    }
    console.log(formData);
    const data = JSON.parse(JSON.stringify(formData));
    setUsers((prev) => [...prev, data]);
    localStorage.setItem("Users", JSON.stringify(users));
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            handleChange={handleChange}
            setProfile={setProfile}
            profile={profile}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <Step2
            handleChange={handleChange}
            setDetails={setDetails}
            details={details}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <Step3
            handleChange={handleChange}
            setAccount={setAccount}
            account={account}
            errors={errors}
            setErrors={setErrors}
          />
        );
      default:
        return;
    }
  };

  return (
    <div className="form-container">
      <h1 className="header">Register</h1>
      <Form className="form">
        <MultiStepProgressBar currentStep={currentStep} />
        {renderStep()}
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {currentStep > 1 ? (
          <button className="primary button" onClick={handlePrev}>
            Previous
          </button>
        ) : (
          <></>
        )}
        {currentStep < 3 ? (
          <button className="primary button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="primary button" onClick={addData}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MasterForm;
