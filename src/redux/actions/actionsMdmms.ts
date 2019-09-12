import * as ActionType from './actionsConsMdmms';

export const GetAclgs = {
  // TODO: any 多数
  start: (payload: any) => ({
    type: ActionType.GET_ACLGS_START,
    payload,
  }),
  succeed: (payload: any) => ({
    type: ActionType.GET_ACLGS_SUCCEED,
    payload,
  }),
  fail: (payload: any) => ({
    type: ActionType.GET_ACLGS_FAIL,
    payload,
  }),
};

export const GetMdmms = {
  // TODO: any 多数
  start: (payload: any) => ({
    type: ActionType.GET_MDMMS_START,
    payload,
  }),
  succeed: (payload: any) => ({
    type: ActionType.GET_MDMMS_SUCCEED,
    payload,
  }),
  fail: (payload: any) => ({
    type: ActionType.GET_MDMMS_FAIL,
    payload,
  }),
};

export const EditMdmms = {
  start: (payload: any) => ({
    type: ActionType.EDIT_MDMMS_START,
    payload,
    meta: { confirm: '更新してよろしいですか？' },
  }),
  succeed: (payload: any) => ({
    type: ActionType.EDIT_MDMMS_SUCCEED,
    payload,
  }),
  fail: (payload: any) => ({
    type: ActionType.EDIT_MDMMS_FAIL,
    payload,
  }),
};

export const DeleteMdmms = {
  start: (payload: any) => ({
    type: ActionType.DELETE_MDMMS_START,
    payload,
    meta: { confirm: '削除してよろしいですか？' },
  }),
  succeed: (payload: any) => ({
    type: ActionType.DELETE_MDMMS_SUCCEED,
    payload,
  }),
  fail: (payload: any) => ({
    type: ActionType.DELETE_MDMMS_FAIL,
    payload,
  }),
};

export const AddMdmms = {
  start: (payload: any) => ({
    type: ActionType.ADD_MDMMS_START,
    payload,
    meta: { confirm: '登録してよろしいですか？' },
  }),
  succeed: (payload: any) => ({
    type: ActionType.ADD_MDMMS_SUCCEED,
    payload,
  }),
  fail: (payload: any) => ({
    type: ActionType.ADD_MDMMS_FAIL,
    payload,
  }),
};

// export function getMdmmsStart(payload) {
//   return { type: ActionType.GET_MDMMS_START, payload }
// }

// export function getMdmmsSucceed(payload) {
//   return { type: ActionType.GET_MDMMS_SUCCEED, payload }
// }

// export function getMdmmsFail(payload) {
//   return { type: ActionType.GET_MDMMS_FAIL, payload }
// }
