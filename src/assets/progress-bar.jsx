function CircularProgressBar({ percentage = 75, skill = "Skill" }) {

  const radius = 24;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar flex flex-col items-center text-center pt-5">
      <svg viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="
          w-16 h-16
          sm:w-18 sm:h-18
          md:w-20 md:h-20
          lg:w-22 lg:h-22
          xl:w-24 xl:h-24
        "
      >
        <circle
          stroke="#374151"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#1ABC9C"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.5s" }}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#e5e7eb" fontSize="12" fontWeight="bold">
          {percentage}%
        </text>
      </svg>
      <p className="mt-2 font-semibold text-gray-300
    text-sm sm:text-base md:text-lg
    ">{skill}</p>
    </div>
  );
}

export default CircularProgressBar;