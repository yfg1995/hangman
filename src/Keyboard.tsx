import { FC, useState } from "react";

interface IKeyboard {
  onClickedKey?: (keyValue: string) => void;
}

export const Keyboard: FC<IKeyboard> = ({ onClickedKey }) => {
  const [key, setKey] = useState("");
  const [clickedKeys, setClickedKeys] = useState<string[]>([]);

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const handleKey = (keyValue: string) => {
    if (!clickedKeys.includes(keyValue)) {
      setClickedKeys((prevClickedKeys) => [...prevClickedKeys, keyValue]);
      onClickedKey?.(keyValue);
    }
  };

  return (
    <div className="flex w-1/2 gap-4 flex-wrap">
      {letters.map((letter: string) => (
        <div
          onClick={() => handleKey(letter)}
          className={`${
            clickedKeys.includes(letter)
              ? "hover:text-black hover:bg-white border-red-500"
              : ""
          } ${
            clickedKeys.includes(letter)
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } flex justify-center items-center uppercase font-bold border-2 border-black text-2xl w-20 h-20 transition-all hover:bg-slate-500 hover:text-white`}
          key={letter}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
