import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme } from './themes/light';

import Routes from './Routes';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <ThemeProvider theme={lightTheme}>
                <StatusBar backgroundColor="#14ded0" />
                <Routes />
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default App;
