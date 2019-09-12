import * as ActionType from '../actions/actionsConsMdmms';

export const initialState = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  // cm_mdmms: {},
  cm_aclgs: {},
  showList: false,
  // showList: true,
  isLoading: false,
  isUpdating: false,
  clearSortFilter: true,
  searchHistory: [],
  error: '',
};

// TODO: any
// const mdmmsReducer = (state = initialState, action: any) => {
const aclgsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.GET_MDMMS_START:
      return Object.assign({}, state, {
        showList: false,
        isLoading: true,
        error: '',
      });
    case ActionType.GET_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        showList: true,
        searchHistory: [
          action.payload.searchHistory,
          ...state.searchHistory,
        ].slice(0, 30),
        isLoading: false,
        error: '',
      });
    case ActionType.GET_MDMMS_FAIL:
      return Object.assign({}, state, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        cm_mdmms: {},
        showList: false,
        isLoading: false,
        error: action.payload.error,
      });

    case ActionType.GET_ACLGS_START:
      return Object.assign({}, state, {
        showList: false,
        isLoading: true,
        error: '',
      });
    case ActionType.GET_ACLGS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.aclgs,
        // ...action.payload.mdmms,
        showList: true,
        searchHistory: [
          action.payload.searchHistory,
          ...state.searchHistory,
        ].slice(0, 30),
        isLoading: false,
        error: '',
      });
    case ActionType.GET_ACLGS_FAIL:
      return Object.assign({}, state, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        cm_aclgs: {},
        showList: false,
        isLoading: false,
        error: action.payload.error,
      });

    case ActionType.ADD_MDMMS_START:
      return Object.assign({}, state, { isUpdating: true, error: '' });
    case ActionType.ADD_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        showList: true,
        isUpdating: false,
        clearSortFilter: true,
        error: '',
      });
    case ActionType.ADD_MDMMS_FAIL:
      return Object.assign({}, state, {
        isUpdating: false,
        error: action.payload.error,
      });

    case ActionType.DELETE_MDMMS_START:
      return Object.assign({}, state, { isUpdating: true, error: '' });
    case ActionType.DELETE_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        isUpdating: false,
        showList: true,
        clearSortFilter: false,
        error: '',
      });
    case ActionType.DELETE_MDMMS_FAIL:
      return Object.assign({}, state, {
        isUpdating: false,
        showList: action.payload.error.status !== 404,
        error: action.payload.error,
      });
    case ActionType.EDIT_MDMMS_START:
      return Object.assign({}, state, { isUpdating: true, error: '' });
    case ActionType.EDIT_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        isUpdating: false,
        clearSortFilter: false,
        error: '',
      });
    case ActionType.EDIT_MDMMS_FAIL:
      return Object.assign({}, state, {
        isUpdating: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};

export default aclgsReducer;
