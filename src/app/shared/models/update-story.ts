export interface UpdateStory {
  story: string;
  prefecture: string | null;
  category: string | null;
  harassment: string | null;
  created_at: number;
  updated_at?: number;
}
