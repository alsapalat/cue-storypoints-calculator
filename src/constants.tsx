import { IInputItem } from "./types";

export const COMPLEXITY: IInputItem[] = [
  { score: 1, title: 'Similar work was done countless of times before ', description: 'Only needs 1 person within the team to complete' },
  { score: 2, title: 'Similar work was done many times before ', description: 'Might need 1-2 person within the team to complete' },
  { score: 3, title: 'Similar work was done one time before', description: 'Might need 1-3 person within the team to complete' },
  { score: 4, title: 'Work was never done before and is a new concept', description: 'Might need 2-3 persons within the team to complete' },
  { score: 5, title: 'Work is out-of-scope as per job description', description: 'Might need 2-4 persons within the team to complete' },
];

export const UNCERTAINTY: Array<IInputItem> = [
  { score: 1, title: 'No dependency with other tasks to complete / begin work', description: 'No external collaboration / approval required' },
  { score: 2, title: 'Optional dependency with other tasks to complete / begin work', description: 'Optional external collaboration / approval is required from an individual' },
  { score: 3, title: 'One dependency with other tasks to complete / begin work', description: 'External collaboration / approval is required from an individual' },
  { score: 4, title: 'Multiple dependencies with other tasks to complete / begin work', description: 'External collaboration / approval is required from an individual' },
  { score: 5, title: 'Multiple & major dependencies with other tasks to complete / begin work', description: 'External collaboration / approval is required from a department / multiple parties' },
];

export const EFFORT: IInputItem[] = [
  { score: 1, title: '4-8hrs', description: '0.5d-1d' },
  { score: 2, title: '9-24hrs', description: '1d-3d' },
  { score: 3, title: '25-40hrs', description: '3d-5d' },
  { score: 4, title: '41-60hrs', description: '5d-7.5d' },
  { score: 5, title: '61-80hrs', description: '7.5d-10d' },
];

export const STORY_POINTS_MATRIX: Record<number, string> = {
  3: '1',
  4: '1',
  5: '2',
  6: '2',
  7: '3',
  8: '5',
  9: '8',
  10: '13',
  11: '13',
  12: '13',
  13: '21',
  14: '21',
  15: '34',
};
