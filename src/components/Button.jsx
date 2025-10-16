export default function Button({ type, onclick, text }) {
  return (
    <button
      type={type}
      onClick={onclick}
      className="w-full h-10 bg-amber-500 text-white font-semibold rounded-md cursor-pointer active:bg-amber-700"
    >
      {text}
    </button>
  );
}
