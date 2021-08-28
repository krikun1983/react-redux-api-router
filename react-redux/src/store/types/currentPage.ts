export interface CurrentPageState {
  currentPage: number | string | null;
  prevPage: number | string | null;
  nextPage: number | string | null;
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
