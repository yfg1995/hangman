import { FC } from "react";

interface ILettersToGuess {
  lettersToGuess: { index: number; letter: string }[];
}

export const WordToGuess: FC<ILettersToGuess> = ({ lettersToGuess }) => {
  return (
    <div className="mt-5 flex">
      {lettersToGuess.map((item, index) => (
        <div
          className="border-b-4 mx-1.5 p-1 h-12 border-black text-4xl uppercase font-bold"
          key={index}
        >
          <div className="flex justify-center w-10">{item.letter}</div>
        </div>
      ))}
    </div>
  );
};
