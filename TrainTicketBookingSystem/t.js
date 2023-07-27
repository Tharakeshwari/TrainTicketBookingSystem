import React, { useState } from 'react';

const InputGroupGenerator = () => {
  const [numGroups, setNumGroups] = useState(1);
  const [inputValues, setInputValues] = useState(Array(numGroups).fill(['']));

  const handleNumGroupsChange = (event) => {
    const num = parseInt(event.target.value);
    setNumGroups(num);
    setInputValues(Array(num).fill(['']));
  };

  const handleInputChange = (groupIndex, inputIndex, event) => {
    const newInputValues = [...inputValues];
    newInputValues[groupIndex][inputIndex] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div>
      <label>Number of Groups: </label>
      <input type="number" value={numGroups} onChange={handleNumGroupsChange} min="1" />

      {Array.from({ length: numGroups }, (_, groupIndex) => (
        <div key={groupIndex}>
          <h3>Group {groupIndex + 1}</h3>
          {inputValues[groupIndex].map((value, inputIndex) => (
            <input
              key={inputIndex}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(groupIndex, inputIndex, e)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Input Group Generator</h1>
      <InputGroupGenerator />
    </div>
  );
};

export default App;
