import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

function RightMain({ formElement, elemLabel }) {

  const renderElement = (type, props) => {
    switch (type) {
      case "input":
        return <Input {...props} />;
      case "button":
        return <Button {...props} />;
      case "checkbox":
        return <CheckBox {...props} />;
      case "radio":
        return <RadioButton {...props} />;
      case "label":
        return <Label {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="md:h-screen h-[50vh] w-full bg-neutral-900 text-white flex justify-center items-center">
      <div className="bg-neutral-800 p-5 rounded-md border border-neutral-700 w-[90%] max-w-md text-center">
        <h2 className="text-lg font-medium mb-2">Preview</h2>
        {formElement.length === 0 && (
          <p className="text-neutral-400 text-sm">
            Form elements will be shown here.
          </p>
        )}
        {formElement.map((el,key) => (
          <div key={key} className="m-4">{renderElement(el.type, { label: el.label })}</div>
        ))}
      </div>
    </div>
  );
}

export default RightMain;
