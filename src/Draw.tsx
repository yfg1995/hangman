import { WordToGuess } from "./WordToGuess";
import { FC, useState, useEffect } from "react";
interface IDraw {
  word: string;
  guessedLetter: string;
}

export const Draw: FC<IDraw> = ({ word, guessedLetter = "" }) => {
  const [guessedLetters, setGuessedLetters] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [newGame, setNewGame] = useState(true);
  const [guessed, setGuessed] = useState(1);
  const lettersToGuess = word.split("");

  const [invisibleLetters, setInvisibleLetters] = useState(
    Array.from({ length: lettersToGuess.length }, (_, i) => {
      return { index: i, letter: "" };
    })
  );

  console.log({
    // guessedLetters,
    // guessedLetter,
    // lettersToGuess,
    // invisibleLetters,
    // word,
  });

  useEffect(() => {
    const newLetters: number[] = [];
    lettersToGuess.map((letter, index) => {
      if (attempts > 6 || letter === guessedLetter) {
        newLetters.push(index);
        setGuessed((prev) => prev + 1);
      }
      if (word.length === guessed) {
        setNewGame(false);
      }
    });
    setGuessedLetters(newLetters);
    setAttempts((prev) => prev + 1);
  }, [guessedLetter]);

  useEffect(() => {
    const newInvisibleLetters = [...invisibleLetters];
    invisibleLetters.map((letter) => {
      guessedLetters.map((gLetter) => {
        if (letter.index === gLetter) {
          newInvisibleLetters[gLetter] = {
            index: gLetter,
            letter: guessedLetter,
          };
        }
      });
    });

    setInvisibleLetters(newInvisibleLetters);
  }, [guessedLetters]);

  const onNewGame = () => {
    setAttempts(0);
    setNewGame(true);
    setInvisibleLetters(
      Array.from({ length: lettersToGuess.length }, (_, i) => {
        return { index: i, letter: "" };
      })
    );
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

          {hangmanParts.map((part, index) => (
            <div className="opacity-0" key={index}>
              {part.children}
            </div>
          ))}
          <WordToGuess lettersToGuess={invisibleLetters} />
        </div>
      ) : (
        <div>
          <p>You won!</p>
          <button onClick={onNewGame}>New Game</button>
        </div>
      )}
    </div>
  );
};
