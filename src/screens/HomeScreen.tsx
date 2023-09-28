import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityScreen, DashboardScreen, CardScreen, ProfileScreen} from './';


const Home = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={DashboardScreen} />
            <Tab.Screen name="Tarjeta" component={CardScreen} />
            <Tab.Screen name="Actividad" component={ActivityScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default Home;
