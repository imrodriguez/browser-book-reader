import React from 'react';
import { Page } from 'react-pdf';
import { useReader } from '../../context/readerContext';
import { Loading } from '../Loading';
import { InView } from 'react-intersection-observer';

interface Props {
    numPages: number;
    mode: string | undefined;
    onLoad: (arg0: number) => void;
}

const Pages = ({ numPages, mode, onLoad }: Props): JSX.Element => {
    const context = useReader();

    switch (mode) {
        case 'divided':
            return <Page onLoadSuccess={() => {
                onLoad(document.getElementById('browser-book-reader')?.offsetHeight || 0);
            }} loading={<Loading />} pageNumber={context.state.actualPage} />
        case 'full': {
            return (<>
                {[...Array(numPages).keys()].map((x, i) => {
                    return (
                        <InView as="div" onChange={(inView, entry) => { if (inView && entry.boundingClientRect.height > 100) context.dispatch({ type: 'setActualPage', payload: i + 1 }) }}>
                            <Page key={x} pageNumber={i + 1} />
                        </InView>
                    )
                })}
            </>);
        }
        default:
            return <Page pageNumber={context.state.actualPage} />
    }
};

export { Pages };