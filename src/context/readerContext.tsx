import * as React from 'react';
import { readerReducer } from './reducer';

import { State, Dispatch, ProviderProps } from './types';

const ReaderStateContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

const ReaderProvider = ({children, mode, bookmarked, onDownload, onBookMark}: ProviderProps):JSX.Element => {
  const defaultState = {
    actualPage: 1,
    numPages: 0,
    mode: mode || 'divided',
    bookmarked: bookmarked || false,
    contrast: false,
    onDownload: onDownload || undefined,
    onBookMark: onBookMark || undefined
  };

  const [state, dispatch] = React.useReducer(readerReducer, defaultState)
  const value = {state, dispatch}
  return (
    <ReaderStateContext.Provider value={value}>
      {children}
    </ReaderStateContext.Provider>
  )
}

const useReader = () => {
  const context = React.useContext(ReaderStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {ReaderProvider, useReader}