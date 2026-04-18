import React from "react";
import "./InputField.css";

export default function InputField({ 
  label, 
  name, 
  type = "text", 
  value, 
  onChange 
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}