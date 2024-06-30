import Button from "../../Shared/Button/Button";

export default function HeroContent() {
  return (
    <div className="h-full flex flex-col gap-4 lg:gap-10 items-center justify-center text-center lg:max-w-[800px] w-full mx-auto p-5">
      <div className="flex flex-col gap-1 md:gap-4 ">
        <p className="md:font-bold text-sm md:text-base lg:text-lg">IT&prime;S TIME TO GET</p>
        <h2 className="uppercase font-semibold text-md md:text-4xl lg:text-5xl">
          <span className="text-blue-400">Power</span> House{" "}
          <span className="text-blue-400">gym</span>
        </h2>
      </div>

      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably powerhouse
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium"> mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <Button customClass={"blueShadow px-8 py-4 border-blue-400 border-2"} text="Accept & Begin" />
    </div>
  );
}
