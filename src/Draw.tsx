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
  const attempts = lettersToGuess.length;
  console.log(lettersToGuess);
  console.log(attempts);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center mr-20">
        <div className="w-40 h-2 bg-black ml-[152px]"></div>
        <div className="w-2 h-80 bg-black"></div>
        <div className="w-40 h-2 bg-black"></div>
        <div className="w-2 h-14 bg-black absolute right-0"></div>
      </div>

      <WordToGuess lettersToGuess={lettersToGuess} />
    </div>
  );
};
