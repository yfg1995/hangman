import { useState, useEffect } from "react";
import { Draw } from "./Draw";
import { Keyboard } from "./Keyboard";
import { words } from "./data/data";

export const Hangman = () => {
  const [pickedLetter, setPickedLetter] = useState("");
  const [newGame, setNewGame] = useState(true);
  const [missed, setMissed] = useState(0);
  const [guessed, setGuessed] = useState(0);
  const randomWord = Math.floor(Math.random() * words.length);
  const wordToGuess = words[randomWord];
  const [lettersToGuess, setLettersToGuess] = useState(wordToGuess.split(""));
  const [guessedLetters, setGuessedLetters] = useState<number[]>([]);
  const [invisibleLetters, setInvisibleLetters] = useState(
    Array.from({ length: lettersToGuess.length }, (_, i) => {
      return { index: i, letter: "" };
    })
  );

  const onNewGame = () => {
    setNewGame(true);
    setGuessed(0);
    setMissed(0);
    setInvisibleLetters(
      Array.from({ length: lettersToGuess.length }, (_, i) => {
        return { index: i, letter: "" };
      })
    );
    setLettersToGuess(wordToGuess.split(""));
  };

  const onPickedLetter = (letter: string) => {
    setPickedLetter(letter);
  };

  useEffect(() => {
    const newLetters: number[] = [];
    lettersToGuess.map((letter, index) => {
      if (letter === pickedLetter) {
        newLetters.push(index);
        setGuessed((prev) => prev + 1);
      }
    });

    if (pickedLetter && lettersToGuess.indexOf(pickedLetter) === -1) {
      setMissed((prev) => prev + 1);
    }
    setGuessedLetters(newLetters);
  }, [pickedLetter]);

  useEffect(() => {
    if (missed === 6 || guessed === lettersToGuess.length) {
      setNewGame(false);
    }
  }, [guessed, missed]);

  useEffect(() => {
    const newInvisibleLetters = invisibleLetters.map((letter) => {
      return guessedLetters.includes(letter.index)
        ? {
            index: letter.index,
            letter: pickedLetter,
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

  return (
    <div className="flex">
      <Keyboard newGame={newGame} onClickedKey={onPickedLetter} />
      <Draw
        word={wordToGuess}
        guessedLetter={pickedLetter}
        newGame={newGame}
        missed={missed}
        guessed={guessed}
        guessedLetters={guessedLetters}
        lettersToGuess={lettersToGuess}
        invisibleLetters={invisibleLetters}
        onNewGameHandler={onNewGame}
      />
    </div>
  );
};
