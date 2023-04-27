import React, { useState } from "react";
import './App.css'
const options = ["Yes", "Probably not"];

const Dropdown = () => {
const [selectedOption, setSelectedOption] = useState("");

const handleOptionChange = (event) => {
	setSelectedOption(event.target.value);
};

	return (
		<div className="App" style={{border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
			<label htmlFor="dropdown">Should you use dropdown?</label>
				<select id="dropdown" value={selectedOption} onChange={handleOptionChange} style={{ margin: "10px" }}>
					<option value="">Select</option>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
					</option>
				))}
				</select>
			{selectedOption && (
				<p style={{ marginTop: "10px" }}>You selected: {selectedOption}</p>
			)}
		</div>
	);
};

export default Dropdown;