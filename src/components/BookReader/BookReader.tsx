import React from 'react';
import { Controls } from '../Controls';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../styles/theme';
import { DocumentWrapper } from './DocumentWrapper';
import { ReaderProvider } from '../../context/readerContext';

interface Props {
    file: string | typeof import("*.pdf");
    mode?: string;
    bookmarked?: boolean;
    onDownload?: () => void;
    onBookMark?: () => void;
    barColor?: string;
    styles?: string;
}
const BookReader = ({ file, mode, bookmarked, onDownload, onBookMark, barColor, styles }: Props): JSX.Element => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="browser-book-reader">
            <ReaderProvider mode={mode} bookmarked={bookmarked} onDownload={onDownload} onBookMark={onBookMark}>
                <DocumentWrapper file={file} styles={styles || ''} />
                <Controls barColor={barColor || undefined}/>
            </ReaderProvider>
        </div>
    </ThemeProvider>
);

export { BookReader };