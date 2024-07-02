import ExerciseCard from "../ExerciseCard/ExerciseCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function WorkOut({ workout }) {
  return (
    <SectionWrapper header={"Welcome to"} title={["The", "Danger", "Zone"]}>
      <div className="flex flex-col gap-4">
        {workout?.map((exercise, i) => {
          return (
            <ExerciseCard i={i} exercise={exercise} key={i}/>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
