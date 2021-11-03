import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { BookReader } from '../components/BookReader';
import test from './test.pdf';

export default {
    title: 'BookReader',
    component: BookReader,
} as unknown as Meta;

const Template: Story<ComponentProps<typeof BookReader>> = (args) => <BookReader {...args} />;

export const Reader = Template.bind({});

Reader.args = {
    file: test,
    mode: 'divided',
    onDownload: () => {
        console.log('hola')
    },
    bookmarked: false
};
