import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

interface InputTextProps {
  label: string;
  value: string;
  placeholder: string;
  handleChange: (newValue: string) => void;
}

const InputText = ({
  label,
  placeholder,
  value,
  handleChange,
}: InputTextProps) => {
  return (
    <div>
      <label className="font-bold d-label">
        <span className="d-label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full max-w-xs d-input d-input-bordered"
      />
    </div>
  );
};

export default InputText;
