import { WORKOUTS } from "../../utils/swoldier";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Button from "../Shared/Button/Button";
import Title from "../Shared/Header/Title";

export default function Generator() {
  return (
    <SectionWrapper
      header={"Generate your work"}
      title={["It's", "huse", "O'Clock"]}
    >
      {/* Section 01   */}
      <Title
        index={"01"}
        title={"Pick your Position"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <Button
              customClass={"py-3 hover:border-blue-600 capitalize"}
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
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <Button
              customClass={"py-3 hover:border-blue-600 capitalize"}
              key={typeIndex}
              text={type.replaceAll("_", " ")}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
