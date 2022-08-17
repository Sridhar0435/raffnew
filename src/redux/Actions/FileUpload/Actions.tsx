import { SET_FILE, RESET_FILE, SET_ERROR_FILE, RESET_ERROR_FILE } from './Type'

export const setFile = (data: any) => {
  return {
    type: SET_FILE,
    payload: data,
  }
}

export const resetFile = () => {
  return {
    type: RESET_FILE,
  }
}

export const setErrorFile = (data: any) => {
  return {
    type: SET_ERROR_FILE,
    payload: data,
  }
}

export const resetErrorFile = () => {
  return {
    type: RESET_ERROR_FILE,
  }
}
