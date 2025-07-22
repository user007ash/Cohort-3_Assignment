import { useState } from "react";
import "./App.css";
import Card from "./components/QuestionCard";
import { quizData } from "../data";
import ResultCard from "./components/ResultCard";

function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAns, setSelectedAns] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectedAns = (ansKey) => {
    setSelectedAns((prev) => ({ ...prev, [currQuestion]: ansKey }));
  };

  const handleNext = () => {
    if (quizData.length - 1 > currQuestion) {
      setCurrQuestion(currQuestion + 1);
    } else if (currQuestion === quizData.length - 1) {
      handleSubmit();
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currQuestion > 0) {
      setCurrQuestion(currQuestion - 1);
    } else {
      console.log("can't go back");
    }
  };

  const handleSubmit = () => {
    let tempScore = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (selectedAns[i] === quizData[i].correct) {
        tempScore++;
      }
    }
    setScore(tempScore);
  };

  const handleRestart = () => {
    setCurrQuestion(0);
    setIsSubmitted(false);
    setScore(0);
    setSelectedAns({});
  };

  return (
    <>
      <div className="h-screen w-full bg-neutral-800 flex justify-center items-center ">
        {isSubmitted ? (
          <ResultCard
            score={score}
            handleRestart={handleRestart}
            totalLength={quizData.length}
          />
        ) : (
          <Card
            currIdx={currQuestion}
            questionData={quizData[currQuestion]}
            selectedAns={selectedAns}
            onSelectOption={handleSelectedAns}
            handleNext={handleNext}
            handlePrev={handlePrev}
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
}

export default App;
