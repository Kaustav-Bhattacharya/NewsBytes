import React from "react";

export default function Dropdown({ selectedCountry }) {

  const handleChange = (event) => {
    console.log(event.target.value);
    selectedCountry(event.target.value)
  }
  return (
    <div >
      <select
        style={{display: "flex", float:"right"}}
        className="form-select form-select-sm mb-3"
        aria-label=".form-select-sm example"
        onChange={handleChange}
      >
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="ca">Canada</option>
        <option value="cn">China</option>
      </select>
    </div>
  );
}
