import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Title from "../Shared/Header/Title";


export default function Generator() {
  return (
    <SectionWrapper
      header={"Generate your work"}
      title={["It's", "huse", "O'Clock"]}
    >
      <Title index={"01"} title={"Pick your Position"} description={"Select the workout you wish to endure"}/>
    </SectionWrapper>
  );
}
