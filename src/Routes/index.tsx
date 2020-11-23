import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import PhotoView from '../Pages/PhotoView';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PhotoView" component={PhotoView} />
        </Stack.Navigator>
    );
};

export default Routes;
