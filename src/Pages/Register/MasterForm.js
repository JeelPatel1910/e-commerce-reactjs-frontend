import React, { useState } from "react";
import { Form } from "reactstrap";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    profile: {},
    details: {},
    account: {},
  });
  const [profile, setProfile] = useState({});
  const [details, setDetails] = useState({});
  const [account, setAccount] = useState({});

  const handleChange = (e) => {};

  const handleNext = (e) => {
    e.preventDefault();
    switch (currentStep) {
      case 1:
        setFormData({
          ...formData,
          profile,
        });

        break;
      case 2:
        setFormData({
          ...formData,
          details,
        });
        console.log(details);
        break;
      case 3:
        setFormData({
          ...formData,
          account,
        });
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
    setFormData({
      ...formData,
      account,
    });
    console.log(formData);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            handleChange={handleChange}
            setProfile={setProfile}
            profile={profile}
          />
        );
      case 2:
        return (
          <Step2
            handleChange={handleChange}
            setDetails={setDetails}
            details={details}
          />
        );
      case 3:
        return (
          <Step3
            handleChange={handleChange}
            setAccount={setAccount}
            account={account}
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
