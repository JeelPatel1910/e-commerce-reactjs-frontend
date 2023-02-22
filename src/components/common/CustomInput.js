import React from "react";
import { Label, Input } from "reactstrap";
import { getSentenceFromCamelCase } from "../Helpers/helpers";

const CustomInput = ({
  value,
  type,
  id,
  placeholder,
  name,
  label,
  options,
  multiple,
  handleChange,
  error,
  isRequired,
  validationHandler,
}) => {
  const handleOnBlur = (e) => {
    let errorMessage = "";
    const { value } = e.target;
    if (!value && isRequired) {
      errorMessage = `Please enter ${getSentenceFromCamelCase(name)}`;
    }
    validationHandler(name, errorMessage);
  };

  switch (type) {
    case "text":
      return (
        <div>
          {label && <Label>{label}</Label>}
          {isRequired && <span style={{ color: "red" }}>*</span>}
          {/* <Input name={name} id={id} placeholder={placeholder} /> */}
          <Input
            {...{ name, id, placeholder }}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          <span style={{ color: "red" }}>{error}</span>
        </div>
      );
    case "radio":
      return (
        <div>
          <Input
            type={type}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
          />
          {label && <Label>{label}</Label>}{" "}
          {isRequired && <span style={{ color: "red" }}>*</span>}
        </div>
      );

    case "select":
      return (
        <div>
          {label && <Label>{label}</Label>}{" "}
          {isRequired && <span style={{ color: "red" }}>*</span>}
          {multiple ? (
            <Input
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              multiple
              onChange={handleChange}
            >
              <option value="">Select any {name}</option>
              {options.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </Input>
          ) : (
            <Input
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              onChange={handleChange}
            >
              {options.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </Input>
          )}
          <span style={{ color: "red" }}>{error}</span>
        </div>
      );

    case "checkbox":
      return (
        <>
          <Input
            type="checkbox"
            name={name}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleChange}
          />
          <Label check>Accept terms and Conditions</Label>
          {isRequired && <span style={{ color: "red" }}>*</span>}
          <span style={{ color: "red" }}>{error}</span>
        </>
      );

    default:
      return (
        <div>
          {label && <Label>{label}</Label>}{" "}
          {isRequired && <span style={{ color: "red" }}>*</span>}
          <Input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          <span style={{ color: "red" }}>{error}</span>
        </div>
      );
  }
};
export default CustomInput;
