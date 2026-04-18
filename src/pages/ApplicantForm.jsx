import React from "react";

function ApplicantForm() {
  // const [dob, setDOB] = useState(null);
  // const [age, setAge] = useState(0);

  const handleIncomeRangeChange = (e) => {
    console.log(e.target.value);
  };

  // const handleDOBChange = (e) => {
  //   setDOB(e.target.value);
  //   let age = calculateAge(dob);
  //   setAge(age);
  // };

  return (
    <div>
      <select onChange={handleIncomeRangeChange}>
        <option value="1">less than 2 Lakhs</option>
        <option value="2"> &gt; 2 Lakhs and &lt;= 3 Lakhs</option>
        <option value="3"> &gt; 3 Lakhs and &lt;= 5 Lakhs</option>
      </select>
      {/* <input type="date" onChange={handleDOBChange} /> */}
      {/* Users age: {age} */}
    </div>
  );
}

export default ApplicantForm;
