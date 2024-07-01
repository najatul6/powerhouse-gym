import { IoCaretDown } from "react-icons/io5";
import { SCHEMES, WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Button from "../Shared/Button/Button";
import Title from "../Shared/Header/Title";
import { useState } from "react";

export default function Generator() {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_Power");

  function toggleModal() {
    setShowModal(!showModal);
  }
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscles?.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
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
            <button
              onClick={() => {
                setMuscles([])
                setPoison(type);
              }}
              key={typeIndex}
              className={`py-3 px-4 rounded-md border-solid bg-slate-950 font-semibold duration-200 hover:border-blue-600 border-2 ${
                type === poison ? "border-blue-600" : "border-blue-300"
              }`}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      {/* Section 02   */}
      <Title
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="flex flex-col border-2 rounded-lg border-blue-300 border-solid bg-slate-950 font-semibold duration-200">
        <button
          onClick={toggleModal}
          className={`relative flex justify-center items-center p-3 ${
            showModal && "border-b-2"
          }`}
        >
          <p className="capitalize">{muscles.length===0?"Select muscle groups":muscles.join(',')}</p>
          <IoCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={`py-3 hover:text-blue-600 duration-200 capitalize ${
                    muscles.includes(muscleGroup)
                      ? "text-blue-600 underline"
                      : " "
                  }`}
                >
                  <p className="uppercase">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Section 03   */}
      <Title
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemesIndex) => {
          return (
            <button
              onClick={() => setGoal(scheme)}
              key={schemesIndex}
              className={`py-3 px-4 rounded-md border-solid bg-slate-950 font-semibold duration-200 hover:border-blue-600 border-2  ${
                scheme === goal ? "border-blue-600" : "border-blue-300"
              }`}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
        <Button
          text="Formulate"
        />
    </SectionWrapper>
  );
}
