export default function Input({
  type,
  placeholder,
  value,
  onchange,
  dynamicClass,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onchange(e.target.value)}
      className={`h-10 w-full shadow-lg rounded-md px-2 outline-2 outline-amber-100 focus:outline-amber-400 ${dynamicClass}`}
    />
  );
}
