import InputCheckBox from "./InputCheckBox";
import InputText from "./InputText";

const OptionContainer = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="grid grid-cols-2 gap-2">
        <InputText label="Channel" placeholder="Ouro_Kronii"></InputText>
        <InputText label="Tags" placeholder="Gaming"></InputText>
        <InputText label="Gen" placeholder="Hololive_Promise"></InputText>

        <div className="flex justify-center d-form-control">
          <InputCheckBox value="Video"></InputCheckBox>
          <InputCheckBox value="Stream"></InputCheckBox>
        </div>
      </div>

      <div className="justify-center d-form-control w-40 ">
        <label className="d-label font-bold">
          <span className="d-label-text">Duration</span>
        </label>

        <InputCheckBox value="Short"></InputCheckBox>
        <InputCheckBox value="Medium"></InputCheckBox>
        <InputCheckBox value="Long"></InputCheckBox>
      </div>
    </div>
  );
};

export default OptionContainer;
