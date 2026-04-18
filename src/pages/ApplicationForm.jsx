import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext"
import  InputField  from "../components/input/InputField"

export default function ApplicationForm() {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit=(e)=>{
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      <InputField label="ID" name="id" value={user.id} onChange={handleChange} />
      <InputField label="Name" name="name" value={user.name} onChange={handleChange} />
      <InputField label="Date of Birth" name="dob" type="date" value={user.dob} onChange={handleChange} />
      <InputField label="PAN Card" name="pancard" value={user.pancard} onChange={handleChange} />
      <InputField label="Email" name="email" type="email" value={user.email} onChange={handleChange} />
      <InputField label="Mobile" name="mobile" value={user.mobile} onChange={handleChange} />
      <InputField label="Credit Score" name="creditScore" value={user.creditScore} onChange={handleChange} />
      <InputField label="Annual Income" name="annualIncome" value={user.annualIncome} onChange={handleChange} />
      <button type="submit">Submit Form</button>
    </form>
  );
}