export default function Button({ type, text, onclick }) {
  return (
    <button
      type={type}
      onClick={onclick}
      className="w-full h-10 font-semibold bg-amber-500 active:bg-amber-700 text-white rounded-md "
    >
      {text}
    </button>
  );
}
