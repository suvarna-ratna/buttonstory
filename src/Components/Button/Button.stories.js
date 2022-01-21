import React from 'react';
import { Button } from './Button';

export default {
    title: "components/Button",
    Component: Button,
    argTypes: {backgroundColor: {control: 'color'}}
}

export const RedBtn = {
    backgroundColor: "red"
}