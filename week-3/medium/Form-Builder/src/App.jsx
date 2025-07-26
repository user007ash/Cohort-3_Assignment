import { useState } from "react";
import "./App.css";
import LeftMain from "./components/LeftMain";
import RightMain from "./components/RightMain";

function App() {
  const [currElement, setCurrentElement] = useState("");
  const [formElement, setFormElement] = useState([
    {
      type: "",
      label: "",
    },
  ]);
  const [elemLabel, setElemLabel] = useState("");

  function handleAddElement() {
    if (currElement === "") return;
    setFormElement([
      ...formElement,
      {
        type: currElement,
        label: elemLabel,
        id: crypto.randomUUID(),
      },
    ]);
    setElemLabel("");
  }
  return (
    <div className="min-h-screen w-full bg-neutral-800 text-white font-semibold text-xl">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <LeftMain
            currElement={currElement}
            handleAddElement={handleAddElement}
            setCurrentElement={setCurrentElement}
            setElemLabel={setElemLabel}
            elemLabel={elemLabel}
          />
        </div>
        <div className="flex-1">
          <RightMain formElement={formElement} elemLabel={elemLabel} />
        </div>
      </div>
    </div>
  );
}

export default App;
