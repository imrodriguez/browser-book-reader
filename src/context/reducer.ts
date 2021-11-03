import { State, Action } from './types';

export const readerReducer = (state: State, action: Action):State => {
    switch (action.type) {
        case 'next': {
            if (state.actualPage === state.numPages) return state
            return { ...state, actualPage: state.actualPage + 1 }
        }
        case 'previous': {
            if (state.actualPage === 1) return state
            return { ...state, actualPage: state.actualPage - 1 }
        }
        case 'setNumPages': {
            if (action.payload) return { ...state, numPages: action.payload }
            return state
        }
        case 'setActualPage': {
            if (action.payload) return { ...state, actualPage: action.payload }
            return state
        }
        case 'toggleContrast': {
            return { ...state, contrast: !state.contrast}
        }
        case 'download': {
            if (state.onDownload) {
                state.onDownload()
                return state;
            }
            return state;
        }
        case 'bookmark': {
            if (state.onBookMark) {
                state.onBookMark()
                return state;
            }
            return state;
        }
        case 'fullscreen': {
            if (!document.fullscreenElement) {
                const element = document.getElementById('browser-book-reader');

                if(element) element.requestFullscreen();
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            }
            return state;
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
};