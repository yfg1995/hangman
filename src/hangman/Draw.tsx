import { WordToGuess } from "./WordToGuess";
import { FC } from "react";
interface IDraw {
  word: string;
  guessedLetter: string;
  newGame: boolean;
  missed: number;
  guessed: number;
  guessedLetters: number[];
  lettersToGuess: string[];
  invisibleLetters: { index: number; letter: string }[];
  onNewGameHandler: () => void;
}

export const Draw: FC<IDraw> = ({
  lettersToGuess,
  invisibleLetters,
  missed,
  guessed,
  newGame,
  onNewGameHandler,
}) => {
  const onNewGame = () => {
    onNewGameHandler();
  };

  const hangmanParts = [
    {
      children: (
        <div className="w-12 h-12 rounded-full border-4 border-black absolute top-14 -right-5"></div>
      ),
    },
    {
      children: (
        <div className="w-2 h-24 bg-black absolute top-[100px] right-0"></div>
      ),
    },
    {
      children: (
        <div className="w-2 h-14 bg-black absolute top-[95px] right-5 rotate-45"></div>
      ),
    },
    {
      children: (
        <div className="w-2 h-14 bg-black absolute top-[95px] -right-5 -rotate-45"></div>
      ),
    },
    {
      children: (
        <div className="w-2 h-14 bg-black absolute top-[184px] right-5 rotate-45"></div>
      ),
    },
    {
      children: (
        <div className="w-2 h-14 bg-black absolute top-[184px] -right-5 -rotate-45"></div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center w-1/2">
      {newGame ? (
        <div className="relative flex flex-col items-center mr-20">
          <div className="w-40 h-2 bg-black ml-[152px]"></div>
          <div className="w-2 h-80 bg-black"></div>
          <div className="w-40 h-2 bg-black"></div>
          <div className="w-2 h-14 bg-black absolute right-0"></div>

          {hangmanParts.slice(0, missed).map((part, index) => (
            <div key={index}>{part.children}</div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-3xl">
            {guessed === lettersToGuess.length ? "You Won!" : ""}
            {missed === 6 ? "You Lost!" : ""}
          </p>

          <button
            className="px-4 py-2 border rounded-lg mt-4 text-lg"
            onClick={onNewGame}
          >
            New Game
          </button>
        </div>
      )}
      {missed === 6 ? (
        <p className="mt-4 text-4xl uppercase">{lettersToGuess}</p>
      ) : (
        <WordToGuess lettersToGuess={invisibleLetters} />
      )}
    </div>
  );
};
