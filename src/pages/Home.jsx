import { useState } from "react";

function Home() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = () => {
    if (selectedValue) {
      alert(`You selected: ${selectedValue}`);
    } else {
      alert("Please select an option");
    }
  };

  return (
    <div className="Home">
      <h1>ABC Bank </h1>
      <h2>Select Card Type</h2>

      <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
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