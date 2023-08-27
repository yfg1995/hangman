import { WordToGuess } from "./WordToGuess";
import { FC, useState, useEffect } from "react";
interface IDraw {
  word: string;
  guessedLetter: string;
}

export const Draw: FC<IDraw> = ({ word, guessedLetter = "" }) => {
  const [guessedLetters, setGuessedLetters] = useState<number[]>([]);
  const [missed, setMissed] = useState(0);
  const [guessed, setGuessed] = useState(0);
  const [newGame, setNewGame] = useState(true);
  const [lettersToGuess, setLettersToGuess] = useState(word.split(""));

  const [invisibleLetters, setInvisibleLetters] = useState(
    Array.from({ length: lettersToGuess.length }, (_, i) => {
      return { index: i, letter: "" };
    })
  );

  useEffect(() => {
    const newLetters: number[] = [];
    lettersToGuess.map((letter, index) => {
      if (letter === guessedLetter) {
        newLetters.push(index);
        setGuessed((prev) => prev + 1);
      }
    });

    if (guessedLetter && lettersToGuess.indexOf(guessedLetter) === -1) {
      setMissed((prev) => prev + 1);
    }
    setGuessedLetters(newLetters);
  }, [guessedLetter]);

  useEffect(() => {
    if (missed === 6 || guessed === lettersToGuess.length) {
      setNewGame(false);
    }
  }, [guessed, missed]);

  console.log(
    "guessed: ",
    guessed,
    "missed: ",
    missed,
    "lettersToGuess",
    lettersToGuess.length
  );

  useEffect(() => {
    const newInvisibleLetters = invisibleLetters.map((letter) => {
      return guessedLetters.includes(letter.index)
        ? {
            index: letter.index,
            letter: guessedLetter,
          }
        : letter;
    });

    setInvisibleLetters(newInvisibleLetters);
  }, [guessedLetters]);

  // useEffect(() => {
  //   const newInvisibleLetters = [...invisibleLetters];
  //   invisibleLetters.map((letter) => {
  //     guessedLetters.map((gLetter) => {
  //       if (letter.index === gLetter) {
  //         newInvisibleLetters[gLetter] = {
  //           index: gLetter,
  //           letter: guessedLetter,
  //         };
  //       }
  //     });
  //   });
  //   setInvisibleLetters(newInvisibleLetters);
  // }, [guessedLetters]);

  const onNewGame = () => {
    setNewGame(true);
    setGuessed(0);
    setMissed(0);
    setInvisibleLetters(
      Array.from({ length: lettersToGuess.length }, (_, i) => {
        return { index: i, letter: "" };
      })
    );
    setLettersToGuess(word.split(""));
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
        <div>
          {/* <p className="text-center text-3xl">
            {guessed === lettersToGuess.length || missed === 5
              ? "You lost!"
              : "You won!"}
          </p> */}
          <button
            className="px-4 py-2 border rounded-lg mt-4 text-lg"
            onClick={onNewGame}
          >
            New Game
          </button>
        </div>
      )}
      <WordToGuess
        className={!newGame ? "hidden" : ""}
        lettersToGuess={invisibleLetters}
      />
    </div>
  );
};
