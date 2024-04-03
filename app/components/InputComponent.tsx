import React, { useState } from "react";

type InputComponentProps = {
  value: string;
  setValue: (args: string) => void;
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

const InputComponent = ({
  value,
  setValue,
  label,
  name,
  type = "text",
  placeholder,
}: InputComponentProps) => {
  // Handler for input value changes
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Optionally, you can use useEffect to handle side effects when value changes
  // useEffect(() => {
  //   // Some side effect when value changes
  // }, [value]);

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputComponent;
