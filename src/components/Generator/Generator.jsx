import { IoCaretDown } from "react-icons/io5";
import { SCHEMES, WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Button from "../Shared/Button/Button";
import Title from "../Shared/Header/Title";
import { useState } from "react";

export default function Generator() {
  const [showModal, setShowModal]=useState(false)
  const [poison, setPoison]=useState('individual')
  const [muscles, setMuscles]=useState([])
  const [goals, setGoals]=useState('strength_power')
  function toggleModal(){
    setShowModal(!showModal);
  }
  return (
    <SectionWrapper
      header={"Generate your work"}
      title={["It's", "huse", "O'Clock"]}
    >
      {/* Section 01   */}
      <Title
        index={"01"}
        title={"Pick your Position"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <Button
              customClass={"p-3 hover:border-blue-600 capitalize"}
              key={typeIndex}
              text={type.replaceAll("_", " ")}
            />
          );
        })}
      </div>

      {/* Section 02   */}
      <Title
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="flex flex-col border-2 rounded-lg border-blue-400 border-solid bg-slate-950 font-semibold duration-200">
        <button onClick={toggleModal} className="relative flex justify-center items-center p-3">
          <p>Select muscle groups</p>
          <IoCaretDown className="absolute right-3 top-1/2 -translate-y-1/2"/>
        </button>
        {
          showModal &&(
            <div>Fuck you</div>
          )
        }
      </div>

      {/* Section 03   */}
      <Title
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((schemes, schemesIndex) => {
          return (
            <Button
              customClass={"py-3 hover:border-blue-600 capitalize"}
              key={schemesIndex}
              text={schemes.replaceAll("_", " ")}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
      <Button customClass={"blueShadow px-8 py-4"} text="Formulate" />
      </div>
    </SectionWrapper>
  );
}
