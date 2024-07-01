import { useState } from "react";
import Generator from "./components/Generator/Generator";
import Header from "./components/Header/Header";
import WorkOur from "./components/WorkOut/WorkOur";
import { generateWorkOut } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_Power");

  function updateWorkout(){
    if(muscles?.length < 1){
      return;
    }
    let newWorkout = generateWorkOut(poison,muscles,goal)
    setWorkout(newWorkout)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />

      <Generator 
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && <WorkOur workout={workout}/>}
    </main>
  );
}

export default App;
