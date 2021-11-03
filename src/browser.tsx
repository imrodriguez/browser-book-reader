import React from 'react';
import ReactDOM from 'react-dom'
import { BookReader } from "./components/BookReader";

const renderBookReader = (element:HTMLElement, file: string) => {
    ReactDOM.render(
        <BookReader file={file}/>, 
        element
    );
};

(window as any).renderBookReader = renderBookReader;