import {
  SET_PENDING_ACTION,
  RESET_PENDING_ACTION,
  SET_MYPENDING_ACTION,
  RESET_MYPENDING_ACTION,
  SET_MYINPROGRESS_TASKS,
  RESET_MYINPROGRESS_TASKS,
  SET_MYGROUPPENDING_ACTION,
  RESET_MYGROUPPENDING_ACTION,
  SET_MYGROUPUNASSIGN_TASKS,
  RESET_MYGROUPUNASSIGN_TASKS,
  RESET_ALL,
} from '../Actions/PendingAction/Type'
const initpendingactionState = {
  pendingActionDetails: undefined,
  mypendingAction: undefined,
  myinprogressTasks: undefined,
  mygroupPendingAction: undefined,
  mygroupUnassignTasks: undefined,
  // firstName: "",
  // middleName:""
}
const pendingActionReducer = (state = initpendingactionState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case SET_PENDING_ACTION:
      return {
        ...state,
        pendingActionDetails: payload,
      }
    case SET_MYPENDING_ACTION:
      return {
        ...state,
        mypendingAction: payload,
      }
    case SET_MYINPROGRESS_TASKS:
      return {
        ...state,
        myinprogressTasks: payload,
      }
    case SET_MYGROUPPENDING_ACTION:
      return {
        ...state,
        mygroupPendingAction: payload,
      }
    case SET_MYGROUPUNASSIGN_TASKS:
      return {
        ...state,
        mygroupUnassignTasks: payload,
      }

    case RESET_PENDING_ACTION:
      return state
    case RESET_MYPENDING_ACTION:
      return state
    case RESET_MYINPROGRESS_TASKS:
      return state
    case RESET_MYGROUPPENDING_ACTION:
      return state
    case RESET_MYGROUPUNASSIGN_TASKS:
      return state
    case RESET_ALL:
      return {
        pendingActionDetails: [],
        mypendingAction: [],
        myinprogressTasks: [],
        mygroupPendingAction: [],
        mygroupUnassignTasks: [],
      }
    default:
      return state
  }
}

export default pendingActionReducer
