import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import { environment } from './environment'
import {
  error,
  appMenuOpen,
  fullScreen,
  themeMode,
  overlay,
} from "./actions"

export const appSlice = {
  pJSON,
  error: null,
  environment,
  overlay: false,
  fullScreen: false,
  appMenuOpen: false,
  themeMode: `light`,
  apiKey: `xyza-1234-asdf-9876`,
}

const appReducer = createReducer(appSlice, {

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

  [themeMode]: (state, action) => {
    state.themeMode = action.themeMode
    return state
  },

  [fullScreen]: (state, action) => {
    state.fullScreen = action.fullScreen
    return state
  },

  [appMenuOpen]: (state, action) => {
    state.appMenuOpen = action.appMenuOpen
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }