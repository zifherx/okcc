export interface ICounter {
  items: iItems;
}

export interface iItems {
  id: number;
  text: string;
  lineRight: boolean;
  lineRightMobile: boolean;
  endCounter: number;
}
