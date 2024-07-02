
export default function ExerciseCard({ exercise, i }) {
  return (
    <div className="flex flex-col gap-4 bg-slate-950 p-4 rounded-md sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold hidden sm:inline text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Group</h3>
        <p className="capitalize">{exercise.muscles.join(' & ')}</p>
      </div>
    </div>
  );
}
