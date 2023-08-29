import { FC, useState } from "react";
import { QA } from "../data/data";

export const Quiz: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newGame, setNewGame] = useState(true);
  const [guessed, setGuessed] = useState(0);

  const currentQuestion = QA[currentQuestionIndex];

  const handleNextQuestion = (id: number) => {
    const correctAnswer = currentQuestion.answers;

    if (correctAnswer[id].correct === true) {
      setGuessed((prev) => prev + 1);
    }

    setCurrentQuestionIndex((prev) => prev + 1);

    if (currentQuestionIndex === QA.length - 1) {
      setNewGame(false);
    }
  };

  const onNewGame = () => {
    setCurrentQuestionIndex(0);
    setNewGame(true);
    setGuessed(0);
  };

  const correctPercentage = (guessed * 100) / QA.length;

  return (
    <div className="w-[600px] border rounded-lg border-slate-400 px-4 py-8 text-center">
      {newGame ? (
        <>
          <h2 className="text-lg font-bold">{`${currentQuestionIndex + 1}. ${
            currentQuestion.question
          }`}</h2>

          <div className="flex flex-col gap-4 px-4 mt-8">
            {currentQuestion.answers.map((answer, index) => (
              <button
                className="border rounded-lg border-slate-400 w-full p-2 font-medium transition-all hover:bg-green-500"
                key={index}
                onClick={() => handleNextQuestion(index)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="font-medium">
          <p className="text-red-500 text-4xl mb-4">{correctPercentage}%</p>

          <div className="text-lg">
            <p>{`Correct: ${guessed}`}</p>
            <p>{`Incorrect: ${QA.length - guessed}`}</p>
          </div>

          <button
            onClick={onNewGame}
            className="border rounded-lg border-slate-400 px-8 py-1.5 mt-6 text-lg transition-all hover:bg-green-500"
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
};
