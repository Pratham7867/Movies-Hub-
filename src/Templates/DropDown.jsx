export default function Dropdown({ title,Option = [], func }) {
  const optionsArray = Array.isArray(Option) ? Option : [];

  return (
    <div className="relative inline-block w-48">
      <select
        title={title}
        onChange={(e) => func(e.target.value)}
        className="w-full px-4 py-2 bg-[#1F1E24] text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B5CD3]"
      >
        {optionsArray.map((o, i) => (
          <option key={i} value={o} className="text-black">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
