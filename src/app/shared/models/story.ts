export interface Story {
  type: '相談' | '解決済み' | '閲覧のみ';
  state: 'public' | 'private';
  story: string;
  prefecture: string;
  category: string;
  harassment: string;
  listCount?: number;
  created_at?: number;
  updated_at?: number;
  user?: {
    uid: string;
    displayName: string;
    photoDataUrl: string;
    gender: '男性' | '女性' | 'その他' | '無回答';
  };
}
