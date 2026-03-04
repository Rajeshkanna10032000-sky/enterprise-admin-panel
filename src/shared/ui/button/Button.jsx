export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition cursor-pointer";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}