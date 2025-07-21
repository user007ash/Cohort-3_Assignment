import { quizData } from "../../data";

export default function Card({
  currIdx,
  questionData,
  selectedAns,
  onSelectOption,
  handlePrev,
  handleNext,
  // isSubmitted,
  // handleSubmit,
}) {
  const options = [
    { key: "a", text: questionData.a },
    { key: "b", text: questionData.b },
    { key: "c", text: questionData.c },
    { key: "d", text: questionData.d },
  ];
  return (
    <div className="w-[500px] max-w-full bg-neutral-700 text-white text-xl font-semibold rounded-2xl p-6 space-y-6 border border-neutral-600 shadow-lg">
      {/* Question */}
      <div className="text-2xl font-bold">{questionData.question}</div>

      {/* Options */}
      <div className="grid gap-3">
        {options.map((option, key) => {
          return (
            <button
              key={key}
              onClick={() => onSelectOption(option.key)}
              className={`w-full py-2 px-4 rounded-lg hover:bg-neutral-600 transition-colors  ${
                selectedAns[currIdx] === option.key
                  ? "bg-neutral-600"
                  : "bg-neutral-800"
              }`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        {currIdx !== 0 && (
          <button
            onClick={handlePrev}
            className="bg-neutral-600 px-4 py-2 rounded-lg hover:bg-neutral-500 transition-colors"
          >
            Previous Question
          </button>
        )}
        <button
          onClick={handleNext}
          
          className={`bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors ${
            currIdx === 0 ? "grow" : " "
          }`}
        >
          {currIdx !== quizData.length - 1 ? "Next" : "Finish"}
        </button>
      </div>

      {/* Footer Note */}
      <div className="text-sm text-neutral-400 text-center pt-2">
        Select the correct option above
      </div>
      
    </div>
  );
}
