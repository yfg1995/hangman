import { FC, useState } from "react";

interface IKeyboard {
  onClickedKey?: (keyValue: string) => void;
}

export const Keyboard: FC<IKeyboard> = ({ onClickedKey }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const [key, setKey] = useState("");

  const handleKey = (keyValue: string) => {
    setKey(keyValue);
    onClickedKey?.(keyValue);
  };

  return (
    <div className="flex w-1/2 gap-4 flex-wrap">
      {letters.map((letter: string) => (
        <div
          onClick={() => handleKey(letter)}
          className="flex justify-center items-center uppercase font-bold border border-black cursor-pointer text-2xl w-20 h-20 transition-all hover:bg-slate-500 hover:text-white"
          key={letter}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
