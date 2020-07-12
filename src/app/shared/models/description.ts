export interface Description {
  id: string;
  title: string;
}

export interface History {
  ad: string;
  event: string[];
}

export interface Low {
  abb: string;
  details: {
    [key: string]: string
  };
}
