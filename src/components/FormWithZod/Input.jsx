export default function Input({ type, placeholder, ...rest }) {
  return (
    <input
      {...rest}
      type={type}
      placeholder={placeholder}
      className={`h-10 w-full outline-2 outline-amber-100 px-2 rounded-md font-semibold focus:outline-amber-300`}
    />
  );
}
