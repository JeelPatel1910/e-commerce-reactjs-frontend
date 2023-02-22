import React from "react";
import { FormGroup, Row, Col } from "reactstrap";
import CustomInput from "../../components/common/CustomInput";

const Step2 = (props) => {
  const { details, setDetails, errors, setErrors } = props;

  const handleChange = (e) => {
    let values;
    if (Array.isArray(e.target.selectedOptions)) {
      values = [...e.target.selectedOptions].map((o) => o.value);
    }
    console.log(values);
    const { name, value } = e.target;
    setDetails(
      Array.isArray(values)
        ? {
            ...details,
            [name]: values,
          }
        : { ...details, [name]: value }
    );
    console.log(details);
  };

  const validationHandler = (name, errorMessage) => {
    setErrors({ ...errors, [name]: errorMessage });
  };
  return (
    <div>
      <FormGroup>
        <CustomInput
          type="textarea"
          label="Address"
          id="Address"
          name="address"
          placeholder="Address"
          handleChange={handleChange}
          isRequired={true}
          validationHandler={validationHandler}
          error={errors.address}
        />
      </FormGroup>

      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Col md={6}>
          <FormGroup>
            <CustomInput
              type="select"
              label="Profession"
              id="profession"
              name="profession"
              placeholder="Profession"
              handleChange={handleChange}
              options={[
                {
                  id: 1,
                  value: 1,
                  label: "private job",
                },
                {
                  id: 2,
                  value: 2,
                  label: "Business",
                },
                {
                  id: 3,
                  value: 3,
                  label: "student",
                },
                {
                  id: 4,
                  value: 4,
                  label: "not working",
                },
              ]}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <CustomInput
              type="select"
              label="Hobbies"
              id="hobbies"
              name="hobbies"
              placeholder="Hobbies"
              handleChange={handleChange}
              options={[
                {
                  id: 1,
                  value: 1,
                  label: "Running",
                },
                {
                  id: 2,
                  value: 2,
                  label: "Sketching",
                },
                {
                  id: 3,
                  value: 3,
                  label: "Reading",
                },
                {
                  id: 4,
                  value: 4,
                  label: "Dancing",
                },
                {
                  id: 5,
                  value: 5,
                  label: "Singing",
                },
              ]}
              multiple
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <CustomInput
          type="date"
          label="Birthdate"
          id="birthdate"
          name="birthdate"
          placeholder="Birthdate"
          handleChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="time"
          label="BirthTime"
          id="birthTime"
          name="birthTime"
          placeholder="BirthTime"
          handleChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="color"
          label="Favorite color"
          id="favoriteColor"
          name="favoriteColor"
          handleChange={handleChange}
          placeholder="Favorite color"
        />
      </FormGroup>
    </div>
  );
};

export default Step2;
