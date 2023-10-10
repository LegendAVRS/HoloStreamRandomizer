interface InputTextProps {
  label: string;
  placeholder: string;
}

const InputText = ({ label, placeholder }: InputTextProps) => {
  return (
    <div>
      <label className="d-label font-bold">
        <span className="d-label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="d-input d-input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default InputText;
