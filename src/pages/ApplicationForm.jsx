import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import InputField from "../components/input/InputField";

export default function ApplicationForm() {
  const { addUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    pancard: "",
    email: "",
    mobile: "",
    creditScore: "",
    annualIncome: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!formData.dob) {
      newErrors.dob = "DOB is required";
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 18) newErrors.dob = "You must be at least 18 years old";
    }

    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.mobile || !/^[6-9][0-9]{9}$/.test(formData.mobile))
      newErrors.mobile = "Invalid mobile number";

    if (!formData.annualIncome)
      newErrors.annualIncome = "Annual income is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      addUser(formData); // add to Context

      // Optional: send to dummy API
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log("API response:", data);
      } catch (err) {
        console.error("API error:", err);
      }

      alert("Form submitted successfully!");
      setFormData({
        id: "",
        name: "",
        dob: "",
        pancard: "",
        email: "",
        mobile: "",
        creditScore: "",
        annualIncome: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
      {errors.dob && <p className="error">{errors.dob}</p>}

      <InputField label="PAN Card" name="pancard" value={formData.pancard} onChange={handleChange} />

      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
      {errors.mobile && <p className="error">{errors.mobile}</p>}

      <InputField
        label="Annual Income"
        name="annualIncome"
        value={formData.annualIncome}
        onChange={handleChange}
        options={[
          "Below ₹2,00,000",
          "₹2,00,000 – ₹5,00,000",
          "₹5,00,000 – ₹10,00,000",
          "₹10,00,000 – ₹20,00,000",
          "Above ₹20,00,000"
        ]}
      />
      {errors.annualIncome && <p className="error">{errors.annualIncome}</p>}

      <button type="submit">Submit Form</button>
    </form>
  );
}