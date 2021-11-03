import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Controls } from './Controls';
import { ReaderProvider } from '../../context/readerContext';
import { ProviderProps } from '../../context/types';

const customRender = (ui:any, {providerProps, ...renderOptions}:{providerProps:ProviderProps}) => {
    return render(
      <ReaderProvider {...providerProps}>{ui}</ReaderProvider>,
      renderOptions,
    )
  }

describe("Controls", () => {
    test("controls show", async () => {
        const providerProps = {
            children: <></>,
            mode: 'divided',
            bookmarked: undefined,
            onDownload: undefined,
            onBookMark: undefined
        };

        customRender(<Controls />, {providerProps});
        expect(document.getElementsByClassName('MuiAppBar-positionSticky').length).toBe(1);
        expect(document.querySelectorAll('.MuiToolbar-root button').length).toBe(4);
    });

    test("Invert mode and fullscreen buttons is showned", () => {
        const providerProps = {
            children: <></>,
            mode: 'divided',
            bookmarked: undefined,
            onDownload: undefined,
            onBookMark: undefined
        };

        customRender(<Controls />, {providerProps});
        expect(screen.getByRole('invert')).toBeInTheDocument();
        expect(screen.getByRole('fullscreen')).toBeInTheDocument();
    });

    test("Download button is showned", () => {
        const providerProps = {
            children: <></>,
            mode: 'divided',
            bookmarked: undefined,
            onDownload: () => { console.log('download')},
            onBookMark: undefined
        };

        customRender(<Controls />, {providerProps});
        expect(screen.getByRole('download')).toBeInTheDocument();
    });

    test("Bookmark button is showned", () => {
        const providerProps = {
            children: <></>,
            mode: 'divided',
            bookmarked: undefined,
            onDownload: undefined,
            onBookMark: () => { console.log('bookmark')}
        };

        customRender(<Controls />, {providerProps});
        expect(screen.getByRole('bookmark')).toBeInTheDocument();
    });

    test("Navigation buttons are showned in divided mode", () => {
        const providerProps = {
            children: <></>,
            mode: 'divided',
            bookmarked: undefined,
            onDownload: undefined,
            onBookMark: undefined
        };

        customRender(<Controls />, {providerProps});
        expect(screen.getByRole('next')).toBeInTheDocument();
        expect(screen.getByRole('previous')).toBeInTheDocument();
    });

    test("Navigation buttons are not showned in full mode", async () => {
        const providerProps = {
            children: <></>,
            mode: 'full',
            bookmarked: undefined,
            onDownload: undefined,
            onBookMark: undefined
        };

        customRender(<Controls />, {providerProps});

        expect(screen.queryByRole('previous')).not.toBeInTheDocument();
        expect(screen.queryByRole('next')).not.toBeInTheDocument();
    });
});