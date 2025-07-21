function ResultCard({ score, handleRestart,totalLength }) {
  return (
    <div className="w-[400px] bg-neutral-700 font-bold text-white p-8 rounded-2xl shadow-lg text-center space-y-6">
      <h2 className="text-3xl font-bold">Your Results</h2>
      <p className="text-xl">
        You scored <span className="text-green-400 font-bold">{score}</span> out of
        {" "+totalLength}
      </p>
      <p className="text-md text-neutral-300">Great job! 🎉</p>
      <button
        onClick={handleRestart}
        className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-500  rounded-lg transition-colors"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultCard;
