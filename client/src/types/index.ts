// state manage using useContext
export type State = {
  patients: { [id: string]: IBase | undefined };
};

export interface IBase {
  name: string;
  exerciseCount: number;
}

export interface IPartOne extends IBase {
  name: "Fundamentals";
  description: string;
}

export interface IPartTwo extends IBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

export interface IPartThree extends IBase {
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}
