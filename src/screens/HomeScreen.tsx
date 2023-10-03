import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { UpdateBalanceScreen, DashboardScreen, CardScreen, ProfileScreen, MovementsScreen} from './';

const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const DashboardStack = () => (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="UpdateBalance" component={UpdateBalanceScreen} />
        </Stack.Navigator>
      );


const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={DashboardStack} />
            <Tab.Screen name="Tarjeta" component={CardScreen} />
            <Tab.Screen name="Actividad" component={MovementsScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default Home;
