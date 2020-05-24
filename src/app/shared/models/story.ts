export interface Story {
  user?: {
    uid: string;
    displayName: string | null;
    photoDataUrl: string | null;
    gender: '男性' | '女性' | 'その他' | '無回答';
  };
  story: string;
  prefecture: string;
  category: string | null;
  harassment: string | null;
  listCount?: number;
  created_at?: number;
  updated_at?: number;
}
