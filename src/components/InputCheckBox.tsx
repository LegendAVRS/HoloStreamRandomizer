interface InputCheckBoxProps {
  value: string;
}

const InputCheckBox = ({ value }: InputCheckBoxProps) => {
  return (
    <label className="cursor-pointer d-label">
      <span className="d-label-text">{value}</span>
      <input type="checkbox" className="d-checkbox" />
    </label>
  );
};

export default InputCheckBox;
