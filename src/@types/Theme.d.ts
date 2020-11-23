import 'styled-components/native';

interface IPalette {
    accent: string;
}

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: IPalette;
    }
}
