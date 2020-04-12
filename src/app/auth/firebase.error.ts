import { List } from '../shared/models/List';

export const firebaseError: List<List<string>> = {
  'auth/invalid-email': {
    code: 'メールアドレスの間違い',
    message: 'メールアドレスのフォーマットが間違っています。'
  },
  'auth/wrong-password': {
    code: 'パスワードの間違い',
    message: '入力いただいたパスワードが間違っています。'
  },
  'auth/weak-password': {
    code: '脆弱性があります',
    message: 'パスワードは最低でも6文字以上のものをご利用ください。'
  },
  'auth/user-not-found': {
    code: 'ユーザが見つかりません',
    message: '入力いただいたユーザが存在しません。'
  },
  'auth/email-already-in-use': {
    code: 'ユーザが存在しています',
    message: 'このメールアドレスを利用したユーザがすでに作成されています。'
  },
};
