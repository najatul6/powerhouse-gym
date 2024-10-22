
export default function Button({text,fun}) {
  return (
    <button onClick={fun} className="rounded-md mx-auto border-solid bg-slate-950 font-semibold duration-200 blueShadow px-8 py-4 border-blue-400 border-2 ">
    <p>{text}</p>
    </button>
  )
}
