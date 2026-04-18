import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedValue) {
      navigate("/form");
    } else {
      alert("Please select an option");
    }
  };

  return (
    <div className="Home">
      <h1>ABC Bank </h1>
      <h2>Select Card Type</h2>

      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="">-- Select Credit Card --</option>
        <option value="gold">Gold Credit Card</option>
        <option value="platinum">Platinum Credit Card</option>
        <option value="titanium">Titanium Credit Card</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
}

export default Home;
