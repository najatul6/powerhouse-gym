import Button from "../../Shared/Button/Button";

export default function HeroContent() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center p-5">
      <p>IT&prime;S TIME TO GET</p>
      <h2>
        Power<span>House</span> gym
      </h2>
      <p>
        I hereby acknowledgement that I may become{" "}
        <span>unbelievably powerhouse</span> and accept all risks of becoming
        the local <span> mass montrosity</span>, afflicted with severe body
        dismorphia, unable to fit through doors.
      </p>
      <Button text="heoo" />
    </div>
  );
}
