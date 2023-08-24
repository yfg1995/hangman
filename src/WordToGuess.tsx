import { FC } from "react";

interface ILettersToGuess {
  lettersToGuess: string[];
}

export const WordToGuess: FC<ILettersToGuess> = ({ lettersToGuess }) => {
  return (
    <div className="mt-10 flex">
      {lettersToGuess.map((letter: string, index: number) => (
        <div
          className="border-b-4 mx-1 p-1 border-black text-5xl uppercase font-bold"
          key={index}
        >
          <div className="flex justify-center w-10">{letter}</div>
        </div>
      ))}
    </div>
  );
};
