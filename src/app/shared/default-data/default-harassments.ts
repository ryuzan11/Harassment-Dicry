import { Harassment } from '../models/harassment';

export const HARASSMENTS: Harassment[] = [
  {name: 'その他', abbreviation: 'null', category: 'その他', description: 'null'},
  {name: 'アルコールハラスメント', abbreviation: 'アルハラ', category: '上下関係', description: 'アルコールに関する嫌がらせ。'},
  {name: 'お菓子ハラスメント', abbreviation: 'オカハラ', category: '上下関係', description: '職場にいる特定の人にだけお菓子を分けなかったり、旅行に行く人に対してお土産のお菓子を強要すること。'},
  {name: 'ヌードルハラスメント', abbreviation: 'ヌーハラ', category: '心', description: '麺類などをすする音による嫌がらせ。お茶漬けやお味噌汁などをすする音もヌードルハラスメントの一種に該当します。'},
  {name: 'エンジョイハラスメント', abbreviation: 'エンハラ', category: '心', description: '仕事は楽しいものだと思うことを強制すること。'},
  {name: '終われハラスメント', abbreviation: 'オワハラ', category: '上下関係', description: '企業が求職者に対してプレッシャーをかけたりして、自分の会社に決めることを誘導すること。'},
  {name: '時短ハラスメント', abbreviation: 'ジタハラ', category: '上下関係', description: '従業員に対して経営者や管理職が仕事の切り上げを強要すること。'},
  {name: 'テクノロジーハラスメント', abbreviation: 'テクハラ', category: '上下関係', description: 'パソコンやスマートフォンなどのテクノロジーに詳しい人がそうでない人に対して嫌がらせをすること。'},
  {name: 'パワーハラスメント', abbreviation: 'パワハラ', category: '上下関係', description: '同じ職場で働く人に対して職務上の地位などの優位性をふりかざし、業務上必要な範囲を超えた言動で精神的・身体的な苦痛を与えること。'},
  {name: 'リストラハラスメント', abbreviation: 'リスハラ', category: '上下関係', description: 'リストラ対象者に嫌がらせをしたり不当な配置転換をしたりして、自主退職に追い詰めること。'},
  {name: 'ジェンダーハラスメント', abbreviation: 'ジェンハラ', category: '性・恋愛', description: '性別で差別をすること。'},
  {name: 'セクシャルハラスメント', abbreviation: 'セクハラ', category: '性・恋愛', description: '性的な嫌がらせをすること。'},
  {name: 'テクスチュアルハラスメント', abbreviation: 'null', category: '性・恋愛', description: '文章上での性的な嫌がらせをすること。'},
  {name: 'パタニティハラスメント', abbreviation: 'パタハラ', category: '性・恋愛', description: '育児休暇制度を利用しようとする男性への嫌がらせをすること。'},
  {name: 'マタニティハラスメント', abbreviation: 'マタハラ', category: '性・恋愛', description: '妊娠をしている人や出産を終えた人への嫌がらせをすること。'},
  {name: 'マリッジハラスメント', abbreviation: 'マリハラ', category: '性・恋愛', description: '単身者に対して交際や結婚することを必要以上に勧めたり強要すること。'},
  {name: 'ラブハラスメント', abbreviation: 'ラブハラ', category: '性・恋愛', description: '恋愛や性に関する話題を公共の場に持ち込んだり、しつこく聞くことで相手に不快な思いをさせること。'},
  {name: 'スクールセクシャルハラスメント', abbreviation: 'スクハラ', category: '性・恋愛', description: '学校で教師が児童生徒に対して行う性的な嫌がらせをすること。'},
  {name: 'ゼクシャルハラスメント', abbreviation: 'ゼクハラ', category: '性・恋愛', description: '交際している男女のうち、女性が男性に対して結婚を迫ることで心理的負担を与えること。'},
  {name: 'エアコンハラスメント', abbreviation: 'エアハラ', category: '身体', description: '社内などでエアコンの設定温度によって他人の体調を損なわせてしまうこと。'},
  {name: '告白ハラスメント', abbreviation: '告ハラ', category: '性・恋愛', description: 'お互いの職場での関係性を気にせず無理に告白して、相手に迷惑をかけること。'},
  {name: 'スメルハラスメント', abbreviation: 'スメハラ', category: '身体', description: 'においで他人に不快な思いをさせること。'},
  {name: 'スモークハラスメント', abbreviation: 'スモハラ', category: '身体', description: '喫煙者がタバコの煙などで非喫煙者に不快な思いをさせること。'},
  {name: 'レイシャルハラスメント', abbreviation: 'レイハラ', category: '心', description: '人種や国籍といったことで相手に対して嫌がらせをすること。'},
  {name: 'レリジャスハラスメント', abbreviation: 'レリハラ', category: '心', description: '宗教関係者から受ける、精神的・経済的な嫌がらせのこと。'},
  {name: 'エアーハラスメント', abbreviation: 'null', category: '心', description: '雰囲気を壊す発言や態度を取り、相手を不快にさせること。'},
  {name: 'エイジハラスメント', abbreviation: 'エイハラ', category: '心', description: '年齢で差別をすること。'},
  {name: 'カラオケハラスメント', abbreviation: 'カラハラ', category: '身体', description: '接待や飲み会などのカラオケで歌いたくない人に無理やり歌うことを強要すること。'},
  {name: 'コミュニケーションハラスメント', abbreviation: 'コミュハラ', category: '心', description: '他人とコミュニケーションをとる事が苦手な人に対して、必要以上にコミュニケーションを取ろうとするハラスメント。'},
  {name: 'セカンドハラスメント', abbreviation: 'セカハラ', category: '心', description: 'ハラスメント被害者が事実を他人に訴えることで、逆に圧力や非難など二次的被害を受けること。'},
  {name: 'ソーシャルハラスメント', abbreviation: 'ソーハラ', category: '心', description: 'SNS上でおこなわれる嫌がらせのこと。'},
  {name: 'パーソナルハラスメント', abbreviation: 'パーハラ', category: '心', description: '個人の外見や趣味など、その人の個性を否定するような発言をすること。'},
  {name: 'フォトハラスメント', abbreviation: 'フォトハラ', category: '心', description: '相手の許可なく写真を撮ったり、写真を勝手にSNSにアップするなどして不快な思いをさせること。'},
  {name: 'モラルハラスメント', abbreviation: 'モラハラ', category: '心', description: '言葉や態度によって相手に精神苦痛を与えること。'},
  {name: 'ブラッドタイプハラスメント', abbreviation: 'ブラハラ', category: '身体', description: '血液型が与える印象でその人の人柄や性格を決めつけて不快な思いをさせること。'},
  {name: '家事ハラスメント', abbreviation: 'カジハラ', category: '性・恋愛', description: '家庭内での家事の分担等に関して発生する嫌がらせのこと。'},
  {name: 'アカデミックハラスメント', abbreviation: 'アカハラ', category: '上下関係', description: '大学教授がその立場を利用して学生に対しておこなう嫌がらせのこと。'},
  {name: 'エレクトロニックハラスメント', abbreviation: 'エレハラ', category: '身体', description: '電磁波や音波等のエネルギー媒体を人体や電子機器に意図的に照射し、攻撃、または監視・追尾する犯罪。'},
  {name: 'ドクターハラスメント', abbreviation: 'ドクハラ', category: '上下関係', description: '医師を含めた医療従事者が患者に対して不当な態度や言動を行なうこと。'},
  {name: 'ペットハラスメント', abbreviation: 'null', category: '心', description: '飼い主がペットに対しておこなう嫌がらせ。'},
  {name: '新型パワーハラスメント', abbreviation: '新型パワハラ', category: '心', description: 'やる気のある人間に対して力を発揮できない状況に誘導すること。'},
  {name: 'ハラスメントハラスメント', abbreviation: 'ハラハラ', category: '上下関係', description: '上司などに対して何かにつけて　「これはハラスメントだ」と主張すること。'},
  {name: '妊活ハラスメント', abbreviation: 'ニンハラ', category: '性・恋愛', description: '女性に対して妊娠や妊活のことを聞くことで不快な思いをさせること。'},
  {name: '2人目ハラスメント', abbreviation: 'フタハラ', category: '性・恋愛', description: '出産を終えた女性に次の子供の予定を聞く嫌がらせ。'},
  {name: 'カスタマーハラスメント', abbreviation: 'カスハラ', category: '上下関係', description: '客の立場を利用して自己中心的で理不尽な要求をすること。'},
  {name: 'グルメハラスメント', abbreviation: 'グルハラ', category: '上下関係', description: '食事の際に自分のこだわりの食べ方を相手に強要すること。'},
  {name: 'ソジハラスメント', abbreviation: 'ソジハラ', category: '心', description: '個人の性的指向あるいは性別に対するアイデンティティに対して差別発言などをすること。'},
];
