import { useState } from "react";
import { Draw } from "./Draw";
import { Keyboard } from "./Keyboard";

export const Hangman = () => {
  const words = [
    "lion",
    // "elephant",
    // "giraffe",
    // "dolphin",
    // "penguin",
    // "koala",
    // "tiger",
    // "gorilla",
    // "kangaroo",
    // "cheetah",
  ];
  const [pickedLetter, setPickedLetter] = useState("");

  const randomWord = Math.floor(Math.random() * words.length);
  const wordToGuess = words[randomWord];

  const onPickedLetter = (letter: string) => {
    setPickedLetter(letter);
  };

  return (
    <div className="flex">
      <Keyboard onClickedKey={onPickedLetter} />
      <Draw word={wordToGuess} guessedLetter={pickedLetter} />
    </div>
  );
};
