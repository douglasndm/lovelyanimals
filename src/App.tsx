import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#5F8F08" translucent />
            <Routes />
        </NavigationContainer>
    );
};

export default App;
