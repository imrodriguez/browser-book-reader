import React, { useState } from "react";
import { useReader } from '../../context/readerContext';
import { Pages } from '../Pages';
import { Document, pdfjs } from 'react-pdf';
import { Wrapper } from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
    file: string | typeof import("*.pdf");
    styles: string;
}
const DocumentWrapper = ({ file, styles }: Props): JSX.Element => {
    const [minHeight, setMinHeight] = useState(0);
    const context = useReader();

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        context.dispatch({
            type: 'setNumPages',
            payload: numPages
        });
    };

    const onLoadPage = (min:number) => {
        if (minHeight < min && minHeight === 0) {
            setMinHeight(min);
        }
    };

    return (
        <Wrapper contrast={context.state.contrast} minHeight={minHeight} styles={styles}>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Pages onLoad={onLoadPage} numPages={context.state.numPages || 0} mode={context.state.mode} />
            </Document>
        </Wrapper>
    );
};

export { DocumentWrapper };