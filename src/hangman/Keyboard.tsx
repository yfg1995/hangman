import { FC, useState, useEffect } from "react";

interface IKeyboard {
  newGame: boolean;
  onClickedKey?: (keyValue: string) => void;
}

export const Keyboard: FC<IKeyboard> = ({ onClickedKey, newGame }) => {
  const [clickedKeys, setClickedKeys] = useState<string[]>([]);

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const handleKey = (keyValue: string) => {
    if (!clickedKeys.includes(keyValue)) {
      setClickedKeys((prevClickedKeys) => [...prevClickedKeys, keyValue]);
      onClickedKey?.(keyValue);
    }
  };

  useEffect(() => {
    if (newGame) {
      setClickedKeys([]);
    }
  }, [newGame]);

  return (
    <div className="flex w-1/2 gap-2 flex-wrap">
      {letters.map((letter: string) => (
        <div
          onClick={() => handleKey(letter)}
          className={`${
            clickedKeys.includes(letter)
              ? "cursor-default border-red-500 text-red-500"
              : "cursor-pointer hover:bg-red-500 hover:text-white"
          } flex justify-center items-center uppercase font-bold border-2 mx-1 border-black text-2xl w-16 h-16 transition-all `}
          key={letter}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
