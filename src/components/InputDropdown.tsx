import channelInfo from "../miscel/channelInfo.json";

interface Props {
  handleGenChange: (val: Object) => void;
}

const InputDropdown = ({ handleGenChange }: Props) => {
  let genItems = Object.keys(channelInfo);

  return (
    <div>
      <label className="font-bold d-label">
        <span className="d-label-text">Generation</span>
      </label>
      <select
        className="w-full max-w-xs d-select"
        onChange={(e) => handleGenChange(channelInfo[e.target.value])}
      >
        {genItems.map((item, ind) => (
          <option key={ind}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
