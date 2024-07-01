import { useState } from "react";
import Generator from "./components/Generator/Generator";
import Header from "./components/Header/Header";
import WorkOur from "./components/WorkOut/WorkOur";

function App() {
  const [workout, setWorkout] = useState(null);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />

      <Generator />
      {workout && <WorkOur workout={workout}/>}
    </main>
  );
}

export default App;
