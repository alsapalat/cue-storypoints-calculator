import InputList from "./InputList"
import { COMPLEXITY, EFFORT, UNCERTAINTY } from "../constants"

function CueInput() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InputList name="complexity" label="Complexity" options={COMPLEXITY} />
      <InputList name="uncertainty" label="Uncertainty" options={UNCERTAINTY} />
      <InputList name="effort" label="Effort" options={EFFORT} />
    </div>
  )
}

export default CueInput