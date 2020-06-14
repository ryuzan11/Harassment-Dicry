export interface IUser {
  displayName: string;
  photoDataUrl: string;
  prefecture?: string;
  gender: '男性' | '女性' | 'その他' | '無回答';
  profile: string;
}

export interface User {
  uid: string;
  displayName: string;
  photoDataUrl: string;
  gender: '男性' | '女性' | 'その他' | '無回答';
}
