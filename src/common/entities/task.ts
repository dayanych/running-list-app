export interface Task {
  id: string;
  name: string;
  userId: string;
  week: number;
  year: number;
  stateIds: string[];
  createdAt: Date;
}
