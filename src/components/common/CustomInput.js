import React from "react";
import { Label, Input } from "reactstrap";

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
}) => {
  switch (type) {
    case "text":
      return (
        <div>
          {label && <Label>{label}</Label>}
          {/* <Input name={name} id={id} placeholder={placeholder} /> */}
          <Input {...{ name, id, placeholder }} onChange={handleChange} />
        </div>
      );
    case "radio":
      return (
        <div>
          <Input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
          />
          {label && <Label>{label}</Label>}
        </div>
      );

    case "select":
      return (
        <div>
          {label && <Label>{label}</Label>}
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
        </div>
      );

    case "checkbox":
      return (
        <>
          <Input type="checkbox" onChange={handleChange} />
          <Label check>Accept terms and Conditions</Label>
        </>
      );

    default:
      return (
        <div>
          {label && <Label>{label}</Label>}
          <Input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      );
  }
};
export default CustomInput;
