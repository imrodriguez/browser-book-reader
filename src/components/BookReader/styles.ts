import styled from '@emotion/styled';

const Wrapper = styled.div<{contrast:boolean, styles: string, minHeight: number}>`
    position: relative;
    overflow: scroll;
    height: 100%;
    min-height: ${props => props.minHeight === 0 ? '100%' : `${props.minHeight}px`};

    .react-pdf__Page__canvas {
        margin: 0 auto;
        ${props => {
            if (props.contrast) {
                return 'filter: invert(100%);'
            }

            return null;
        }}
    }

    ${props => props.styles}
`;

export {
    Wrapper
};