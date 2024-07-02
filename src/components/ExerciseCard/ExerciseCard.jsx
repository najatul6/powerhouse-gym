import { useState } from "react";

export default function ExerciseCard({ exercise, i }) {
  const [setsCompleted, setSetsCompleted] = useState(0);
  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }
  return (
    <div className="flex flex-col gap-4 bg-slate-950 p-4 rounded-md sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold hidden sm:inline text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {exercise?.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise?.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Group</h3>
        <p className="capitalize">{exercise?.muscles.join(" & ")}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-start gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-400 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise?.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}

        <button onClick={handleSetIncrement} className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600">
          <h3 className="text-sm capitalize text-slate-400">Sets completed</h3>
          <p className="font-medium">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
