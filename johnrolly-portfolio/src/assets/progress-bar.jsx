function CircularProgressBar({ percentage = 75, skill = "Skill" }) {

  const radius = 30;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar flex flex-col items-center text-center pt-5">
      <svg viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="
          w-20 h-20
          sm:w-20 sm:h-20
          md:w-25 md:h-25
          lg:w-30 lg:h-30
          xl:w-35 xl:h-35
        "
      >
        <circle
          stroke="#e5e7eb"
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
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">
          {percentage}%
        </text>
      </svg>
      <p className="mt-2 font-semibold
    sm:text-[15px] md:text-[20px] lg:text-xl xl:text-2xl
    ">{skill}</p>
    </div>
  );
}

export default CircularProgressBar;