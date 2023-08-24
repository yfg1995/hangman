import { FC } from "react";

interface ILettersToGuess {
  lettersToGuess: string[];
}

export const WordToGuess: FC<ILettersToGuess> = ({ lettersToGuess }) => {
  return (
    <div className="mt-10">
      {lettersToGuess.map((letter: string, index: number) => (
        <span
          className="border-b-4 mx-1 border-black text-5xl uppercase font-bold"
          key={index}
        >
          <span className="px-1">{letter}</span>
        </span>
      ))}
    </div>
  );
};
