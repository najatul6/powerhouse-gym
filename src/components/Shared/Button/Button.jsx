
export default function Button({text,customClass}) {
  return (
    <button className={`border-2 rounded-md border-solid bg-slate-950 font-semibold duration-200 ${customClass}`}>
    <p>{text}</p>
    </button>
  )
}
