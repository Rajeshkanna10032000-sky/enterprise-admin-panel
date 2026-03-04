export default function Card({ children }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 border">
      {children}
    </div>
  );
}