import { createSwitchNavigator, 
    createAppContainer, 
    createBottomTabNavigator } from 'react-navigation';

import InitGeder from './inits/InitGender'

const Routes = createAppContainer(
    createSwitchNavigator({
        InitGeder,
    })
);

export default Routes;