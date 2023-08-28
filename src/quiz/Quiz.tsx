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
        <>
          <div>{`Correct: ${guessed}`}</div>
          <div>{`Incorrect: ${QA.length - guessed}`}</div>
        </>
      )}
    </div>
  );
};
