import { createContext, useMemo, useState, useContext } from "react";
import { TScore } from "./types";
import { STORY_POINTS_MATRIX } from './constants';

export type TName = keyof typeof DEFAULT_STATE;

interface ICueContext {
  // FOR REFACTOR: use typescript "in" -> DEFAULT_STATE
  complexity?: TScore
  uncertainty?: TScore
  effort?: TScore
  // FOR REFACTOR

  story_points: string
  total_cue: number
  setValue: (name: TName, score: TScore) => void
  reset: () => void
}

const DEFAULT_STATE = {
  complexity: undefined,
  uncertainty: undefined,
  effort: undefined,
}

const CueContext = createContext<ICueContext | null>(null);

function createCue() {
  function Provider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(DEFAULT_STATE);
    const value = useMemo((): ICueContext => {
      const total_cue = (state.complexity ?? 0)
        + (state.uncertainty ?? 0)
        + (state.effort ?? 0);
      const story_points = (() => {
        if (!state.complexity || !state.uncertainty || !state.effort) return '-'
        return STORY_POINTS_MATRIX[total_cue] ?? '-';
      })()
      return {
        ...state,
        story_points,
        total_cue,
        setValue: (name, score) => {
          setState((state) => ({
            ...state,
            [name]: score,
          }));
        },
        reset: () => {
          setState(DEFAULT_STATE);
        },
      };
    }, [state]);
    return (
      <CueContext.Provider value={value}>
        {children}
      </CueContext.Provider>
    )
  }
  function useCue() {
    const context = useContext(CueContext);
    if (!context) throw new Error("Ginamit mo ako sa labas ng provider!");
    return context;
  }
  return { Provider, useCue };
}

const { Provider, useCue } = createCue();

const { Provider: Provider2, useCue: useCue2 } = createCue();

export {
  Provider,
  useCue,

  Provider2,
  useCue2,
}
