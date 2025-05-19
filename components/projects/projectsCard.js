export function ProjectCard({ image, title, date, description, status }) {
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full md:h-[25rem] object-cover"
        />

        {status && (
          <div className="absolute top-20 right-0 w-48">
            <img
              src="/images/mark.png"
              alt="status"
              className="w-full object-contain"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
              {status}
            </p>
          </div>
        )}
      </div>

      <div className="bg-slate-900 text-white p-4 py-7">
        <h3 className="font-semibold text-xl md:h-20 leading-tight uppercase overflow-hidden text-ellipsis">
          {title}
        </h3>
        {/* Optional: Add date below if needed */}
        {/* <p className="text-xs text-gray-400 mt-1">{date}</p> */}
      </div>
    </div>
  );
}
