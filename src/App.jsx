import Generator from "./components/Generator/Generator"
import Hero from "./components/Hero/Hero"
import WorkOur from "./components/WorkOut/WorkOur"


function App() {
  

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
     
      <Hero/>
      <Generator/>
      <WorkOur/>
      
    </main>
  )
}

export default App
