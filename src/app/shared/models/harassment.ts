export interface Harassment {
  'id': string;
  'name': string;
  'abbreviation': string | null;
  'category': '上下関係' | '性・恋愛' | '身体' | '心' | 'その他';
  'description': string | null;
  'state': 'public' | 'private';
}
