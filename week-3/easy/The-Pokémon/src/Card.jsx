function Card({ name, weight, image, type }) {
  return (
    <div className="bg-neutral-800 text-white rounded-3xl shadow-lg p-6 w-64 h-80 flex flex-col items-center justify-between transition-transform hover:scale-105">
      {/* Image */}
      <div className="w-32 h-32 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">
        <img
          src={`${image}`}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold capitalize mt-4">{name}</h2>

      {/* Type Tag */}
      <span className="px-4 py-1 mt-2 text-sm rounded-full bg-yellow-500 text-black font-medium">
        {`Type: ${weight}`}
      </span>
      <span className="px-4 py-1 mt-2 text-sm rounded-full bg-yellow-500 text-black font-medium">
        {`Weight: ${weight}`}
      </span>
    </div>
  );
}

export default Card;
