import { useCue } from "../context";

function CueScore() {
  const context = useCue();
  return (
    <div className="flex">
      <div className="bg-white rounded w-full max-w-sm mx-auto p-3 text-center">
        <div className="text-7xl font-black font-mono">{context.story_points}</div>
        <div className="font-semibold text-xl">Story Points</div>
        <div className="font-mono text-slate-700">C.U.E. Score: ({context.total_cue})</div>
      </div>
    </div>
  )
}

export default CueScore