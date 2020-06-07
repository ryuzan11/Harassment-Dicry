export interface ActionBtns {
  text: string;
  role?: string;
  icon?: string;
  handler?: (value: any) => boolean | void | {
    [key: string]: any;
  };
}
