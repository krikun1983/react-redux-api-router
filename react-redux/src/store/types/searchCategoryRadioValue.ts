export interface SearchCategoryRadioValueState {
  searchCategoryRadioValue: string;
}

export interface SearchCategoryRadioValueAction {
  type: string;
  payload: string;
}

export enum SearchCategoryRadioValueActionTypes {
  API_CATEGORY_CHARACTER = 'CHARACTER',
  API_CATEGORY_LOCATION = 'LOCATION',
  API_CATEGORY_EPISODE = 'EPISODE',
}
