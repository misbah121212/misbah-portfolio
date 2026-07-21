import { SparkleIcon } from "../ui/SparkleIcon";

const topSkills = [
  { name: "Python", percent: 95 },
  { name: "Machine Learning", percent: 90 },
  { name: "React.js", percent: 85 },
  { name: "Node.js", percent: 80 },
  { name: "FastAPI", percent: 85 },
  { name: "Cloud (GCP, AWS)", percent: 80 },
];

export const RightSkillsPanel = () => {
  return (
    <div className="w-[300px] h-full flex flex-col bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-6 shadow-[0_8px_32px_rgba(31,38,135,0.15)] relative overflow-hidden flex-shrink-0">
      
      <div className="w-full flex justify-end mb-6">
        <a 
          href="/resume.pdf"
          target="_blank"
          className="text-xs font-sans font-bold uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors shadow-sm flex items-center gap-2"
        >
          View Resume <SparkleIcon className="w-3 h-3" />
        </a>
      </div>

      <h3 className="font-sans font-bold text-white uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
        Skills <SparkleIcon className="w-4 h-4 text-white/50" />
      </h3>

      <div className="flex flex-col gap-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {topSkills.map((skill, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-white/80 font-sans text-xs">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-white/10 flex items-center justify-center">
                   {/* Decorative box */}
                   <span className="w-2 h-2 rounded-sm bg-lavender/60" />
                </span>
                {skill.name}
              </span>
              <span>{skill.percent}%</span>
            </div>
            {/* Progress bar container */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-lavender shadow-[0_0_10px_rgba(194,173,217,0.8)] rounded-full transition-all duration-1000"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full flex justify-center pb-2">
        <button className="w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl text-white/90 font-sans font-bold text-xs uppercase tracking-widest transition-all">
          View All Skills
        </button>
      </div>

    </div>
  );
};
