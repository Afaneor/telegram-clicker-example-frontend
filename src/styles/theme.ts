// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        primary: '#7e57c2',
        secondary: '#9575cd',
        background: '#f3e5f5',
        text: '#212121',
        accent: '#d1c4e9',
    },
    spacing: (factor: number) => `${factor * 8}px`,
};

export default theme;
