export interface CurrentPageState {
  currentPage: number;
}

export interface CurrentPageAction {
  type: string;
  payload: number;
}

export enum CurrentPageActionType {
  NEXT = 'NEXT',
  PREV = 'PREV',
  CURRENT = 'CURRENT',
}
