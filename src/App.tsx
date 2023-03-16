import CueInput from "./components/CueInput"
import CueScore from "./components/CueScore"
import { useCue } from "./context";

function App() {
  const { reset } = useCue();

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-end">
        <button
          className="px-6 h-9 text-sm border bg-pink-300 border-black font-semibold"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
      <CueInput />
      <CueScore />
    </div>
  )
}

export default App
