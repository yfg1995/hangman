import { WordToGuess } from "./WordToGuess";

export const Draw = () => {
  const words = [
    "serendipity",
    "mellifluous",
    "quixotic",
    "nebulous",
    "ephemeral",
    "lethargic",
    "resilient",
    "petrichor",
    "incandescent",
    "bucolic",
  ];

  const randomWord = Math.floor(Math.random() * words.length);
  const wordToGuess = words[randomWord];
  const lettersToGuess = wordToGuess.split("");

  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="relative flex flex-col items-center mr-20">
        <div className="w-40 h-2 bg-black ml-[152px]"></div>
        <div className="w-2 h-80 bg-black"></div>
        <div className="w-40 h-2 bg-black"></div>
        <div className="w-2 h-14 bg-black absolute right-0"></div>

        <div className="w-12 h-12 rounded-full border-4 border-black absolute top-14 -right-5"></div>
        <div className="w-1 h-24 bg-black absolute top-[100px] right-0"></div>
        <div className="w-1 h-14 bg-black absolute top-[95px] right-5 rotate-45"></div>
        <div className="w-1 h-14 bg-black absolute top-[95px] -right-5 -rotate-45"></div>
        <div className="w-1 h-14 bg-black absolute top-[184px] right-5 rotate-45"></div>
        <div className="w-1 h-14 bg-black absolute top-[184px] -right-5 -rotate-45"></div>
      </div>

      <WordToGuess lettersToGuess={lettersToGuess} />
    </div>
  );
};
