import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Expenses from './pages/Expenses';
import AddExpenses from './pages/Expenses/AddExpense';


const Routes = createAppContainer(
    createStackNavigator({
        AddExpenses,
        Main,
        Expenses,
    }, {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7159c1'
            },
            headerTintColor: '#FFF'
        },
    }
    ));


export default Routes;