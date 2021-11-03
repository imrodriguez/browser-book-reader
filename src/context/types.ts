type Action = { 
    type: "download" | "next" | "previous" | "setNumPages" | "setActualPage" | "toggleContrast" | "bookmark" | "fullscreen"; 
    payload?: number;
}
type Dispatch = (action: Action) => void
type State = {
  actualPage: number, 
  numPages: number,
  mode: string,
  contrast: boolean
  onDownload: (() => void) | undefined,
  onBookMark: (() => void) | undefined
}
type ProviderProps = {
    children: React.ReactNode, 
    mode: string | undefined,
    bookmarked: boolean | undefined,
    onDownload: (() => void) | undefined
    onBookMark: (() => void) | undefined
}

export {
    Action,
    Dispatch,
    State,
    ProviderProps
};