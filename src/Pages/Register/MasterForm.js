import React, { useState } from "react";
import { Form } from "reactstrap";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { v4 as uuid } from "uuid";
import { checkValidation } from "../../components/Helpers/helpers";

const initialProfile = {
  firstName: "",
  lastName: "",
  age: 0,
  number: 0,
  gender: "",
  profileImage: "",
};

const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    profile: {},
    details: {},
    account: {},
  });
  const [profile, setProfile] = useState(initialProfile);
  const [details, setDetails] = useState({});
  const [account, setAccount] = useState({});
  const [errors, setErrors] = useState({});

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const handleChange = (e) => {};

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
          console.log(profile);
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
    console.log(formData);
    setCurrentStep((prev) => (prev >= 2 ? 3 : prev + 1));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const addData = (e) => {
    const { email, password, confirmPassword, confirm } = account;
    const validationAccountError = checkValidation(errors, {
      email,
      password,
      confirmPassword,
      confirm,
    });
    if (Object.keys(validationAccountError).length !== 0) {
      setErrors(validationAccountError);
      return;
    } else {
      setFormData({
        ...formData,
        account,
      });
    }
    console.log(formData);
    localStorage.setItem(small_id, JSON.stringify(formData));
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
