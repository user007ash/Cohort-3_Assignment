function LeftMain({ currElement, handleAddElement, setCurrentElement, setElemLabel,elemLabel }) {
  const options = ["input", "checkbox", "button", "radio"];
  return (
    <div className="md:h-screen h-[50vh] w-full bg-neutral-900 text-white flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-4 bg-neutral-800 p-5 rounded-md border border-neutral-700">
        <select
          name="formElements"
          className="bg-neutral-700 text-white px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setCurrentElement(e.target.value)}
        >
          <option value="">Select Form Element</option>
          {options.map((item) => {
            return (
              <option value={item} key={item} className="capitalize">
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          className="bg-neutral-700 text-white px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add Label To Form Element"
          value={elemLabel}
          onChange={(e)=>setElemLabel(e.target.value)}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          onClick={handleAddElement}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default LeftMain;
