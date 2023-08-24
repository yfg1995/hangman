export const Keyboard = () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="flex flex-wrap w-1/2 gap-4">
      {letters.map((letter: string) => (
        <div
          className="flex justify-center p-4 font-bold border border-black cursor-pointer text-2xl w-20 transition-all hover:bg-slate-500 hover:text-white"
          key={letter}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
