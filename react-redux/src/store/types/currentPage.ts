export interface CurrentPageState {
  currentPage: number;
  prevPage: string | null;
  nextPage: string | null;
}

export interface CurrentPageAction {
  type: string;
  payload: number | string | null;
}

export enum CurrentPageActionType {
  NEXT = 'NEXT',
  PREV = 'PREV',
  CURRENT = 'CURRENT',
}
