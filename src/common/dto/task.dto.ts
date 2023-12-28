export type TaskDto = {
  id: string;
  name: string;
  user_id: string;
  state_ids: string[];
  week: number;
  year: number;
  created_at: Date;
};
